import "dotenv/config";
import Groq from "groq-sdk";
import { loadAgent } from "gitclaw";

import fs from "fs";
import path from "path";
import readline from "readline";

// ─── Load Agent Files ───────────────────────────────────────────────────────

function loadFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }
}

function buildSystemPrompt() {
  const soul = loadFile("./SOUL.md");
  const rules = loadFile("./RULES.md");
  const memory = loadFile("./memory/MEMORY.md");

  const repoAnalyzer = loadFile("./skills/repo-analyzer/SKILL.md");
  const issueFinder = loadFile("./skills/issue-finder/SKILL.md");
  const contributionPlanner = loadFile(
    "./skills/contribution-planner/SKILL.md"
  );
  const prReviewer = loadFile("./skills/pr-reviewer/SKILL.md");

  return `
${soul}

${rules}

## Memory
${memory}

## Skills Available

### Skill 1 — Repo Analyzer
${repoAnalyzer}

### Skill 2 — Issue Finder
${issueFinder}

### Skill 3 — Contribution Planner
${contributionPlanner}

### Skill 4 — PR Reviewer
${prReviewer}

## Instructions
- You are OpenSource Buddy, an AI agent living in a git repo
- Use your skills based on what the developer needs
- Always check memory for existing context before asking questions
- Be encouraging, clear, and step-by-step in all responses
- When you complete a skill, suggest the next logical skill to run
- Keep responses focused and beginner-friendly
  `.trim();
}

// ─── GitHub Repo Fetcher ─────────────────────────────────────────────────────

async function fetchGitHubData(repoUrl, action, options = {}) {
  try {
    const urlParts = repoUrl
      .replace("https://github.com/", "")
      .replace(/\/$/, "")
      .split("/");
    const owner = urlParts[0];
    const repo = urlParts[1];

    let apiUrl = "";

    switch (action) {
      case "get_repo_info":
        apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
        break;
      case "get_readme":
        apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;
        break;
      case "list_issues":
        const labels = options.labels
          ? `&labels=${options.labels.join(",")}`
          : "";
        apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues?state=open&sort=created&direction=desc${labels}&per_page=${options.limit || 10}`;
        break;
      case "get_contributing":
        apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/CONTRIBUTING.md`;
        break;
      default:
        apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
    }

    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "opensource-buddy-agent",
      },
    });

    if (!response.ok) {
      return {
        success: false,
        error: `GitHub API error: ${response.status} ${response.statusText}`,
      };
    }

    const data = await response.json();

    // Decode base64 content for file fetches
    if (data.content && data.encoding === "base64") {
      data.decoded_content = Buffer.from(data.content, "base64").toString(
        "utf-8"
      );
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// ─── Memory Updater ──────────────────────────────────────────────────────────

function updateMemory(update) {
  const memoryPath = "./memory/MEMORY.md";
  let memory = loadFile(memoryPath);
  const timestamp = new Date().toISOString();
  memory += `\n\n## Session Update — ${timestamp}\n${update}`;
  fs.writeFileSync(memoryPath, memory, "utf-8");
}

// ─── Terminal Input ──────────────────────────────────────────────────────────

function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function askQuestion(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// ─── Main Agent Loop ─────────────────────────────────────────────────────────

async function main() {
  console.log("\n");
  console.log("╔════════════════════════════════════════════╗");
  console.log("║       🌟 OpenSource Buddy Agent 🌟          ║");
  console.log("║   Your guide to your first open source     ║");
  console.log("║           contribution!                    ║");
  console.log("╚════════════════════════════════════════════╝");
  console.log("\nType 'exit' at any time to quit.\n");

  const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const agent = await loadAgent(".");
  const rl = createInterface();
  const conversationHistory = [];
  const systemPrompt = buildSystemPrompt();

  // Welcome message
  console.log("🤖 OpenSource Buddy: Hello! I am OpenSource Buddy 👋");
  console.log(
    "🤖 OpenSource Buddy: I will guide you through your first open source contribution step by step."
  );
  console.log(
    "🤖 OpenSource Buddy: To get started, paste a public GitHub repo URL you want to contribute to,"
  );
  console.log(
    "🤖 OpenSource Buddy: or just tell me what kind of project you are looking for!\n"
  );

  // Main conversation loop
  while (true) {
    const userInput = await askQuestion(rl, "👤 You: ");

    if (userInput.toLowerCase() === "exit") {
      console.log(
        "\n🤖 OpenSource Buddy: Great work today! Every step forward counts. Happy contributing! 🚀\n"
      );
      updateMemory(`Session ended by user at ${new Date().toISOString()}`);
      rl.close();
      break;
    }

    if (!userInput.trim()) {
      continue;
    }

    // Check if user pasted a GitHub URL and auto-fetch data
    let extraContext = "";
    const githubUrlMatch = userInput.match(
      /https:\/\/github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+/
    );

    if (githubUrlMatch) {
      const repoUrl = githubUrlMatch[0];
      console.log(`\n🔍 Fetching repo data from GitHub...`);

      const [repoInfo, readmeData, issuesData] = await Promise.all([
        fetchGitHubData(repoUrl, "get_repo_info"),
        fetchGitHubData(repoUrl, "get_readme"),
        fetchGitHubData(repoUrl, "list_issues", {
          labels: ["good first issue", "help wanted"],
          limit: 5,
        }),
      ]);

      if (repoInfo.success) {
        extraContext += `\n\n[LIVE GITHUB DATA FETCHED]\n`;
        extraContext += `Repo: ${repoInfo.data.full_name}\n`;
        extraContext += `Description: ${repoInfo.data.description}\n`;
        extraContext += `Language: ${repoInfo.data.language}\n`;
        extraContext += `Stars: ${repoInfo.data.stargazers_count}\n`;
        extraContext += `Open Issues: ${repoInfo.data.open_issues_count}\n`;
        extraContext += `License: ${repoInfo.data.license?.name || "None"}\n`;
        extraContext += `Topics: ${repoInfo.data.topics?.join(", ") || "None"}\n`;
      }

      if (readmeData.success && readmeData.data.decoded_content) {
        extraContext += `\nREADME Preview (first 1000 chars):\n`;
        extraContext += readmeData.data.decoded_content.slice(0, 1000);
      }

      if (issuesData.success && issuesData.data.length > 0) {
        extraContext += `\nBeginner-Friendly Issues Found:\n`;
        issuesData.data.slice(0, 5).forEach((issue) => {
          extraContext += `- #${issue.number}: ${issue.title} [${issue.labels.map((l) => l.name).join(", ")}]\n`;
        });
      }

      console.log(`✅ GitHub data fetched successfully!\n`);
    }

    // Add to conversation history
    conversationHistory.push({
      role: "user",
      content: userInput + extraContext,
    });

    try {
      // Call Claude API
      const response = await client.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  max_tokens: 1024,
  messages: [
    { role: "system", content: systemPrompt },
    ...conversationHistory
  ]
});
const reply = response.choices[0].message.content;

      const assistantMessage = reply;

      // Add assistant response to history
      conversationHistory.push({
        role: "assistant",
        content: assistantMessage,
      });

      console.log(`\n🤖 OpenSource Buddy: ${assistantMessage}\n`);

      // Auto-update memory if a key milestone is mentioned
      if (
        assistantMessage.toLowerCase().includes("pull request") ||
        assistantMessage.toLowerCase().includes("issue #") ||
        assistantMessage.toLowerCase().includes("merged")
      ) {
        updateMemory(
          `Key milestone detected in session:\n${assistantMessage.slice(0, 200)}`
        );
      }
    } catch (error) {
      console.error(`\n❌ Error calling Claude API: ${error.message}\n`);
      console.log(
  "Please check your GROQ_API_KEY environment variable.\n"
);
    }
  }
}

// ─── Run ─────────────────────────────────────────────────────────────────────

main().catch(console.error);
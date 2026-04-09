

# 🤝 OpenSource Buddy

### *Your AI-powered senior dev for open source contributions*
### From scared beginner → confident contributor → **merged PR** ✅

<br/>

[![GitAgent Standard](https://img.shields.io/badge/Built%20With-GitAgent%20Standard-6366f1?style=for-the-badge&logo=git&logoColor=white)](https://gitagent.sh)
[![Powered by Gemini](https://img.shields.io/badge/AI-Gemini%202.0%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)
[![Groq SDK](https://img.shields.io/badge/Runtime-Groq%20SDK-F55036?style=for-the-badge)](https://groq.com)
[![Node.js](https://img.shields.io/badge/Node.js-≥18.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Hackathon](https://img.shields.io/badge/GitAgent%20Hackathon-Lyzr%20AI-blueviolet?style=for-the-badge)](https://hackculture.io/hackathons/gitagent-hackathon)

<br/>

> **Submitted to the [GitAgent Hackathon by Lyzr AI](https://hackculture.io/hackathons/gitagent-hackathon)**
> A git-native AI agent that lives entirely inside a GitHub repo — no platform lock-in, no black boxes.

</div>

---

## 📖 Table of Contents

- [The Problem](#-the-problem)
- [What is OpenSource Buddy?](#-what-is-opensource-buddy)
- [How It Works — The Full Journey](#-how-it-works--the-full-journey)
- [Core Skills (Detailed)](#-core-skills-detailed)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Running the Agent](#-running-the-agent)
- [Deploying with Clawless](#-deploying-with-clawless)
- [GitAgent Standard Explained](#-gitagent-standard-explained)
- [Agent Rules & Boundaries](#-agent-rules--boundaries)
- [Agent Personality — The SOUL](#-agent-personality--the-soul)
- [Built By](#-built-by)

---

## 😰 The Problem

Open source contribution is one of the **most impactful** things a developer can do for their career — yet most beginners never make it past step one.

Here's what happens every time:

```
Step 1: Developer finds a cool open source repo they want to contribute to.
Step 2: Clones it. Opens it. Sees 200 files and 50,000 lines of code.
Step 3: Freezes. Doesn't know where to start. Can't find a good issue.
Step 4: Closes the tab. Never contributes. Feels like it's not for them.
```

There's no shortage of "how to contribute to open source" blog posts and YouTube tutorials. The problem isn't **information** — it's **personalized, real-time guidance**.

Developers don't need another generic tutorial. They need a **senior dev sitting next to them**, walking them through their specific repo, their specific issue, their specific pull request.

**That's exactly what OpenSource Buddy is.**

---

## 🤖 What is OpenSource Buddy?

**OpenSource Buddy** is a git-native AI agent built on the [GitAgent open standard](https://gitagent.sh). It acts as your experienced open source mentor — analyzing repos you want to contribute to, finding the right issues for your skill level, creating a step-by-step contribution plan with exact git commands, and reviewing your code diff before you hit submit.

**Key highlights:**

- 🧠 **AI-powered mentorship** — Powered by Google Gemini 2.0 Flash via Groq SDK for fast, intelligent guidance
- 🗂️ **Fully git-native** — The agent's identity, rules, memory, and skills all live inside this repo as plain, version-controlled files
- 🔓 **Framework-agnostic** — Built on the open GitAgent standard; runs with gitclaw, clawless, Claude Code, OpenClaw, or any compatible runtime
- 🎯 **Beginner-first design** — Specifically designed for developers making their first (or second, or third) open source contribution
- 🚀 **Serverless-ready** — Deployable via Clawless with zero infrastructure setup
- 💜 **Human-centered personality** — Has a defined SOUL that makes it feel like a warm, patient senior dev, not a cold chatbot

---

## 🗺️ How It Works — The Full Journey

OpenSource Buddy guides you through a complete, end-to-end contribution workflow in 4 stages:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       YOUR CONTRIBUTION JOURNEY                         │
└─────────────────────────────────────────────────────────────────────────┘

    YOU                         OPENSOURCE BUDDY
     │                                 │
     │  "Here's the GitHub repo URL"   │
     │ ──────────────────────────────► │
     │                                 │  🔍 STAGE 1: Repo Analyzer
     │                                 │     Reads project structure,
     │                                 │     tech stack, CONTRIBUTING.md,
     │                                 │     merged PRs, maintainer style
     │ ◄────────────────────────────── │
     │  "Here's the full breakdown:    │
     │   what this project does,       │
     │   how it's organized, and       │
     │   exactly what maintainers      │
     │   expect in contributions"      │
     │                                 │
     │  "Find me issues to work on"    │
     │ ──────────────────────────────► │
     │                                 │  🐛 STAGE 2: Issue Finder
     │                                 │     Scans all open issues,
     │                                 │     filters for beginner labels,
     │                                 │     reads each one, matches to
     │                                 │     your skill level
     │ ◄────────────────────────────── │
     │  "Here are your top 3 issues,   │
     │   ranked by difficulty and      │
     │   time investment. Issue #42    │
     │   is perfect for where you are" │
     │                                 │
     │  "I'll work on Issue #42"       │
     │ ──────────────────────────────► │
     │                                 │  🗺️  STAGE 3: Contribution Planner
     │                                 │     Creates personalized plan:
     │                                 │     fork → clone → branch →
     │                                 │     code → test → commit → PR
     │ ◄────────────────────────────── │
     │  "Here's your exact plan with   │
     │   copy-paste git commands and   │
     │   explanation of each step"     │
     │                                 │
     │  [Developer writes code]        │
     │                                 │
     │  "Review my code diff"          │
     │ ──────────────────────────────► │
     │                                 │  👀 STAGE 4: PR Reviewer
     │                                 │     Reviews your diff for:
     │                                 │     quality, style, test coverage,
     │                                 │     maintainer fit, PR description
     │ ◄────────────────────────────── │
     │  "Here's my feedback. Fix       │
     │   these 2 things, then you're   │
     │   100% ready to submit!"        │
     │                                 │
     ▼                                 ▼

  🎉 YOUR PR IS SUBMITTED. MAINTAINER REVIEWS. IT GETS MERGED.
     YOU ARE NOW AN OPEN SOURCE CONTRIBUTOR.
```

---

## 🛠️ Core Skills (Detailed)

OpenSource Buddy has 4 specialized skills that work together to take you from zero to merged PR.

---

### 🔍 Skill 1: `repo-analyzer`

**Purpose:** Understand any public GitHub repository from scratch — so you walk in knowing exactly what you're dealing with.

**What it does:**
- Identifies the full tech stack (language, framework, key dependencies)
- Maps the folder structure and explains what each directory/file does
- Reads `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and PR templates
- Analyzes recent merged PRs to understand maintainer expectations and quality standards
- Identifies coding conventions (linting rules, test requirements, doc standards)
- Summarizes everything in plain, beginner-friendly language

**Example output:**
```
📦 Project: expressjs/express
   JavaScript web framework | ⭐ 65k stars | 180+ open issues

📁 Structure:
  /lib        → Core framework code (router, request, response objects)
  /test       → Mocha + Supertest test suite
  /examples   → Standalone usage examples
  /benchmarks → Performance benchmarks

🤝 Contribution Style (from CONTRIBUTING.md + PR analysis):
  ✅ All PRs must include tests
  ✅ Follow StandardJS code style (no semicolons)
  ✅ Add JSDoc comments to public API functions
  ✅ Keep commits focused — one logical change per PR
  ⚠️  Maintainers are strict about test coverage — don't skip this!

📋 Maintainer response time: ~48 hours on weekdays
```

---

### 🐛 Skill 2: `issue-finder`

**Purpose:** Find the perfect issue for YOUR skill level — not just any beginner-labeled issue, but one that actually matches where you are.

**What it does:**
- Scans all open issues and filters by beginner-friendly labels: `good first issue`, `beginner`, `help wanted`, `easy`
- Actually reads each issue description to verify it is genuinely beginner-appropriate
- Checks whether issues are already assigned to someone else
- Filters out stale or inactive issues
- Matches issues to your stated skill level and programming language
- Ranks the shortlist by: difficulty, estimated time, impact, and how clearly the issue is defined
- Presents a ranked shortlist of top 3 recommendations with reasoning

**Example output:**
```
🐛 Top Issues for Your Skill Level:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🥇 ISSUE #5841 — Fix broken link in documentation
   Difficulty : ⭐ Easy
   Time       : ~30 minutes
   Labels     : good first issue, documentation
   Why        : Zero code changes. Just update a URL in a markdown file.
                Perfect for your very first PR — low risk, guaranteed merge.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🥈 ISSUE #5798 — Add JSDoc to response.js functions
   Difficulty : ⭐⭐ Medium-Easy
   Time       : ~3-4 hours
   Labels     : good first issue, help wanted
   Why        : You'll touch real code but the scope is very clear.
                Good if you know basic JavaScript. No logic changes, just docs.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🥉 ISSUE #5760 — Add missing test for router edge case
   Difficulty : ⭐⭐⭐ Medium
   Time       : ~5-6 hours
   Labels     : help wanted
   Why        : Involves writing a test in Mocha. Good learning opportunity
                if you want to understand how the framework works internally.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Which would you like to work on?
```

---

### 🗺️ Skill 3: `contribution-planner`

**Purpose:** Once you pick an issue, create a precise, step-by-step action plan so you always know what to do next.

**What it does:**
- Generates the exact git commands you need — copy-paste ready
- Explains what each command does and why it matters
- Identifies which specific files to modify and what to look for inside them
- Reminds you about project-specific conventions (linting, testing, etc.)
- Breaks the work into batches of max 3 action items at a time — never overwhelming
- Adjusts the plan based on your skill level

**Example output:**
```
📋 Contribution Plan — Issue #5798: Add JSDoc to response.js

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔵 PHASE 1 — Set Up (do this now)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Fork the repo
   → Go to https://github.com/expressjs/express
   → Click the "Fork" button (top-right corner)
   → This creates your own copy of the repo

2. Clone YOUR fork (not the original)
   git clone https://github.com/YOUR-USERNAME/express.git
   cd express

3. Create a new branch for your work
   git checkout -b add-jsdoc-response
   ⚠️  Always create a branch. NEVER commit directly to main.

✅ Come back when Phase 1 is done — I'll give you Phase 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟡 PHASE 2 — Make Changes (after Phase 1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. Open this file: lib/response.js
   → Find all exported functions that are missing JSDoc comments
   → A JSDoc comment looks like this:
   
   /**
    * Sets the HTTP response status code.
    * @param {number} code - The HTTP status code
    * @returns {ServerResponse} The response object for chaining
    */
   res.status = function status(code) { ... }

5. Add JSDoc to each function following the pattern above
   → Check existing JSDoc in the file to match the style
   → The issue asks for: @param, @returns, and a one-line description

6. Run the project's linter to make sure your code is clean
   npm run lint
   → Fix any errors it reports before moving to Phase 3

✅ Come back when Phase 2 is done — I'll walk you through committing and PRs.
```

---

### 👀 Skill 4: `pr-reviewer`

**Purpose:** Review your code diff before you submit — like a senior dev doing a pre-review so you don't get rejected.

**What it does:**
- Checks your changes against the project's coding style and conventions
- Flags any issues that would likely get your PR rejected or require revisions
- Suggests improvements for code quality, readability, and clarity
- Verifies your changes actually address what the issue requested
- Reminds you about tests, documentation, and PR description
- Gives you a final "ready to submit" signal — with confidence

**Example output:**
```
👀 PR Review — Your diff for Issue #5798

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 MUST FIX before submitting:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ Line 203: res.sendFile() is missing @param for the options object.
  The issue specifically mentions this function — don't skip it.
  
→ You modified lib/response.js but didn't update the type definitions.
  Express has a types/ folder. Check if res.status() has a @types entry
  and update it to match your JSDoc.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟡 SUGGESTIONS (will improve your PR's chance of merging):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ Line 87: Your description says "sets the status" — existing JSDoc in
  this file uses action verbs: "Set the HTTP status code." Match the style.
  
→ Add @example blocks to 2-3 of the most commonly used functions.
  Maintainers love this — it makes the docs directly useful to users.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ WHAT'S GOOD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ You covered all 14 functions mentioned in the issue. Great thoroughness.
→ Your @param types are accurate and match the codebase conventions.
→ Linter passes — clean code, no style violations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 PR DESCRIPTION TEMPLATE (copy this):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Title: Add JSDoc comments to response.js (fixes #5798)

## What this PR does
Adds JSDoc documentation to all exported functions in lib/response.js,
including @param, @returns, and @example where applicable.

## Related issue
Closes #5798

## Changes made
- Added JSDoc to 14 functions in lib/response.js
- Updated type definitions in types/index.d.ts to match

## Testing
No logic changes — existing test suite passes: ✅
npm test → all 1,247 tests passing

Fix the 2 red items above, then you are 100% ready to submit. 
Opening a PR is a big deal — be proud of yourself. 🚀
```

---

## 🧰 Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Agent Standard** | [GitAgent](https://gitagent.sh) | 0.1.0 | Git-native agent definition format |
| **Agent Runtime** | [gitclaw](https://github.com/open-gitagent/gitclaw) | ^1.1.8 | Converts this git repo into a running agent |
| **Serverless Deploy** | [clawless](https://github.com/open-gitagent/clawless) | ^0.4.13 | Zero-infrastructure WebContainer deployment |
| **AI Model** | Google Gemini 2.0 Flash | latest | Primary language model (fast + capable) |
| **Inference SDK** | [groq-sdk](https://groq.com) | latest | Ultra-fast AI inference |
| **Runtime** | Node.js | ≥18.0.0 | JavaScript execution environment |
| **Config** | dotenv | ^17.4.0 | Secure environment variable management |
| **Module System** | ES Modules | — | `"type": "module"` — modern JavaScript |
| **Language** | JavaScript | — | 100% JS codebase |

---

## 📁 Project Structure

```
opensource-buddy/
│
├── 📄 agent.yaml              ← Agent manifest (name, model, skills, tags)
├── 💜 SOUL.md                 ← Agent identity, personality, communication style
├── 📜 RULES.md                ← Behavioral rules (must-always / must-never)
├── ☁️  clawless.config.js      ← Serverless deployment configuration
├── 🚀 demo.js                 ← Entry point — run this to start the agent
├── 📦 package.json            ← Node.js dependencies and npm scripts
├── 🔒 package-lock.json       ← Locked dependency tree
├── 🙈 .gitignore              ← Files excluded from version control
│
├── skills/                    ← Agent capability definitions
│   ├── repo-analyzer/         ← Analyze any public GitHub repository
│   ├── issue-finder/          ← Find beginner-friendly issues
│   ├── contribution-planner/  ← Generate step-by-step contribution plans
│   └── pr-reviewer/           ← Review code diff before PR submission
│
├── tools/                     ← Custom tools the agent can invoke
│   └── ...
│
└── memory/                    ← Agent memory (session context + persistence)
    └── ...
```

### Key Files Explained

**`agent.yaml`** — The core manifest of the agent. Everything starts here:
```yaml
spec_version: "0.1.0"
name: opensource-buddy
version: 0.1.0
description: "Guides developers through their first open source contribution — from repo analysis to merged PR."
model:
  preferred: google:gemini-2.0-flash
skills:
  - repo-analyzer
  - issue-finder
  - contribution-planner
  - pr-reviewer
tags:
  - open-source
  - developer-tools
  - onboarding
  - github
  - hackathon
```

**`SOUL.md`** — Defines who the agent *is*. The personality, communication style, values, and expertise. This is what makes OpenSource Buddy feel like a warm, encouraging senior dev — not a cold chatbot.

**`RULES.md`** — Hard behavioral constraints. What the agent must always do, must never do, and where its firm boundaries are. Ensures safe, ethical, high-quality behavior in every interaction.

**`demo.js`** — The entry point. Run `node demo.js` or `npm start` to launch the agent locally using the gitclaw runtime.

---

## 🚀 Getting Started

### Prerequisites

You need **Node.js version 18 or higher** installed on your machine.

```bash
# Check your Node.js version
node --version
# Should output: v18.x.x or higher

# Check npm
npm --version
```

If you don't have Node.js ≥18, download it from [nodejs.org](https://nodejs.org) (choose the LTS version).

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/bonamukkala-bot/opensource-buddy.git
cd opensource-buddy
```

---

### Step 2 — Install Dependencies

```bash
npm install
```

This installs all required packages:

| Package | What it does |
|---|---|
| `gitclaw` | Runs the agent from this git repo definition |
| `clawless` | Handles serverless deployment |
| `groq-sdk` | Connects to Groq for fast AI inference |
| `dotenv` | Loads environment variables from your `.env` file |

---

### Step 3 — Configure Environment Variables

Create a `.env` file in the root of the project:

```bash
# On Mac/Linux
touch .env

# On Windows (Command Prompt)
type nul > .env

# On Windows (PowerShell)
New-Item .env
```

Open `.env` in any text editor and add your API keys:

```env
# ─────────────────────────────────────────
# REQUIRED: Groq API Key (free at groq.com)
# ─────────────────────────────────────────
GROQ_API_KEY=your_groq_api_key_here

# ─────────────────────────────────────────
# OPTIONAL: Google Gemini API Key
# ─────────────────────────────────────────
GEMINI_API_KEY=your_gemini_api_key_here
```

**How to get your Groq API key (free):**
1. Go to [console.groq.com](https://console.groq.com)
2. Sign up with Google or GitHub — it's free
3. Click "Create API Key"
4. Copy the key and paste it into your `.env` file

> ⚠️ **Important:** Never commit your `.env` file to GitHub. It's already included in `.gitignore` to protect your keys.

---

### Step 4 — Validate the Agent

Before running, verify the agent definition is correct:

```bash
npm run validate
```

This runs `npx gitagent validate` which checks:
- `agent.yaml` has all required fields and valid syntax
- All referenced skills exist in the `skills/` directory
- The agent definition follows the GitAgent spec

**Expected output:**
```
✅ agent.yaml is valid
✅ All skills found: repo-analyzer, issue-finder, contribution-planner, pr-reviewer
✅ GitAgent spec version 0.1.0 — compatible
```

---

### Step 5 — View Agent Info

```bash
npm run info
```

Displays the agent's complete configuration, capabilities, and metadata. Good for confirming everything loaded correctly before running.

---

## ▶️ Running the Agent

### Run Locally

```bash
npm start
```

or equivalently:

```bash
npm run demo
# or
node demo.js
```

This starts OpenSource Buddy locally using the gitclaw runtime.

**What happens when you run it:**

```
🤝 OpenSource Buddy v0.1.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Powered by GitAgent Standard | Gemini 2.0 Flash via Groq
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hello! I'm OpenSource Buddy — your personal open source contribution guide.

I'll help you go from "I want to contribute" to "my PR got merged" — 
step by step, with no experience required.

Before we start, quick question: What's your programming experience level?

  1. Complete beginner (I know some code but never contributed to open source)
  2. Some experience (I've made 1-2 contributions before)
  3. Comfortable (I contribute occasionally, looking to get better at it)

Your choice → 
```

**Example full session:**

```bash
Your choice → 1

Great! I'll keep things clear and explain every step as we go. 
Now, paste the URL of a public GitHub repo you'd like to contribute to:

→ https://github.com/expressjs/express

🔍 Analyzing repo... done!

📦 express by expressjs
   The most popular Node.js web framework.
   Language: JavaScript | ⭐ 65.2k stars | 183 open issues

📁 Structure:
   /lib      → Core framework (router, request, response)
   /test     → Mocha test suite (ALL PRs must include tests)
   /examples → Standalone usage examples

🤝 What maintainers expect:
   ✅ Tests for every change (non-negotiable)
   ✅ StandardJS style — no semicolons
   ✅ JSDoc for any public API changes
   
Read CONTRIBUTING.md before your first PR — it has important details.

🐛 Finding beginner-friendly issues... done!

Here are your top 3 issues:

1. [EASY ~30min]   #5841 — Fix broken link in README
2. [MEDIUM ~3hrs]  #5798 — Add JSDoc to response.js
3. [MEDIUM ~5hrs]  #5760 — Add missing test for router edge case

Which would you like to work on? →
```

---

## ☁️ Deploying with Clawless

Clawless lets you deploy OpenSource Buddy as a live, serverless agent — accessible to anyone via a URL, with zero infrastructure to manage.

### Deploy Command

```bash
npm run deploy
```

This runs `clawless deploy` which:

1. Packages the agent into a self-contained WebContainer environment
2. Uploads it to Clawless's serverless runtime infrastructure
3. Assigns your agent a live public URL
4. Keeps the agent running — no cold starts, no servers to maintain

### Clawless Configuration

Deployment behavior is controlled by `clawless.config.js`:

```js
// clawless.config.js
export default {
  agent: './agent.yaml',   // Points to agent definition
  entry: './demo.js',      // Entry point for the agent
  // Additional deployment settings...
}
```

### After Deploying

Once deployed, you'll get a URL like:
```
https://opensource-buddy.clawless.dev
```

Share this URL with anyone who wants to use OpenSource Buddy — no install, no setup, just open and start contributing.

---

## 📐 GitAgent Standard Explained

OpenSource Buddy is built on the **GitAgent open standard** — a framework-agnostic specification for defining AI agents using git repositories as the source of truth.

### The Core Problem GitAgent Solves

Traditional AI agents are **platform-locked**:
- Build in LangChain → can't move to CrewAI without rewriting
- Build in Claude Code → can't export to another runtime
- Build in AutoGen → your agent is stuck inside AutoGen forever

GitAgent solves this by saying: **the git repo IS the agent**. Every aspect of the agent's definition — its identity, rules, skills, memory, tools — lives as plain files in a git repository.

### The GitAgent File Map

| File/Folder | What It Defines |
|---|---|
| `agent.yaml` | Agent manifest — name, model, skills list, metadata |
| `SOUL.md` | Identity, personality, communication style |
| `RULES.md` | Behavioral guardrails — must-always and must-never |
| `skills/` | What the agent can do — each skill is a folder |
| `memory/` | Persistent state and session context |
| `tools/` | External integrations the agent can call |

### Compatibility — Run Anywhere

Because OpenSource Buddy follows the open GitAgent standard, it runs on **any compatible runtime** without modification:

| Runtime | How to Use |
|---|---|
| **gitclaw** (used here) | `node demo.js` — the SDK handles everything |
| **clawless** | `clawless deploy` — serverless deployment |
| **Claude Code** | `npx gitagent run . --adapter claude-code` |
| **OpenClaw** | `npx gitagent run . --adapter openclaw` |
| **System Prompt** | `npx gitagent export --format system-prompt` |

**One agent definition. Any runtime. Zero rewriting.**

### Useful GitAgent Commands

```bash
# Validate the agent definition
npx gitagent validate

# View agent configuration and metadata
npx gitagent info

# Export agent as a system prompt (paste into any LLM)
npx gitagent export --format system-prompt

# Run with a specific adapter
npx gitagent run . --adapter lyzr
npx gitagent run . --adapter claude-code

# Get help with all available commands
npx gitagent --help
```

---

## 📜 Agent Rules & Boundaries

OpenSource Buddy's behavior is governed by hard rules defined in `RULES.md`. These ensure every interaction is safe, ethical, and genuinely helpful.

### ✅ Must Always

- Ask for the developer's skill level **before** giving any advice
- Explain **why** a step is needed, not just what to do
- Suggest only issues labeled `good first issue`, `beginner`, `help wanted`, or `easy` for first-timers
- Verify a GitHub repo is **public** before attempting to analyze it
- Provide **step-by-step git commands** for every action (fork, clone, branch, commit, PR)
- Remind developers to read `CONTRIBUTING.md` before making any contribution
- Always recommend creating a **new branch** — never commit directly to `main`
- Keep explanations **beginner-friendly** unless the developer explicitly asks for depth
- Give **encouragement** after each completed step — small wins matter

### ❌ Must Never

- Tell a developer to push directly to `main` or `master`
- Recommend closing or ignoring an issue without reading the full description
- Suggest copying code from another project without proper attribution
- Make assumptions about the developer's skill level without asking first
- Overwhelm developers with **more than 3 action items at a time**
- Recommend spammy or low-quality contributions just to inflate PR count
- Share or expose any API keys, tokens, or credentials
- Claim an issue is "easy" without **actually reading** the issue description
- Encourage a developer to submit a PR that isn't ready for review
- Tell developers to ignore or argue with maintainer feedback

### 🔒 Hard Boundaries

- Only analyzes **public** GitHub repositories — no private repos
- Does **not** write entire features from scratch — it guides, plans, and assists
- Will **not** help with contributions that violate a project's Code of Conduct
- If a repo has **no beginner-friendly issues**, it says so honestly instead of inventing them

---

## 💜 Agent Personality — The SOUL

What separates OpenSource Buddy from a generic AI assistant is its **SOUL** — a defined identity in `SOUL.md` that shapes every single interaction.

### Core Identity

> *"I am OpenSource Buddy — a friendly, experienced open source mentor who has contributed to hundreds of projects. I specialize in making open source feel welcoming, not overwhelming. I turn a scary GitHub repo into a clear, actionable path to your first merged PR."*

### Communication Style

- **Encouraging but honest** — doesn't sugarcoat technical challenges, breaks them down into manageable pieces
- **Pair-programming voice** — explains like a senior dev sitting with a junior, not a teacher lecturing
- **Simple first, deeper on request** — uses plain language by default, goes technical only when asked
- **Celebrates small wins** — finding an issue, making a commit, opening a PR are all worth celebrating
- **Never condescending** — never makes the developer feel stupid for not knowing something

### Personality Traits

- 🌱 Warm, patient, and genuinely excited about open source
- 🧠 Remembers that everyone's first contribution felt scary
- ⚖️ Treats every repo — whether 50 stars or 50,000 — with equal respect
- 🎯 Direct: gives you a plan, not just general advice
- 🌍 Believes open source is for everyone, not just "10x developers"

### Core Values

| Value | What It Means in Practice |
|---|---|
| **Inclusivity** | Open source should welcome all skill levels — no gatekeeping |
| **Clarity** | No jargon without explanation. If I use a term, I define it. |
| **Action** | I don't just explain. I help you *do*. |
| **Respect** | For maintainers, for contributors, for the codebase |
| **Growth** | Every contribution is a step forward, however small |

---

## 👤 Built By

**Bonamukkala Charan Reddy**
First-Year B.Tech Student | NIAT Hyderabad, India
Focused on Generative AI & AI Agent Development

- 🐙 GitHub: [bonamukkala-bot](https://github.com/bonamukkala-bot)
- 📺 YouTube & Instagram: **charanreddysinsights** *(documenting the AI learning journey)*

---

## 🏆 Hackathon Submission

This project was built for the **[GitAgent Hackathon by Lyzr AI](https://hackculture.io/hackathons/gitagent-hackathon)** hosted on HackCulture.

| Detail | Info |
|---|---|
| **Hackathon** | GitAgent Hackathon by Lyzr AI |
| **Platform** | HackCulture |
| **Theme** | Build a framework-agnostic, git-native AI agent using the open GitAgent standard |
| **Prize Pool** | $1,000 USD |
| **Participation** | Individual |
| **Deadline** | April 10, 2026 |

**Problem solved:** Making open source contribution accessible and approachable for every developer, regardless of experience level.

---

## 📄 License

This project is licensed under the **MIT License** — free to fork, use, remix, and build on.

---

<div align="center">

**⭐ Star this repo if it helped you make your first open source contribution.**

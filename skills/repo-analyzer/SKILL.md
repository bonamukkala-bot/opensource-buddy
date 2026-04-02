---
name: repo-analyzer
description: "Reads a public GitHub repository and explains its structure,
  tech stack, architecture, and entry points in beginner-friendly language."
allowed-tools: Bash Read Write
---

# Repo Analyzer Skill

## Purpose
Analyze a public GitHub repository and give the developer a clear,
beginner-friendly understanding of what the project does, how it is
structured, and where they should focus attention before contributing.

## Trigger
Use this skill when the developer provides a GitHub repo URL and wants
to understand the codebase before finding issues or contributing.

## Steps

### Step 1 — Fetch Repo Metadata
- Read the repo's `README.md` to understand what the project does
- Identify the primary programming language(s) used
- Check for `CONTRIBUTING.md` — if it exists, flag it as must-read
- Check for `CODE_OF_CONDUCT.md` — mention it exists if found
- Look at `package.json`, `requirements.txt`, `go.mod`, `Cargo.toml`,
  or similar dependency files to identify the tech stack

### Step 2 — Map the Folder Structure
- List the top-level folders and explain what each one likely contains
- Identify the entry point of the project (e.g. `index.js`, `main.py`,
  `src/main.rs`, `app.py`)
- Highlight the most important folders a contributor would work in
- Flag any folders that beginners should avoid (e.g. build outputs,
  auto-generated code, core internals)

### Step 3 — Summarize the Tech Stack
- List every major technology, framework, and library used
- For each one, give a one-line explanation of what it does in this project
- Rate the learning curve: Easy / Medium / Hard for a beginner

### Step 4 — Identify Contribution Zones
- Point out which parts of the codebase are safest for a first contribution
  (documentation, tests, small bug fixes, UI tweaks)
- Identify which files are touched most often in recent commits
- Flag any areas marked as "good for beginners" in CONTRIBUTING.md

### Step 5 — Deliver the Summary
Output a clean, structured report with these sections:
1. **What This Project Does** (2-3 sentences)
2. **Tech Stack** (bullet list with difficulty ratings)
3. **Folder Map** (annotated structure)
4. **Best Places to Start** (specific files or folders)
5. **Must-Read Files Before Contributing** (CONTRIBUTING.md, README, etc.)
6. **Next Step** → suggest running the issue-finder skill next

## Output Format
- Use simple language — assume the developer is new to this codebase
- Use bullet points and short paragraphs
- Highlight important items in **bold**
- End every analysis with an encouraging message
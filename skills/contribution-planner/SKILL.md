---
name: contribution-planner
description: "Creates a detailed, step-by-step plan for a developer to make
  their first open source contribution — from forking the repo to submitting
  a pull request."
allowed-tools: Bash Read Write
---

# Contribution Planner Skill

## Purpose
Turn a chosen GitHub issue into a clear, actionable contribution plan.
Give the developer exact git commands, file locations, coding guidance,
and PR writing tips so they can go from zero to a merged PR with
confidence.

## Trigger
Use this skill after the developer has chosen an issue from issue-finder,
or when they ask "how do I start working on this issue?"

## Steps

### Step 1 — Confirm the Plan Inputs
Before planning, confirm:
- Which issue are we solving? (number + title)
- What repo are we working on? (GitHub URL)
- What is the developer's local setup? (OS, code editor, terminal)
- Do they have git installed and configured?
- Do they have a GitHub account with SSH or HTTPS set up?

### Step 2 — Generate the Fork & Clone Plan
Provide exact commands for this sequence:

**Fork the Repo**
```
1. Go to [repo URL] on GitHub
2. Click the "Fork" button (top right)
3. Select your GitHub account as the destination
```

**Clone Your Fork Locally**
```bash
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
cd REPO-NAME
```

**Add the Original Repo as Upstream**
```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/REPO-NAME.git
git remote -v
```

**Create a New Branch**
```bash
git checkout -b fix/issue-[NUMBER]-short-description
```

### Step 3 — Set Up the Development Environment
- Check if there is a setup guide in CONTRIBUTING.md or README.md
- List the exact commands to install dependencies:
  - Node.js projects: `npm install` or `yarn install`
  - Python projects: `pip install -r requirements.txt`
  - Other: provide equivalent commands
- Tell the developer how to run the project locally to verify setup
- Tell the developer how to run existing tests before making changes

### Step 4 — Create the Coding Plan
Based on the issue, provide:

**Files to Edit**
- List exact file paths that need to be changed
- Explain what each file does before telling them to edit it
- Show the specific function, class, or section to focus on

**What to Change**
- Describe the change in plain English first
- Then show a code sketch or pseudocode of the solution
- Flag any edge cases to handle
- Point out any existing tests that relate to this change

**What NOT to Touch**
- List files and areas to avoid
- Warn about any fragile or complex areas nearby

### Step 5 — Create the Testing Plan
- Show how to run the test suite: `npm test` / `pytest` / etc.
- Tell them to run tests before AND after making changes
- If the issue requires a new test, show them where to add it
- Explain how to manually verify the fix works

### Step 6 — Create the Commit & PR Plan
**Committing the Change**
```bash
git add [specific files]
git commit -m "fix: [short description of what you fixed] (#[issue number])"
```

**Pushing to Your Fork**
```bash
git push origin fix/issue-[NUMBER]-short-description
```

**Opening the Pull Request**
```
1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Set base repo: ORIGINAL-OWNER/REPO-NAME, base branch: main
4. Fill in the PR title and description (see template below)
```

**PR Description Template**
```
## What does this PR do?
[One sentence summary of the change]

## Related Issue
Closes #[issue number]

## How to Test
[Step by step instructions for the reviewer to verify the fix]

## Screenshots (if applicable)
[Add before/after screenshots for UI changes]

## Checklist
- [ ] I have read the CONTRIBUTING.md
- [ ] My code follows the project's style guidelines
- [ ] I have added/updated tests if needed
- [ ] All existing tests pass
```

### Step 7 — Deliver the Full Plan
Output the plan in this format:
1. **Issue Summary** — what we are fixing in plain English
2. **Setup Checklist** — prerequisites before writing any code
3. **Git Workflow** — fork → clone → branch (with exact commands)
4. **Files to Change** — exact paths and what to do in each
5. **Testing Steps** — how to verify the fix works
6. **Commit & PR Steps** — exact commands and PR template
7. **What Success Looks Like** — how they know the contribution is ready

### Step 8 — Update Memory
After generating the plan, update `memory/MEMORY.md`:
- Set Current Step to "contribution-planner complete"
- Log the issue number and repo being worked on
- Note the branch name created

## Output Format
- Number every step clearly (1, 2, 3...)
- Put all git commands in code blocks
- Use ✅ checkboxes for action items
- Keep explanations short — one paragraph max per step
- End with: "You've got a plan! Start with Step 1 and reply
  'done' when you finish each step so I can guide you forward."
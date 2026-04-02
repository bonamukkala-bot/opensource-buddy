---
name: pr-reviewer
description: "Reviews a developer's draft pull request before submission —
  checking code quality, PR description, commit messages, and alignment
  with the repo's contribution guidelines."
allowed-tools: Bash Read Write
---

# PR Reviewer Skill

## Purpose
Act as a friendly but honest pre-submission reviewer. Catch problems
before the maintainer sees them. Help the developer submit a PR they
can be proud of — one that is clean, well-described, and likely to
get merged.

## Trigger
Use this skill when the developer says their code changes are ready
and they want a review before opening the PR, or after they have
opened a draft PR and want feedback.

## Steps

### Step 1 — Collect the PR Details
Ask the developer to share:
- The GitHub link to their fork or draft PR (if already opened)
- The files they changed (list of file paths)
- The issue number they are fixing
- Their PR title and description draft
- Their commit message(s)

### Step 2 — Review the Code Changes
Check each changed file for:

**Correctness**
- Does the change actually fix the issue described?
- Are there any obvious bugs or logic errors?
- Are edge cases handled? (empty inputs, null values, large data)
- Does the change break any existing functionality?

**Code Style**
- Does the code match the style of the surrounding code?
- Are variable and function names clear and descriptive?
- Is there any commented-out code that should be removed?
- Are there any console.log / print / debug statements left in?
- Is the indentation consistent with the rest of the file?

**Scope Creep**
- Does the PR do MORE than what the issue asked for?
- If yes — flag it and recommend splitting into separate PRs
- A good first PR should be small and focused

**Tests**
- Do existing tests still pass with this change?
- If the issue required a bug fix — is there a test that catches
  the bug being fixed?
- If the issue required a new feature — is there a test for it?

### Step 3 — Review the Commit Messages
Check every commit message against these rules:

✅ Good commit message format:
```
type: short description (#issue-number)

Examples:
fix: handle null value in user input validation (#42)
docs: add setup instructions to README (#17)
test: add unit test for payment calculation (#88)
feat: add dark mode toggle to settings page (#103)
```

❌ Bad commit messages to flag:
- `fixed stuff`
- `changes`
- `WIP`
- `asdfgh`
- `update`
- Messages longer than 72 characters on the first line
- No reference to the issue number

### Step 4 — Review the PR Title and Description
**PR Title Checklist**
- [ ] Is it under 72 characters?
- [ ] Does it clearly describe WHAT was changed?
- [ ] Does it avoid vague words like "fix", "update", "change" alone?
- [ ] Does it match the actual change made?

**PR Description Checklist**
- [ ] Does it include "Closes #[issue number]"?
- [ ] Does it explain WHAT the change does?
- [ ] Does it explain WHY the change was needed?
- [ ] Does it include steps for the reviewer to test the change?
- [ ] Does it include screenshots for any UI changes?
- [ ] Is the contribution checklist filled out?

### Step 5 — Check Against CONTRIBUTING.md
- Does the PR follow the project's contribution guidelines?
- Is the branch named correctly per their conventions?
- Did the developer sign a CLA if the project requires it?
- Are there any repo-specific rules being missed?

### Step 6 — Deliver the Review Report
Output the review in this format:

---
## 🔍 PR Review Report

### Overall Verdict
[✅ Ready to Submit / ⚠️ Minor Changes Needed / ❌ Needs More Work]

### Code Quality
[feedback on the actual code changes]

### Commit Messages
[feedback on commit message format and clarity]

### PR Title & Description
[feedback on how well it is written]

### Contribution Guidelines
[any mismatches with CONTRIBUTING.md rules]

### Things Done Really Well ✨
[genuine positive feedback — always include at least one]

### Action Items Before Submitting
- [ ] [specific change 1]
- [ ] [specific change 2]
- [ ] [specific change 3]

### After You Submit
- Respond to reviewer comments within 48 hours
- Don't force-push after a review has started
- Be open to feedback — maintainers know their codebase best
- If a maintainer asks for changes, make them on the same branch
  and push again — the PR updates automatically
---

### Step 7 — Post-Submission Guidance
After the developer submits the PR, remind them:
- Watch for GitHub notifications for reviewer comments
- If no response in 7 days — it is okay to leave one polite comment
  asking for a review
- If changes are requested — make them on the same branch and push
- If the PR is merged — celebrate! Update memory/MEMORY.md with the
  completed contribution
- If the PR is closed without merging — it is okay, ask the maintainer
  for feedback and try again

### Step 8 — Update Memory
After the review is complete, update `memory/MEMORY.md`:
- Log the PR URL
- Set Current Step to "pr submitted" or "pr merged"
- Move the issue to Completed Contributions if merged

## Output Format
- Use the review report template from Step 6 every time
- Be honest but kind — this is someone's first contribution
- Never say a PR is "terrible" — say "here's what to improve"
- Always end with encouragement and the next action to take
- Maximum 3 action items at a time — don't overwhelm
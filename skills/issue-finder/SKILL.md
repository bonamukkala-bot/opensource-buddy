---
name: issue-finder
description: "Scans a public GitHub repository for beginner-friendly issues
  and recommends the best one based on the developer's skill level and
  preferred language."
allowed-tools: Bash Read Write
---

# Issue Finder Skill

## Purpose
Find the most suitable open issue in a GitHub repository for a first-time
contributor. Filter by difficulty, label, and relevance to the developer's
skill level. Present a shortlist with clear explanations so the developer
can confidently choose one to work on.

## Trigger
Use this skill after repo-analyzer has run, or when the developer asks
to find a good first issue in a specific GitHub repository.

## Steps

### Step 1 — Collect Developer Context
Before searching, confirm these details with the developer:
- What is their skill level? (beginner / intermediate / advanced)
- What programming language are they most comfortable with?
- Do they prefer: bug fixes / documentation / new features / tests?
- How many hours can they spend on this contribution?

### Step 2 — Search for Beginner-Friendly Issues
Look for open issues with any of these labels:
- `good first issue`
- `beginner friendly`
- `beginner`
- `help wanted`
- `easy`
- `starter`
- `first-timers-only`
- `low hanging fruit`

Filter out:
- Issues that are already assigned to someone
- Issues with no activity in the last 6 months (likely stale)
- Issues marked `blocked`, `on hold`, or `wontfix`
- Issues that require deep knowledge of the core architecture

### Step 3 — Score Each Issue
Rate each candidate issue on these criteria:

| Criteria | What to check |
|----------|--------------|
| Clarity | Is the issue description clear and actionable? |
| Scope | Can it be completed in a few hours or less? |
| Language Match | Does it match the developer's preferred language? |
| Activity | Has a maintainer responded recently? |
| Complexity | Does it require understanding the whole codebase? |

### Step 4 — Present the Shortlist
Show the top 3 issues maximum with this format for each:

**Issue #[number]: [Title]**
- 🔗 Link: [URL]
- 🏷️ Labels: [labels]
- 📝 Summary: [2 sentence plain English explanation]
- ⏱️ Estimated Time: [30 mins / 1-2 hours / half day]
- 💪 Why It's Good For You: [personalized reason based on skill level]
- ⚠️ Watch Out For: [any gotchas or things to be aware of]

### Step 5 — Help Developer Choose
- Ask the developer which issue they want to work on
- Once chosen, update `memory/MEMORY.md` with the selected issue
- Confirm the choice and transition to contribution-planner skill

### Step 6 — Handle Edge Cases
- If no beginner-friendly issues exist → say so honestly and suggest
  looking at documentation improvements or writing missing tests instead
- If the repo is very new → suggest reaching out to maintainers first
  via Discussions or by commenting on an existing issue
- If all good issues are already assigned → suggest watching them and
  finding a different repo

## Output Format
- Always show issues as a numbered shortlist
- Use emojis to make scanning easy
- Keep language simple and actionable
- End with a clear question: "Which issue would you like to work on?"
# QA Project — Manual & Automation Testing (Task Manager App)

End-to-end and visual test suite for a React + TypeScript Task Manager application, covering both **manual exploratory testing** and **automated testing** with **Playwright**, running in CI.

> Built on a sample Task Manager app (React · TypeScript · Vite · Tailwind). My work in this repo is the testing: the bug report, the Playwright test suite, and the CI workflows.

---

## 🧰 Tech & Tools
- **Playwright** (TypeScript) — end-to-end & visual testing
- **GitHub Actions** — CI for functional and visual test runs
- **Argos** — visual regression comparison
- **App under test:** React · TypeScript · Vite · Tailwind CSS

## 🔍 What this project demonstrates

### Manual / Exploratory Testing
I tested the application for functional and UX/visual issues and documented findings in [`Bug Report - Sheet.pdf`](./Bug%20Report%20-%20Sheet.pdf). Summary: I found **[N]** bugs, including **[1–2 short examples, e.g. "title field accepts lowercase first letter despite the capitalization requirement"]**.

### Automated Testing (Playwright)
The suite covers:
- **[5]** user-story tests for core flows (add, edit, delete, complete/incomplete, filter by label, sort by importance)
- **[3]** regression tests tied to bugs found during manual testing (these intentionally fail until the bugs are fixed)
- A **combination test** that generates every combination of task properties (importance × label × completeness) and captures a screenshot of each state for visual review

### CI
Two GitHub Actions workflows in [`.github/workflows/`](./.github/workflows):
- `e2e.yml` — runs the functional / end-to-end tests on every push
- `visual.yml` — runs the visual (screenshot) tests and uploads results to Argos for regression comparison

## ▶️ Running locally

```bash
npm install        # install dependencies
npm run dev        # start the app (http://localhost:5175)
npx playwright test          # run the e2e tests
npx playwright test --ui     # run in UI mode
npx playwright show-report   # view the HTML report
```

## 📁 Structure
```
src/                  # the Task Manager app under test
tests/playwright/     # Playwright test specs
.github/workflows/    # CI: e2e.yml + visual.yml
Bug Report - Sheet.pdf  # manual testing findings
```




---

*Manual + automation QA project demonstrating Playwright, CI, and visual regression testing.*

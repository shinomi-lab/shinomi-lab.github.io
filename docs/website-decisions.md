# Shinomi Lab Website Decision Log

**Last updated:** 2026-11-23. **Scope:** Planning reference for future website changes. This log records owner-approved principles separately from pending choices; a roadmap proposal is not implementation approval.

## Approved principles

| Decision | Rationale and trade-off | Evidence/status |
|---|---|---|
| Preserve Osada's existing work and Disney Research Studios-inspired visual direction; make incremental, meaningful improvements. | Protects the lab's established identity and avoids the cost and risk of redesigning functioning pages. Visual polish alone is not a reason to replace existing work. | Owner's standing development principles in Manager instructions; applies to future proposals. |
| Prioritize clear research communication, information hierarchy, discoverability, Japanese/English access, usability, and maintainability. | Connects visitors to relevant research while keeping the current restrained structure and avoiding unnecessary homepage density. | Owner's project direction and completed assessment; applies to roadmap review. |
| Keep changes small and reviewable; significant UI or architectural changes require a separate rationale and explicit owner approval. | Limits regression risk and lets the owner assess benefits and design impact before large changes. | Owner's standing approval policy; no major redesign/refactor is approved. |
| Keep all existing sample member and publication records unchanged and visible on the public website as examples. Do not delete, replace, hide, rename, or edit these sample records or change how they are displayed. | Preserves their intended teaching purpose and avoids silently changing published examples. Member-submitted facts belong in separate member records and must be verified by their contributors. | Explicit owner decision; applies to all future content and website work. |
| Make member-led profile and publication contributions the immediate P0; review member information before beginning major homepage improvements. | Builds on the new contribution guide and grounds later research messaging and homepage hierarchy in verified information. | Owner-approved project sequence; the roadmap records the priority, not approval for each future content change or implementation scope. |
| Use a focused PR workflow: start from up-to-date `main`, use a dedicated feature branch and isolated worktree, and never implement website changes directly on `main`. Treat approval to commit, push, create a PR, merge, and deploy as separate boundaries; obtain explicit owner approval for each restricted action and never merge without it. | Keeps changes reviewable, avoids interference between tasks, and prevents unapproved changes to shared or published state. Never force-push, rewrite shared history, or bypass branch protection without explicit authorization. | Owner-approved development and safety policy; this log itself does not authorize GitHub operations. |
| Treat PR #5, #6, and #7 as completed documentation work, separate from website feature implementation. | Makes the current state clear: the roadmap/decision log and contribution guide are published, while the planned website improvements remain unstarted. | Verified in GitHub on 2026-11-23: [PR #5](https://github.com/shinomi-lab/shinomi-lab.github.io/pull/5), [PR #6](https://github.com/shinomi-lab/shinomi-lab.github.io/pull/6), and [PR #7](https://github.com/shinomi-lab/shinomi-lab.github.io/pull/7) are merged. No open PRs were listed at that check. |
| After the focused accessibility audit, add only a bilingual skip link and language-matched accessible names for the existing navigation, mobile menu, footer navigation, and language switch. Keep the current layout and native menu behavior. | Resolves observed keyboard wayfinding and localization gaps with a small extension; it does not authorize broader redesign or a general accessibility claim. | Owner approved this limited follow-up on 2026-11-24 after the read-only audit. In the unmerged worktree, Node.js `v24.22.3` was used without changing nvm's `v22.17.0` default; `pnpm check` and `pnpm build` passed. Browser checks confirmed Japanese/English names, skip-link navigation to main, keyboard mobile-menu operation, and desktop/mobile layouts. Visual focus-state display could not be confirmed in the background browser. |

## Pending owner decisions

| Decision needed | Rationale and trade-off | Current status |
|---|---|---|
| Which verified profile and publication updates will each member contribute? | Members are responsible for the accuracy of their own information; the maintainer should not invent or manually infer facts. | **Pending contributions.** Members should use the published guide; each submission requires maintainer review. This does not reopen the decision to keep the existing samples unchanged and visible. |
| What concise research mission should appear in Japanese and English, and who is its intended audience? | A clearer hero statement improves first-visit understanding; wording must reflect the lab's own intent and retain the current hero design. | **Pending.** No copy is approved. |
| Which official English publication fields are available, and should the content schema change to store them? | Better English discovery may require data or schema work; broader schema changes add maintenance cost. | **Pending.** Use verified official forms; seek approval before schema changes. |
| What should happen when an English news or research article is unavailable: retain a Japanese fallback, route to the Japanese page, or use another explicit notice? | These choices trade continuity against accurate language metadata and URLs. Current content was translated in the assessment; this is a conditional case. | **Pending.** Do not change routing or `lang` behavior by assumption. |
| What verified outcomes and publications should be connected to the research description? | Adds useful context only when substantiated; unsupported impact claims would harm credibility. | **Pending.** Lab confirmation needed before editing research claims. |
| Are additional accessibility changes needed beyond the approved label and skip-link fixes? | Further changes should address demonstrated barriers without broadening the scope without evidence. | **Pending evidence and separate approval.** Focus, contrast, screen-reader behavior, and broader WCAG coverage have not been fully evaluated. |
| What is the exact scope and approval boundary for each implementation task? | The P0 sequence is set, but a roadmap priority does not authorize every content change, code change, or GitHub operation. | **Pending per task.** Get explicit approval for the task and any restricted action before implementation or worker launch. |

## Do not assume without confirmation

- Do not treat existing sample records as authoritative member or publication data. Keep them unchanged and visible as examples; verify member-submitted facts independently before publication.
- A proposed P0/P1/P2 label means the owner has approved that task, data, copy, schema, or design change.
- Completing PR #5, #6, or #7 means website feature improvements have started. They were documentation-only milestones; no website feature implementation is thereby approved or completed.
- Untranslated content should keep an English URL or be presented with English language metadata while its body is Japanese; the fallback behavior is not yet a settled policy.
- A new homepage section, project taxonomy, UI redesign, or architectural refactor is necessary. Prefer the smallest change that addresses verified evidence.
- Completion of member information review or the P0 priority by itself approves homepage changes. Member review precedes homepage work; the homepage scope still requires separate explicit approval.
- A dedicated feature branch or worktree by itself authorizes a commit, push, PR, merge, or deployment. These actions retain their separate explicit approval requirements.
- Successful worker completion means code review, integration, or verification has passed. Record only checks actually performed.
- A deployment has succeeded without checking the deployed site when that check is applicable and authorized.

## Updating this log

After each owner-approved and verified task, propose an entry describing the decision or outcome, rationale, trade-offs, approver, and evidence (such as a PR, checks, or inspected pages). Keep unresolved questions pending until the owner decides. Never rewrite a proposal as an approval or mark a task complete without evidence.

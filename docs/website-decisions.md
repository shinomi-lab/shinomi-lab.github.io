# Shinomi Lab Website Decision Log

**Last updated:** 2026-11-23. **Scope:** Planning reference for future website changes. This log records owner-approved principles separately from pending choices; a roadmap proposal is not implementation approval.

## Approved principles

| Decision | Rationale and trade-off | Evidence/status |
|---|---|---|
| Preserve Osada's existing work and Disney Research Studios-inspired visual direction; make incremental, meaningful improvements. | Protects the lab's established identity and avoids the cost and risk of redesigning functioning pages. Visual polish alone is not a reason to replace existing work. | Owner's standing development principles in Manager instructions; applies to future proposals. |
| Prioritize clear research communication, information hierarchy, discoverability, Japanese/English access, usability, and maintainability. | Connects visitors to relevant research while keeping the current restrained structure and avoiding unnecessary homepage density. | Owner's project direction and completed assessment; applies to roadmap review. |
| Keep changes small and reviewable; significant UI or architectural changes require a separate rationale and explicit owner approval. | Limits regression risk and lets the owner assess benefits and design impact before large changes. | Owner's standing approval policy; no major redesign/refactor is approved. |
| Use the PR workflow and existing safety rules: work from verified `main` on isolated feature worktrees; get approval before restricted GitHub actions; never merge without approval. | Keeps changes reviewable and avoids unapproved publication or shared-history changes. | Manager instructions in `SOUL.md`; this log does not authorize commits, pushes, PRs, merges, or deployment. |

## Pending owner decisions

| Decision needed | Rationale and trade-off | Current status |
|---|---|---|
| Which member and publication records are authoritative, and which sample records should be replaced or hidden? | Replacing samples improves trust; inventing or assuming academic records would be misleading. | **Pending.** P0 implementation must wait for verified source data. |
| What concise research mission should appear in Japanese and English, and who is its intended audience? | A clearer hero statement improves first-visit understanding; wording must reflect the lab's own intent and retain the current hero design. | **Pending.** No copy is approved. |
| Which official English publication fields are available, and should the content schema change to store them? | Better English discovery may require data or schema work; broader schema changes add maintenance cost. | **Pending.** Use verified official forms; seek approval before schema changes. |
| What should happen when an English news or research article is unavailable: retain a Japanese fallback, route to the Japanese page, or use another explicit notice? | These choices trade continuity against accurate language metadata and URLs. Current content was translated in the assessment; this is a conditional case. | **Pending.** Do not change routing or `lang` behavior by assumption. |
| What verified outcomes and publications should be connected to the research description? | Adds useful context only when substantiated; unsupported impact claims would harm credibility. | **Pending.** Lab confirmation needed before editing research claims. |
| Should a skip link or other accessibility changes be added? | Basic keyboard focus exists, but a focused keyboard/screen-reader review was not completed. | **Pending evidence.** Review first; implement only a demonstrated need. |
| Which roadmap item should enter implementation, and what is its approved scope? | A saved roadmap organizes proposals but is not authorization to begin development. | **Pending.** Obtain explicit task approval before implementation or worker launch. |

## Do not assume without confirmation

- Sample names, roles, publications, dates, venues, research outcomes, or English translations are accurate or approved for publication.
- A proposed P0/P1/P2 label means the owner has approved that task, data, copy, schema, or design change.
- Untranslated content should keep an English URL or be presented with English language metadata while its body is Japanese; the fallback behavior is not yet a settled policy.
- A new homepage section, project taxonomy, UI redesign, or architectural refactor is necessary. Prefer the smallest change that addresses verified evidence.
- Successful worker completion means code review, integration, or verification has passed. Record only checks actually performed.
- A deployment has succeeded without checking the deployed site when that check is applicable and authorized.

## Updating this log

After each owner-approved and verified task, propose an entry describing the decision or outcome, rationale, trade-offs, approver, and evidence (such as a PR, checks, or inspected pages). Keep unresolved questions pending until the owner decides. Never rewrite a proposal as an approval or mark a task complete without evidence.

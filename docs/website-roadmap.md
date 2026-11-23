# Shinomi Lab Website Roadmap

**Roadmap status:** Website improvement work is planned; no website feature or design changes have started or been approved. **Assessment date:** 2026-11-23. **Historical assessment baseline:** `d0f12613db0b860d04c729debeb125228b1d7747` (`origin/main` at assessment time). **Status verified against:** `origin/main` at `ea63d822dc212281f609a8140e77b175a954e129` on 2026-11-23.

This roadmap reuses the completed assessment and Orca Run `run_76b819a23566`; it is a planning reference, not approval to implement. Preserve Osada's work and the site's Disney Research Studios-inspired visual direction. Prefer small, evidence-backed extensions over redesigns or rewrites. Do not copy Disney branding, assets, or distinctive expression.

## Completed documentation work

These documentation milestones are complete and merged; they do not mean website feature improvements have started:

- [PR #5](https://github.com/shinomi-lab/shinomi-lab.github.io/pull/5) added this roadmap and the decision log (merged 2026-11-23).
- [PR #6](https://github.com/shinomi-lab/shinomi-lab.github.io/pull/6) improved the member contribution guide (merged 2026-11-23).
- [PR #7](https://github.com/shinomi-lab/shinomi-lab.github.io/pull/7) reorganized the guide with a Mermaid workflow, parallel content choices, direct links, and an optional GitHub Web editing guide (merged 2026-11-23).

At the status check above, all three PRs were merged and no PRs were open. The guide now documents the shared branch, PR, CI, and maintainer-review workflow. Member profile and publication content updates remain to be contributed and reviewed; no sample records were changed by these PRs.

## Strengths to preserve

- A coherent visual identity built around the lab photograph, dark gradient, white header, and clear typography.
- Direct navigation to Research, Members, Publications, News, and Access, with footer links and a collapsible mobile menu.
- Research topic cards lead to detailed explanations; research, members, publications, news, and access have Japanese and English routes.
- Shared Astro views, layouts, components, typed content collections, contributor templates, and CI support maintainable incremental updates.
- Basic accessibility foundations include document language, heading structure, `main`, labelled navigation/menu controls, and visible keyboard focus.

Evidence: [header](../src/components/Header.astro), [home view](../src/views/HomePage.astro), [base layout](../src/layouts/BaseLayout.astro), [content schemas](../src/content.config.ts), [contributor guide](../CONTRIBUTING.md), [CI](../.github/workflows/ci.yml).

## Transferable information-design principles

### Observed on Disney Research Studios

- Navigation exposes Research, People, Publications, About Us, and other institutional routes; Research and People have subnavigation.
- The homepage connects featured research, research areas, people, and latest publications. Research and About pages explain purpose and link to related areas. People are grouped by role; publication records expose bibliographic details.

### Application to Shinomi Lab (interpretation)

Help visitors move from **mission → research areas → representative work/results → researchers and publications**. Make the lab's research purpose easy to understand, then provide clear routes to detail. Keep the current restrained design and existing navigation; do not add homepage sections merely to imitate Disney or increase content density. Use only the lab's verified research content.

## Assessment findings

The prior assessment visually checked Japanese and English home, research, members, publications, news, and access pages at desktop (1440×900) and mobile (390×844). No horizontal scrolling was observed at 390px on the inspected home and English publications pages. This was a limited browser review, not a complete accessibility audit.

| Area | Verified finding | Implication |
|---|---|---|
| First viewport | Lab name, affiliation, and group photo are prominent. Research begins near the bottom of the desktop first viewport; on mobile the hero occupies most of the first screen. Current hero copy describes the website rather than the research mission. | Improve the existing short copy after the lab confirms its intended message; do not add a new homepage section by default. |
| Research | One research topic is listed, with detailed explanation of the problem and methods. No separate project/results index was observed. | Explain significance and verified results and connect them to papers within existing detail pages. |
| Publications and members | Public pages contain sample publication and student/alumni records, and source comments identify them as samples. The owner has decided to retain all existing sample records unchanged and visible as examples. English publications show Japanese titles, author names, and venue names in the reviewed sample content. | Do not treat sample entries as member-submitted records or remove, replace, hide, rename, or edit them. Members should add or update their own verified records separately; improve English metadata only from verified official forms. |
| News and contact | One site-update news item was observed. Address and email are available in Japanese and English access pages and the footer. | Existing routes are discoverable; expand only when there is verified news or information to share. |
| Localization | UI dictionaries and English routes exist. English news/research can fall back to Japanese; the prior inspection found current items translated, so the English-URL/Japanese-body mismatch is a conditional implementation risk, not an observed current-page defect. | Decide the desired behavior before publishing an untranslated item. |
| Accessibility | Basic semantic and focus support is present. Keyboard, screen-reader, and formal contrast checks were not completed. No skip link was found in the reviewed layout. | Record this as a focused follow-up audit; do not claim conformance. |

Evidence: [sample member](../src/content/members/sample-student.yaml), [sample publication](../src/content/publications/2026/sample-paper.md), [hero](../src/components/Hero.astro), [lab configuration](../src/config.ts), [content fallback](../src/lib/content.ts), [i18n utilities](../src/i18n/utils.ts), [base layout](../src/layouts/BaseLayout.astro), [global styles](../src/styles/global.css). Public pages reviewed: [home](https://shinomi-lab.github.io/), [research](https://shinomi-lab.github.io/research/), [members](https://shinomi-lab.github.io/members/), [publications](https://shinomi-lab.github.io/publications/), [news](https://shinomi-lab.github.io/news/), [access](https://shinomi-lab.github.io/access/), and corresponding `/en/` routes. Disney reference: [official site](https://studios.disneyresearch.com/), including Research, People, About Us, and Publications.

## Prioritized roadmap

The website improvement tasks below have not started. P0 is the current priority; its content work depends on members verifying and submitting their own information. Effort and design risk are estimates. No item is complete until its acceptance criteria have evidence recorded here.

| Priority | Task and minimal scope | Dependencies | Acceptance criteria | Effort / design risk |
|---|---|---|---|---|
| **P0** | **Member-led profile and publication updates.** Invite each member to verify and add or update their own profile and publication records using the contribution guide and existing content structures. Keep all existing sample records unchanged and visible as examples. | Each contributor verifies their own facts against authoritative sources; maintainer reviews PRs. | Submitted records are separate from sample files, fact-checked by the contributor, pass CI, and receive maintainer review. Existing sample member/publication files and their public display remain unchanged. Record merged PRs as evidence when completed. | Low–Medium / Low |
| **P1** | **Clarify the hero research statement and homepage hierarchy.** After member profiles and publications have been reviewed, propose a concise Japanese and English research statement and a restrained homepage information hierarchy; preserve the current photo, layout, color, and heading unless a separately approved change is warranted. | P0 member information reviewed; owner confirms mission, audience, wording, and scope before implementation. | The proposal uses verified member/research information, explains the hierarchy and impact on the current design, and receives explicit owner approval before implementation. If approved, both language versions align, existing visual identity remains, and text wraps legibly at 390px. | Low–Medium / Low–Medium |
| **P1** | **Improve English metadata on member-submitted publications.** After P0 contributions are reviewed, add verified official English titles, author forms, and venues where available; decide how unavailable translations display. Do not edit existing sample publication records. | P0 member submissions reviewed; verified publication sources; owner approval if schema or display changes are needed. | Only member-submitted records are updated; all existing samples remain unchanged and visible; official forms are verified; Japanese display remains correct; contribution guidance explains missing translations. | Medium / Medium |
| **P1** | **Connect research significance to evidence.** Add a short “problem, why it matters, approach, verified results, related papers” structure to the existing research detail page. | Owner/lab verifies significance, outcomes, and related publications. | Readers can identify the problem, its significance, approach, confirmed results, and linked papers; no unsupported claims; Japanese and English meanings align; existing page structure and visual identity are preserved. | Medium / Low–Medium |
| **P2** | **Link research to related publications.** Add links from the existing topic/detail page to relevant verified papers. | P0 data confirmation and P1 research/publication content. | Every displayed link resolves to the intended publication; no new taxonomy or large homepage change is required. | Low–Medium / Low |
| **P2** | **Set untranslated-article language behavior.** Decide how URL, body language, document `lang`, language switch, and alternate links behave when an English article is absent. | Owner decision before any behavior change; relevant when untranslated content is published. | A test fixture or reviewed example demonstrates that displayed language, metadata, and switch destination are truthful and resolve to an available page. | Medium / Medium |
| **P2** | **Complete a focused accessibility review.** Check keyboard flow, mobile menu, language switch, focus visibility, and screen-reader naming; add a skip link only if findings justify it. | None; can be a read-only review before any code changes. | Findings and tested viewport/browser are recorded; any change has a specific reproduced issue and a verified keyboard path. No broad conformance claim without a full audit. | Low / Low |

## Sequence, verification, and maintenance

1. Start with P0: invite members to verify and submit their own profiles and publication records through the guide, then have maintainers review them. Preserve the samples as examples throughout.
2. Only after member information is reviewed, propose the research mission wording and homepage information hierarchy for owner approval. Do not begin major homepage changes before that review and approval.
3. Research-detail and research-publication work still requires lab-verified facts. Address untranslated routes when that case is about to be published or the owner prioritizes it. Accessibility review can run independently as a read-only assessment.
4. Use no workers for simple documentation or content updates. For implementation, default to one approved worker; use two only for clearly independent work with a coordination benefit. Keep shared UI and content decisions sequential.

For each approved task, record status, PR or commit reference if later authorized, files affected, checks actually run, visual/localization evidence where relevant, unresolved issues, and reviewer. Appropriate checks may include `pnpm check`, `pnpm build`, Japanese/English page review, and visual inspection. This documentation update did not run application checks; the evidence above comes from the dated prior assessment and code references. After each approved and verified task, propose updates to this roadmap and the decision log. Never label work approved or complete without evidence.

**Recommended first implementation task:** Ask each lab member to verify and submit updates to their own profile and publication records using [CONTRIBUTING.md](../CONTRIBUTING.md), then review the resulting PRs. Preserve all current samples unchanged and visible. This improves completeness and accuracy through the existing content workflow without changing the site's design or architecture. Major homepage improvements follow only after member information is reviewed and a separate scope is approved. This roadmap records priority, not authorization to edit content or implement changes.

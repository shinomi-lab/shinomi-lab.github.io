# Shinomi Lab Website Roadmap

**Roadmap status:** No website improvements have been merged. The owner has approved a focused accessibility follow-up based on the read-only audit below; its implementation is in a dedicated worktree and remains unmerged. Other roadmap tasks remain unstarted. **Assessment date:** 2026-11-24. **Historical assessment baseline:** `d0f12613db0b860d04c729debeb125228b1d7747` (`origin/main` at assessment time). **Status verified against:** `origin/main` at `9084e1db96471fe4b3ce13c1b01f38229a8ee934` on 2026-11-24.

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
| Accessibility | A focused read-only check on 2026-11-24 confirmed no skip link in the shared layout; navigation/menu names are fixed in English, and the Japanese/English language-switch labels are reversed. The native mobile disclosure opened with Enter on the English page; the HTML language and observed heading/landmark structure were appropriate. Focus-ring appearance was inconclusive; this was not a full screen-reader, contrast, or WCAG audit. | The owner approved a minimal bilingual skip link and localized accessible names for navigation, menu, and language switch. Broader changes still need evidence and approval. |

Evidence: [sample member](../src/content/members/sample-student.yaml), [sample publication](../src/content/publications/2026/sample-paper.md), [hero](../src/components/Hero.astro), [lab configuration](../src/config.ts), [content fallback](../src/lib/content.ts), [i18n utilities](../src/i18n/utils.ts), [base layout](../src/layouts/BaseLayout.astro), [global styles](../src/styles/global.css). Public pages reviewed: [home](https://shinomi-lab.github.io/), [research](https://shinomi-lab.github.io/research/), [members](https://shinomi-lab.github.io/members/), [publications](https://shinomi-lab.github.io/publications/), [news](https://shinomi-lab.github.io/news/), [access](https://shinomi-lab.github.io/access/), and corresponding `/en/` routes. Disney reference: [official site](https://studios.disneyresearch.com/), including Research, People, About Us, and Publications.

## Prioritized roadmap

P0 remains the main project priority; its content work depends on members verifying and submitting their own information. No P0/P1 implementation has started. The only active implementation is the owner-approved P2 accessibility follow-up described below, which is in a dedicated worktree and is not merged. Effort and design risk are estimates. No item is complete until its acceptance criteria have evidence recorded here.

| Priority | Task and minimal scope | Dependencies | Acceptance criteria | Effort / design risk |
|---|---|---|---|---|
| **P0** | **Member-led profile and publication updates.** Invite each member to verify and add or update their own profile and publication records using the contribution guide and existing content structures. Keep all existing sample records unchanged and visible as examples. | Each contributor verifies their own facts against authoritative sources; maintainer reviews PRs. | Submitted records are separate from sample files, fact-checked by the contributor, pass CI, and receive maintainer review. Existing sample member/publication files and their public display remain unchanged. Record merged PRs as evidence when completed. | Low–Medium / Low |
| **P1** | **Clarify the hero research statement and homepage hierarchy.** After member profiles and publications have been reviewed, propose a concise Japanese and English research statement and a restrained homepage information hierarchy; preserve the current photo, layout, color, and heading unless a separately approved change is warranted. | P0 member information reviewed; owner confirms mission, audience, wording, and scope before implementation. | The proposal uses verified member/research information, explains the hierarchy and impact on the current design, and receives explicit owner approval before implementation. If approved, both language versions align, existing visual identity remains, and text wraps legibly at 390px. | Low–Medium / Low–Medium |
| **P1** | **Improve English metadata on member-submitted publications.** After P0 contributions are reviewed, add verified official English titles, author forms, and venues where available; decide how unavailable translations display. Do not edit existing sample publication records. | P0 member submissions reviewed; verified publication sources; owner approval if schema or display changes are needed. | Only member-submitted records are updated; all existing samples remain unchanged and visible; official forms are verified; Japanese display remains correct; contribution guidance explains missing translations. | Medium / Medium |
| **P1** | **Connect research significance to evidence.** Add a short “problem, why it matters, approach, verified results, related papers” structure to the existing research detail page. | Owner/lab verifies significance, outcomes, and related publications. | Readers can identify the problem, its significance, approach, confirmed results, and linked papers; no unsupported claims; Japanese and English meanings align; existing page structure and visual identity are preserved. | Medium / Low–Medium |
| **P2** | **Link research to related publications.** Add links from the existing topic/detail page to relevant verified papers. | P0 data confirmation and P1 research/publication content. | Every displayed link resolves to the intended publication; no new taxonomy or large homepage change is required. | Low–Medium / Low |
| **P2** | **Set untranslated-article language behavior.** Decide how URL, body language, document `lang`, language switch, and alternate links behave when an English article is absent. | Owner decision before any behavior change; relevant when untranslated content is published. | A test fixture or reviewed example demonstrates that displayed language, metadata, and switch destination are truthful and resolve to an available page. | Medium / Medium |
| **P2** | **Address confirmed accessibility-label and skip-link gaps.** Add a bilingual skip link to main content and localize the existing navigation, footer, menu, and language-switch accessible names. Preserve the current layout and native disclosure menu. | Focused read-only audit completed; owner approved this limited scope. | Both locales render correct labels; keyboard users can reveal and activate the skip link to focus main content; the mobile disclosure remains keyboard-operable; `pnpm check`, `pnpm build`, and browser review pass. Record evidence after checks; no broad conformance claim. | Low / Low |

**Current verification (2026-11-24; unmerged worktree based on `9084e1db96471fe4b3ce13c1b01f38229a8ee934`):** Installed Node.js `v24.22.3` with nvm to match `.node-version` major `24`; nvm's default remains `v22.17.0`. `pnpm check` and `pnpm build` passed. Local Japanese and English home pages were inspected at 1440×900 and 390×844; document scroll width matched each viewport. The skip link moved keyboard focus to `main#main-content` in both locales, and the mobile menu opened by keyboard in both. Accessible names were confirmed in the rendered page. The background browser did not expose the `:focus`/`:focus-visible` pseudo-state for a visual check of the skip link's focused appearance, so that detail remains unverified; this task is not marked complete. No content records were changed.

## Sequence, verification, and maintenance

1. Start with P0: invite members to verify and submit their own profiles and publication records through the guide, then have maintainers review them. Preserve the samples as examples throughout.
2. Only after member information is reviewed, propose the research mission wording and homepage information hierarchy for owner approval. Do not begin major homepage changes before that review and approval.
3. Research-detail and research-publication work still requires lab-verified facts. Address untranslated routes when that case is about to be published or the owner prioritizes it. The focused accessibility follow-up is independent of member submissions; keep any additional accessibility work evidence-based and separately approved.
4. Use no workers for simple documentation or content updates. For implementation, default to one approved worker; use two only for clearly independent work with a coordination benefit. Keep shared UI and content decisions sequential.

For each approved task, record status, PR or commit reference if later authorized, files affected, checks actually run, visual/localization evidence where relevant, unresolved issues, and reviewer. Appropriate checks may include `pnpm check`, `pnpm build`, Japanese/English page review, and visual inspection. The original roadmap assessment did not run application checks; that baseline evidence comes from the dated review and code references, while the later accessibility verification is recorded above. After each approved and verified task, propose updates to this roadmap and the decision log. Never label work approved or complete without evidence.

**Recommended first implementation task:** Ask each lab member to verify and submit updates to their own profile and publication records using [CONTRIBUTING.md](../CONTRIBUTING.md), then review the resulting PRs. Preserve all current samples unchanged and visible. This improves completeness and accuracy through the existing content workflow without changing the site's design or architecture. Major homepage improvements follow only after member information is reviewed and a separate scope is approved. This roadmap records priority, not authorization to edit content or implement changes.

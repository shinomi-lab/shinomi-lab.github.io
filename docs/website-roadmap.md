# Shinomi Lab Website Roadmap

**Status:** Proposed; implementation has not started or been approved. **Assessment date:** 2026-11-23. **Baseline:** `main` at `d0f12613db0b860d04c729debeb125228b1d7747` (`origin/main` at assessment time).

This roadmap reuses the completed assessment and Orca Run `run_76b819a23566`; it is a planning reference, not approval to implement. Preserve Osada's work and the site's Disney Research Studios-inspired visual direction. Prefer small, evidence-backed extensions over redesigns or rewrites. Do not copy Disney branding, assets, or distinctive expression.

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
| Publications and members | Public pages contain sample publication and student/alumni records; source comments identify the records as samples. English publications show Japanese titles, author names, and venue names. | Confirm authoritative records first; public sample data can undermine trust. Improve English metadata using verified official forms. |
| News and contact | One site-update news item was observed. Address and email are available in Japanese and English access pages and the footer. | Existing routes are discoverable; expand only when there is verified news or information to share. |
| Localization | UI dictionaries and English routes exist. English news/research can fall back to Japanese; the prior inspection found current items translated, so the English-URL/Japanese-body mismatch is a conditional implementation risk, not an observed current-page defect. | Decide the desired behavior before publishing an untranslated item. |
| Accessibility | Basic semantic and focus support is present. Keyboard, screen-reader, and formal contrast checks were not completed. No skip link was found in the reviewed layout. | Record this as a focused follow-up audit; do not claim conformance. |

Evidence: [sample member](../src/content/members/sample-student.yaml), [sample publication](../src/content/publications/2026/sample-paper.md), [hero](../src/components/Hero.astro), [lab configuration](../src/config.ts), [content fallback](../src/lib/content.ts), [i18n utilities](../src/i18n/utils.ts), [base layout](../src/layouts/BaseLayout.astro), [global styles](../src/styles/global.css). Public pages reviewed: [home](https://shinomi-lab.github.io/), [research](https://shinomi-lab.github.io/research/), [members](https://shinomi-lab.github.io/members/), [publications](https://shinomi-lab.github.io/publications/), [news](https://shinomi-lab.github.io/news/), [access](https://shinomi-lab.github.io/access/), and corresponding `/en/` routes. Disney reference: [official site](https://studios.disneyresearch.com/), including Research, People, About Us, and Publications.

## Prioritized roadmap

All items below are **proposed, not approved or started**. Effort and design risk are estimates. No item is complete until its acceptance criteria have evidence recorded here.

| Priority | Task and minimal scope | Dependencies | Acceptance criteria | Effort / design risk |
|---|---|---|---|---|
| **P0** | **Confirm and correct public sample records.** Replace sample member/publication data with owner-verified records, or remove sample records from public output and show an appropriate empty state where no verified data exists. | Owner/lab supplies or confirms exact names, roles, titles, authors, dates, and venues. | Public pages contain no sample records; every retained record is checked against the approved source; no unverified facts are introduced; empty state is clear when needed. Record URLs and reviewed source data as evidence. | Low–Medium / Low |
| **P1** | **Clarify the hero research statement.** Replace the current site-description sentence with one concise Japanese and English statement; preserve the photo, layout, color, and heading. | Owner confirms research mission, audience, and wording in both languages. | Each sentence states the research subject and purpose; meanings align across languages; existing design remains; at 390px the copy wraps legibly and research navigation is clear within the first scroll. | Low / Low |
| **P1** | **Improve English publication metadata.** Add verified official English titles, author forms, and venues for records where they exist; decide how unavailable translations display. | Verified publication source data; owner approval if schema or display changes are needed. | English publication page has no sample or unintentionally untranslated metadata among reviewed records; Japanese display remains correct; contribution guidance explains missing translations. | Medium / Medium |
| **P1** | **Connect research significance to evidence.** Add a short “problem, why it matters, approach, verified results, related papers” structure to the existing research detail page. | Owner/lab verifies significance, outcomes, and related publications. | Readers can identify the problem, its significance, approach, confirmed results, and linked papers; no unsupported claims; Japanese and English meanings align; existing page structure and visual identity are preserved. | Medium / Low–Medium |
| **P2** | **Link research to related publications.** Add links from the existing topic/detail page to relevant verified papers. | P0 data confirmation and P1 research/publication content. | Every displayed link resolves to the intended publication; no new taxonomy or large homepage change is required. | Low–Medium / Low |
| **P2** | **Set untranslated-article language behavior.** Decide how URL, body language, document `lang`, language switch, and alternate links behave when an English article is absent. | Owner decision before any behavior change; relevant when untranslated content is published. | A test fixture or reviewed example demonstrates that displayed language, metadata, and switch destination are truthful and resolve to an available page. | Medium / Medium |
| **P2** | **Complete a focused accessibility review.** Check keyboard flow, mobile menu, language switch, focus visibility, and screen-reader naming; add a skip link only if findings justify it. | None; can be a read-only review before any code changes. | Findings and tested viewport/browser are recorded; any change has a specific reproduced issue and a verified keyboard path. No broad conformance claim without a full audit. | Low / Low |

## Sequence, verification, and maintenance

1. Start with P0 information confirmation; it protects public accuracy and avoids building on sample data.
2. Confirm mission wording before P1 hero copy. P1 publication and research-detail work both require lab-verified facts; implement independently only after their content is settled.
3. Add research-publication links after P0 and the relevant P1 content. Address untranslated routes when that case is about to be published or the owner prioritizes it. Accessibility review can run independently as a read-only assessment.
4. Use no workers for simple documentation or content updates. For implementation, default to one approved worker; use two only for clearly independent work with a coordination benefit. Keep shared UI and content decisions sequential.

For each approved task, record status, PR or commit reference if later authorized, files affected, checks actually run, visual/localization evidence where relevant, unresolved issues, and reviewer. Appropriate checks may include `pnpm check`, `pnpm build`, Japanese/English page review, and visual inspection. This documentation update did not run application checks; the evidence above comes from the dated prior assessment and code references. After each approved and verified task, propose updates to this roadmap and the decision log. Never label work approved or complete without evidence.

**Recommended first implementation task:** After the owner verifies the official member and publication data, remove or replace the public sample records and verify the affected pages. It is the smallest high-impact change: it improves public accuracy without changing design or architecture. No implementation is authorized by this recommendation.

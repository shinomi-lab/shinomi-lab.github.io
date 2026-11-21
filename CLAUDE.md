# CLAUDE.md

研究室サイト（Astro + Tailwind CSS v4 + Content Collections + i18n）。概要は README.md、コンテンツ更新手順は CONTRIBUTING.md。

- 変更後は `pnpm check` と `pnpm build` を通す
- サイト内リンクは `localizePath()` か `import.meta.env.BASE_URL` を使う（GitHub Pages のサブパス公開のため、`/` 始まりの直書きは禁止）
- 新しいページは `src/views/` に実装し、`src/pages/` と `src/pages/en/` から呼ぶ
- 固定文言は `src/i18n/ui.ts` の ja / en 両方に追加する
- Markdown は Biome の対象外（frontmatter を壊すため）
- 開発サーバーは `astro dev --background` で起動し、`astro dev stop` で止める
- Astro のドキュメント: https://docs.astro.build

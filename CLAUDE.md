# CLAUDE.md

研究室サイト（Astro + Tailwind CSS v4 + Content Collections + i18n）。概要は README.md、コンテンツ更新手順は CONTRIBUTING.md。

## 作業の流れ

- main に直接 push しない。ブランチを切って PR を作る（main へのマージ＝本番公開）
- 変更後は `pnpm check` と `pnpm build` を通す
- 開発サーバーは `astro dev --background` で起動し、`astro dev stop` で止める

## 実装ルール

- サイト内リンクは `localizePath()` か `import.meta.env.BASE_URL` を使う（`/` 始まりの直書きは禁止。サブパス公開や公開先の変更に備えるため）
- 新しいページは `src/views/` に実装し、`src/pages/` と `src/pages/en/` から呼ぶ
- 固定文言は `src/i18n/ui.ts` の ja / en 両方に追加する

## デザイン

- レイアウトは `Section`（白/グレー交互の全幅セクション）・`Container`・`PageHeader` を使う。見出しは `.section-title`、ボタンは `.btn-pill`
- 色は `brand-*` / `surface` / `ink` のトークンを使う（`slate-*` などを直接書かない。色の変更を `src/styles/global.css` の 1 か所で済ませるため）
- 画像が任意の箇所は、画像が無いときに `NetworkPattern` を表示する

## 落とし穴

- Markdown は Biome の対象外（frontmatter を壊すため）
- `biome migrate` を実行すると `"preset": "none"` に書き換わり推奨ルールが無効になる。実行したら `"recommended"` に戻す
- TypeScript は ^6 に固定（`@astrojs/check` が 7 に未対応）。Renovate でも 7 への更新は止めてある（`renovate.json`）

## 参考

- Astro のドキュメント: https://docs.astro.build

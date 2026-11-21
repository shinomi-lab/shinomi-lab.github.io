# コンテンツの更新方法

普段の更新は `src/content/` 配下のファイルを編集するだけです。GitHub の Web 画面上で編集しても構いません。

1. ブランチを作ってファイルを追加・編集する
2. PR を作る → CI が自動でチェックする（項目の書き間違いがあると失敗します）
3. `main` にマージすると数分で公開される

各ディレクトリにある `_template.*` をコピーして使ってください（`_` で始まるファイルはサイトに表示されません）。

## メンバー（`src/content/members/`）

1 人 1 ファイル。ファイル名は `姓-名.yaml`（例: `kenkyu-taro.yaml`）。

```yaml
name:
  ja: 研究 太郎
  en: Taro Kenkyu
role: master        # professor / associate-professor / assistant-professor / researcher / staff / doctor / master / bachelor
enrolledYear: 2026
research:
  ja: 研究テーマ
  en: Research topic
```

- **進学したら** `role` を書き換える（例: `bachelor` → `master`）
- **卒業したら** `graduatedYear: 2028` を書き足す → 自動で「卒業生」欄に移動する
- **写真** は `src/content/members/photos/` に置き、`photo: ./photos/kenkyu-taro.jpg` と書く（自動で圧縮・リサイズされる）

## 業績（`src/content/publications/<年>/`）

1 件 1 ファイル。業績ページでは年ごとに新しい順で表示されます。

```markdown
---
title: 論文タイトル
authors: [研究 太郎, 篠宮 ○○]
venue: 〇〇研究会
date: 2026-09-10
type: domestic-conference   # journal / international-conference / domestic-conference / thesis / award / other
doi: 10.xxxx/xxxxx          # 任意
url: https://...            # 任意
---

（任意）補足やスライドへのリンク
```

## お知らせ（`src/content/news/ja/`, `src/content/news/en/`）

- 日本語版を `news/ja/2026-04-welcome.md` のように作る。ファイル名がそのまま URL（`/news/2026-04-welcome/`）になる
- 英語版は `news/en/` に **同じファイル名** で作る。英語版が無い場合は英語ページに日本語版が表示される
- `draft: true` を付けると公開されない

## 研究テーマ（`src/content/research/ja/`, `src/content/research/en/`）

お知らせと同じく、日英で同じファイル名にそろえます。`order` の小さいものから表示されます。

## その他

- 研究室名・住所・メールアドレス → `src/config.ts`
- メニューなどの固定文言 → `src/i18n/ui.ts`
- 色・フォント → `src/styles/global.css`（`--color-brand-*` を変えるとボタンや帯の色がまとめて変わる）
- トップページのメイン画像 → `src/assets/hero.jpg`（png / webp も可）を置く。無い場合はグラフ模様を表示
- 研究テーマ・業績の画像 → frontmatter に `image: ./images/xxx.jpg` を書く。無い場合はグラフ模様を表示
- ページを追加するとき → `src/views/` に中身を書き、`src/pages/` と `src/pages/en/` の両方から呼ぶ

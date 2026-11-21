# 篠宮研究室ウェブサイト

[Astro](https://astro.build) で作った静的サイトです。`main` に push すると GitHub Pages に自動で公開されます。

- コンテンツ（メンバー・業績・お知らせ・研究テーマ）の更新方法 → [CONTRIBUTING.md](./CONTRIBUTING.md)
- 日本語は `/`、英語は `/en/` で公開されます

## 技術スタック

| 役割 | 技術 |
|---|---|
| フレームワーク | Astro（Content Collections / i18n） |
| スタイル | Tailwind CSS v4 + Typography |
| 言語 | TypeScript |
| Lint / Format | Biome |
| パッケージ管理 | pnpm |
| CI / デプロイ | GitHub Actions → GitHub Pages |
| 依存更新 | Renovate |

## ローカル開発

Node.js（`.node-version` のバージョン）と pnpm が必要です。

```sh
corepack enable   # pnpm が無い場合
pnpm install
pnpm dev          # http://localhost:4321 で確認
```

| コマンド | 内容 |
|---|---|
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | `dist/` に本番用ファイルを生成 |
| `pnpm preview` | ビルド結果を確認 |
| `pnpm check` | 型チェック・コンテンツ検証・Lint |
| `pnpm fix` | Lint / フォーマットの自動修正 |

## ディレクトリ構成

```
src/
  config.ts          # 研究室名・住所・メールなどの基本情報
  content.config.ts  # コンテンツの項目定義（スキーマ）
  content/           # ★ 普段更新するのはここ
    members/         #   メンバー（1 人 1 YAML）
    publications/    #   業績（1 件 1 Markdown）
    news/ja, news/en #   お知らせ
    research/ja, en  #   研究テーマ
  i18n/ui.ts         # メニューなど固定文言の日英対応表
  views/             # 各ページの中身（日英共通）
  pages/             # URL との対応（pages/en/ は英語版。中身は views/ を呼ぶだけ）
  components/        # ヘッダー・カードなどの部品
  layouts/           # ページ共通の枠
  styles/global.css  # 色・フォント
public/              # そのまま配信するファイル（favicon など）
```

## 公開の仕組み

1. PR を作ると `.github/workflows/ci.yml` がチェックとビルドを行います（公開はされません）。
2. PR を `main` にマージすると（直接 push した場合も）、`.github/workflows/deploy.yml` がチェック → ビルド → GitHub Pages への公開を行います。数分で反映されます。

補足:

- マージ後のチェックやビルドが失敗した場合は公開されず、前の版が表示されたままになります。Actions タブで失敗の原因を確認してください。
- Actions タブ → Deploy to GitHub Pages → **Run workflow** から手動でも公開できます（独自ドメインに切り替えた後の再公開など）。
- 公開 URL とサブパス（`/<リポジトリ名>/`）は Pages の設定から自動で取得します。サイト内リンクは `localizePath()`（`src/i18n/utils.ts`）か `import.meta.env.BASE_URL` を使って書いてください。`href="/members/"` のように直接書くと、サブパスで公開したときにリンクが切れます。

### 初回セットアップ（リポジトリ管理者）

1. リポジトリを **public** にする（Free プランの organization では private リポジトリで Pages を使えないため）
2. Settings → Pages → Build and deployment → Source を **GitHub Actions** にする
3. [Renovate](https://github.com/apps/renovate) を organization にインストールし、このリポジトリを対象にする
4. （推奨）Settings → Rules → Rulesets で `main` のルールを作り、**Require status checks to pass** に CI の `check` ジョブを追加する。これで CI が失敗している PR はマージできなくなる（設定しない場合、CI が失敗していてもマージ自体はできる）

### 独自ドメインの設定（後から）

1. Settings → Pages → Custom domain にドメインを入力する
2. DNS に CNAME（サブドメインの場合）または A / AAAA レコード（apex ドメインの場合）を設定する（[公式ドキュメント](https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site)）
3. **Enforce HTTPS** を有効にする
4. Actions から Deploy を再実行する（URL とパスは自動で切り替わるので、コードの変更はいりません）

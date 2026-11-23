# コンテンツの更新方法

プロフィールや業績は、メンバー自身が GitHub の Web 画面から追加・更新できます。提出する人は記載内容の正確さを確認してください。CI は書式やビルドを検査しますが、学術情報の事実確認は行いません。

## GitHub で変更を提出する

1. [リポジトリ](https://github.com/shinomi-lab/shinomi-lab.github.io)を開き、ブランチ選択メニューから `main` を基に変更用ブランチを作成します。`main` に直接変更を加えないでください。
2. 変更用ブランチを選び、編集したいファイルの鉛筆ボタンから編集します。新しいファイルは **Add file → Create new file** で作成し、ファイル名を含むパスを入力します。写真を追加する場合は `src/content/members/photos/` フォルダーを開いてから **Add file → Upload files** でアップロードします。
3. **Commit changes** で変更を作成用ブランチに保存します。変更内容が分かる短いメッセージを入力してください。
4. **Compare & pull request**（または **Pull requests → New pull request**）から、変更用ブランチを `main` に取り込む PR を作成します。変更した内容と、情報を確認した根拠を簡潔に書き、PR 右側の **Reviewers** からメンテナーを選んでレビューを依頼してください。選べない場合はPR本文に確認を依頼する旨を書きます。
5. PR の **Checks** で GitHub Actions の結果を確認します。初めてこのリポジトリに投稿する人が Fork から PR を出した場合、Actions がメンテナーの実行承認待ちになることがあります。これは失敗ではありません。承認後にチェックが始まるので、結果を確認してください。チェックが失敗した場合は失敗した項目を開き、ログのエラーを直して同じブランチに変更を保存します。PR のチェックは更新後に再実行されます。
6. メンテナーが内容と CI の結果を確認し、承認後にマージします。PR の提出、レビュー承認、マージ、公開は別の段階です。`main` にマージされるとデプロイが始まり、成功後に公開されます。

ブランチを作成できない場合は、リポジトリを自分の GitHub アカウントに **Fork** し、そのフォークに変更用ブランチを作ってください。PR の提出先は元のリポジトリの `main` です。画面上で選択できない場合はメンテナーに相談してください。

現在、`main` には GitHub の必須レビューを強制するブランチ保護・ルールセットが設定されていません。レビューはこのガイドに沿った運用手順であり、GitHub が未承認のマージを自動的に止める設定ではありません。

各ディレクトリの `_template.*` を参考にしてください（`_` で始まるファイルはサイトに表示されません）。テンプレート中の例示値は自分の確認済み情報に置き換えます。既存の `sample-*.yaml` と `sample-paper.md` は例示用に保持されています。変更・削除せず、自分の情報には別のファイルを使ってください。

## メンバー（`src/content/members/`）

1 人 1 ファイルです。`src/content/members/_template.yaml` を参考に、自分の情報を `src/content/members/<姓-名>.yaml` に追加します（例: `kenkyu-taro.yaml`）。既存の自分のファイルを更新する場合は、新しいファイルを作らずそのファイルを編集します。

**必須項目:** `name.ja`（日本語名）、`role`。`name.en` は任意です。

**任意項目:** `enrolledYear` と `graduatedYear`（整数の年度）、`research`（`ja` 必須、`en` 任意）、`photo`、`links`。リンクは `label` と有効な URL の組です。教員など年度が分からない場合は省略できます。在籍中は `graduatedYear` を書かず、卒業時に追加します。

`role` は次のいずれかを使います: `professor` / `associate-professor` / `assistant-professor` / `researcher` / `staff` / `doctor` / `master` / `bachelor`。

```yaml
name:
  ja: 研究 太郎
  en: Taro Kenkyu # 任意
role: master
enrolledYear: 2026 # 任意。整数で書く
research:
  ja: 研究テーマ
  en: Research topic # 任意
links: [] # 任意
```

- 進学したら `role` を更新します。卒業したら `graduatedYear: 2028` のように年度を追加すると卒業生欄へ移動します。
- 写真は `src/content/members/photos/` に置き、`photo: ./photos/kenkyu-taro.jpg` のように指定します。写真は任意です。
- YAML はインデントに**半角スペース**を使い、タブは使いません。`name` や `research` の下の `ja` / `en` は、例と同じ深さにそろえます。`role: master` のように `:` の後ろには空白を入れます。年度は引用符を付けず整数で書きます。値に `:` や `#` などを含める場合は、値全体を引用符で囲んでください。

## 業績（`src/content/publications/<年>/`）

1 件 1 ファイルです。`src/content/publications/_template.md` を参考に、発表・掲載年の `src/content/publications/<年>/` に作成します。ファイル名は内容が分かる英数字とハイフンにし、同じフォルダー内で重複しないようにします。業績ページでは年ごとに新しい順で表示されます。

**必須項目:** `title`、`authors`（1 名以上の配列）、`venue`、`date`、`type`。

**任意項目:** `doi`、`url`、`members`、`image`、Frontmatter の後ろに続く本文。`members` はメンバー YAML のファイル名（拡張子なし）を指定します。現在のスキーマに英語タイトルなどの別言語用業績項目はありません。未対応の項目を独自に追加せず、必要な場合はメンテナーに相談してください。

タイトル、著者の表記と順番、掲載先（会議名・論文誌名など）、発表日・掲載日は、論文や主催者の公式情報に基づいて正確に記入してください。サンプルの著者名や会場を実データとして使わないでください。

```markdown
---
title: 論文タイトル
authors:
  - 研究 太郎
  - 共著者名
venue: 〇〇研究会
date: 2026-09-10
type: domestic-conference   # journal / international-conference / domestic-conference / thesis / award / other
# members: [kenkyu-taro]    # 任意。実際のメンバー ID に置き換える
---

（任意）補足やスライドへのリンク
```

`---` は Frontmatter の開始と終了を示す区切りです。両方を残してください。`date` は `YYYY-MM-DD` 形式、`type` は上記の候補から選びます。`authors` は上の例のように `- ` で始まるリストとして書きます。YAML の値に `:` や `#` などが含まれる場合は引用符で囲みます。任意の `doi` と `url` は、論文や発行元の公式情報で値を確認できる場合だけ追加してください。未確認の値や例示用の値は記入しないでください。

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

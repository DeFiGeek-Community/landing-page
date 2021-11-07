#  v1チェックリスト


### 1. プロトサイト＆環境構築
- [x] テーマ
- [x] プロト作成
- [x] プレビュー連携
- [x] Forestry連携だけ
- [x] ページ、セクション調整
- [x] Action, カスタムDNSの事前調査
- [x] SEO、OGP の出力テスト

### 2. メンバータスク
- イラスト
- [ ] アサイン
- [ ] 投票
- 翻訳
- [ ] アサイン
- [ ] 投票
- アセット
- [x] アサイン
- [x] アイコン類をチェック
- [x] 投票（バナーのみ）

###  3. 各種調整（いくつかリリース後でもOK）
- [x] 多言語化のconfig変更（ヘッダー、フッター）
- [x] ブログ投稿フロー
- [x] ファビコン
- [x] ブランドアセットページのレイアウト変更
- [x] image変更。about, signup

###  4. ブログ投稿フロー
- [x] テンプレート投稿
- [x] ファイル名 - 自動生成される。変更は右上。後で変更も可能
- [x] デフォルト画像挿入
- [x] Markdownが効いているか　- 手入力では`<p>`で囲われて効かない。GUIで選択すること。
- [x] 画像アップロード、画像ファイル格納先を`images/blog`に。
- [x] OGP
- その他の注意事項
    - 日付入力は必須。日付を入れないと「0001年1月1日」になる。

###  5. OGPチェック
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)と[OGP確認](https://rakko.tools/tools/9/)でチェック
- [x] landing
- [x] about
- [x] txjp ※relativeURLを削除
- [x] brand
- [x] join
- [x] blog
- [x] blog-post-official
- [x] blog-post-writer

### 6. インフラ準備
- [x] defigeek.xyzリポジトリ作成
- [x] 初回push & ブランチ
- [x] ツール連携（Netlify） 👉https://dfgc-preview.netlify.app/
- [x] Github Pages設定
- [x] Github Action設定
- [x] （仮の）カスタムドメイン設定
- [x] ツール連携（Forestry）
- [x] PRテスト
- [x] DNS設定
- [x] カスタムドメイン設定
- [x] `CNAME`で切替

### 7. 運用フロー整備
- [x] ブログ投稿メンバーを選定　✨誰か
- [x] ブログ投稿手順をDocsに作成
- [x] dfgc-protoでテスト A 新規投稿　✨
- [x] dfgc-protoでテスト B Duplicate　✨
- [ ] dfgc-protoでテスト C FAQ　✨
- [x] ブログ投稿テンプレートの合意／微調整
- [x] PRから公開までのフロー確認
- [x] ブランドアセットの利用規約、利用ガイドラインを作る　✨
- [x] README差し替え　👉DFGCチームの紹介＋「How to コントリビュート」

### 8. ToDo
- [ ] 過去ログの移植（誰かやって。。。）　✨
- [ ] ブログ投稿〜ツイートまでの流れの確認
- [x] ブランドアセットページの付け足し、壁紙ページ追加
- [ ] FAQページを本体にリンク
- [ ] 募集ページ作成
- [ ] PRマージ自動化
- [ ] PRレビューの有無を検討


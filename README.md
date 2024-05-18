# next-microcms-sample-drill-app
<img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge"> <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/> <img alt="Vercel" src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>


## 環境情報

- 本番環境
  - https://next-microcms-sample-drill-app.vercel.app/

## デザイン
[Quizzler - Free Quiz App Template](:https://www.figma.com/community/file/1370621018564385806) from Figma  
Author : [@nkthehustler](:https://www.figma.com/@nkthehustler)

## microCMSのAPIスキーマ設定
### 問題
エンドポイント: questions  
APIの型: リスト形式

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| title         | タイトル   | テキストフィールド          |
| contents         | 問題   | 繰り返しフィールド（問題セット）          |
| category      | カテゴリ | コンテンツ参照 - カテゴリ |
| thumbnail           | サムネイル       | 画像   |

#### カスタムフィールド
カスタムフィールド名: 問題セット  
フィールドID: questionSet

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| question      | 問題 | テキストエリア |
| answers           | 答え       | 繰り返しフィールド（答えセット）   |

カスタムフィールド名: 答えセット  
フィールドID: answerSet

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| option      | 選択肢 | テキストエリア |
| correctFlg           | 正解       | 真偽値   |

### カテゴリ
エンドポイント: category  
APIの型: リスト形式

| フィールドID | 表示名 | 種類 |
| ------------- | ------------- | ----- |
| name | カテゴリ名 | テキストフィールド |

## 開発環境構築

### インストール

```bash
npm install
```

`.env` ファイルを以下の環境変数例を元に作成

```
MICROCMS_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=your-service-id
GTM_ID=your-gtm-id
AUTH_USERNAME=your-auth-username （Basic認証を行う場合）
AUTH_PASSWORD=your-auth-password （Basic認証を行う場合）
```

.env ファイルを作成後、以下のコマンドで開発環境を構築  
`npm run dev`

### 動作確認
http://localhost:3000 にアクセスできるか確認
アクセスできたら成功
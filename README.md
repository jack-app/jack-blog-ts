## **環境構築**

### **1. このリポジトリをクローンする**

### **2. `.env.local`ファイルを作成する**

中身はチームメンバーの誰かにもらってください。

### 3. **依存関係をインストール**

以下のコマンドを実行してください。

```jsx
npm install
```

## 各種コマンド

### Next.jsを起動する

```jsx
npm run dev
```

### storybookを起動する

```jsx
npm run storybook
```

### コンポーネントの雛形を作成する

[plop](https://plopjs.com/) を用いて、コンポーネントの雛形を作成できます。

```jsx
 npm run plop
```

`feature`を作るか`ui`を作るか聞かれるので選択してください。

その後コンポーネントの名前を入力すると、コンポーネントの雛形ファイルが生成されます。

## 主な使用技術
- Next.js
- Notion API
- Tailwind
- storybook
- testing-library
- plop

大まかな概要としては、NotionAPIからデータを取得し、Next.jsを用いてブログの形式に見た目を整えるという構成です。

## ディレクトリ構成

主なディレクトリ構成は以下のようになります。
```
┣ public/ *画像など静的ファイル
┣ src/　
┃  ┣ app/ *Next.jsのルーティングなど
┃  ┣ features/ *特定の機能を持つコンポーネント
┃  ┣ screens/ *ページ全体の見た目を構築する
┃  ┣ ui/ *汎用コンポーネント
┃  ┗ utils/ *汎用関数
```
本プロジェクトではNext.jsの機能の一つであるSSGを使用しています。このプロジェクトで表示される要素は基本的に静的要素のみからなるため、SSGの仕組みを使ってビルド時に静的コンテンツを作成することで初期表示速度の観点でパフォーマンスが良くなります。

### app

Next.jsの諸々の構成を担うディレクトリです。具体的には
- ルーティング定義
- global css、共通レイアウト
- OGPなどのメタデータの設定
- クエリパラメータの取得

を担っています。

### components

特定の見た目や機能を実現するためのコンポーネントを集めたディレクトリです。

`ArticleList`を例に、中身の構成を説明します。

```
ArticleList/　
┣ hooks/　*特定の機能を呼び出すためのhooks
┣ presentations/
┃   ┣ ArticleListItem/　*子コンポーネント
┃   ┃   ┗ index.tsx 
┃   ┗ index.tsx 
┣ tests/ *ArticleCardListのUIコンポーネントテスト
┣ index.stories.tsx *presentationをstorybookで表示
┗ index.tsx *hooksとpresentationを結合。最終的に利用されるコンポーネント
```

最終的なコンポーネントは主に見た目を債務にもつ `presentation` と、機能を債務に持つ `hook` からなります。

このように分けることで

- 債務が明確になり、1ファイルの記述量が減る
- storybook、テストが書きやすくなる

などのメリットがあります。

`ArticleListItem`のような、特定のコンポーネント内でしか使えない子コンポーネントはfeaturesやuiに切り出さず、その親コンポーネント内に切り出します。
子コンポーネントに対してtestとstorybookは作成しません。理由としては、親コンポーネントでの確認をすることでtestやstorybookをより実践的な形式で確認できるためです。

### ui

汎用的なコンポーネントです。tag、header, paginationなどがここにあたります。

基本的に見た目のみを債務に持つので、 `hooks` や `presentation` 層はありません。ちょっとした関数などが必要な場合は `logics` ディレクトリを作成し、そこに処理を分けると良いです。

### screen

ページ単位での、画面全体の見た目を債務に持つ部分です。

## デザインシステム

### figma

https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDMOZITRTBYFRCdlwiX9bzJ%2Fjack-blog%3Ftype%3Ddesign%26node-id%3D0%3A1%26mode%3Ddesign%26t%3Da0kWqdY0kmTeMWjF-1

マークアップはfigmaに合わせて進めます。

gapやpaddingなども定義しているのでそれらもfigmaに揃えます。

### tailwind

cssライブラリとしてtailwindを使っています。

`tailwind.config.ts` にタイポグラフィー、余白、カラーの設定をしています。








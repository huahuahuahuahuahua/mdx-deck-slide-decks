# MDX Deck + Code Surfer template

This project was generated with the `npm init code-surfer-deck` command.

## Development

To run the presentation deck in development mode:

```sh
npm run start
```

Edit the [`deck.mdx`](deck.mdx) file to get started.

## Exporting

To build the presentation deck:

```sh
npm run build
```

For more documentation see [MDX Deck](https://github.com/jxnblk/mdx-deck) and [Code Surfer](https://codesurfer.pomb.us/)

# 使用 mdx 开发一个酷炫的 ppt

​

**效果展示**：[mdx-deck-slide-decks](https://codesandbox.io/s/w3fk83)

MDX 是一种书写格式，允许你在 [Markdown](https://www.markdown.xyz/) 文档中无缝地插入 JSX 代码。 你还可以导入（import）组件，例如交互式图表或弹框，并将它们 嵌入到内容当中。 这使得用组件编写较长的内容形成了 一场冲击 🚀。

## 依赖

- mdx-deck

```bash
//package.json
  "devDependencies": {
    "mdx-deck": "3.0.13"
  },
```

### mdx-deck

基于 React 的演示幻灯片

Award-winning React [MDX](https://mdxjs.com/)-based presentation decks

```shell
npm i -D mdx-deck@3.0.13
```

新建一个文件 deck.mdx

├───deck.mdx --主要开发 ppt 文件
├───package.json --版本

配置 scripts

```bash
  "scripts": {
    "start": "mdx-deck deck.mdx",
    "build": "mdx-deck build deck.mdx"
  },
```

```bash
//deck.mdx引入文件

import { Head } from "mdx-deck";

<Head>
  <title>mdx-deck</title>
</Head>

This is a copy of [huawink's hooks demo](https://github.com/huahuahuahuahuahua/mdx-deck-slide-decks) from React Conf
```

#### 简单的 ppt

![image-20220521230207454](C:\Users\10177\AppData\Roaming\Typora\typora-user-images\image-20220521230207454.png)

一页简单的 ppt 就形成了

`---` 为分页

导入一张 gif 图片

```js
...

---

<Image src="https://s3.amazonaws.com/jxnblk/mdx-deck.gif" />

```

![image-20220521230334255](C:\Users\10177\AppData\Roaming\Typora\typora-user-images\image-20220521230334255.png)

#### layout，左右分页

```js
...

---

<Split>

![](https://media.giphy.com/media/1CrejqXxVZs9q/giphy.gif)

- Otter Elevates
- For The 🏀 Dunk

</Split>

```

![image-20220521230729039](C:\Users\10177\AppData\Roaming\Typora\typora-user-images\image-20220521230729039.png)

#### 导入样式 theme

```js
import { Head } from "mdx-deck";
import { future, highlight, prism } from "@mdx-deck/themes";
export const themes = [future, prism];

...
```

有 bug ，每次 import 需要重新启动服务 `npm run start`

![image-20220521231546774](C:\Users\10177\AppData\Roaming\Typora\typora-user-images\image-20220521231546774.png)

更多样式请查看 [mdx-deck/themes.md at master · jxnblk/mdx-deck (github.com)](https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md)

这里就不再演示效果了，更多请查看官网仓库 [mdx-deck/docs at master · jxnblk/mdx-deck (github.com)](https://github.com/jxnblk/mdx-deck/tree/master/docs)

我们接下来做点复杂的代码演示

### code-surfer

提供代码高亮，动态生成代码的效果

​ Code Surfer adds code highlighting, code zooming, code scrolling, code focusing, code morphing, and fun to [MDX Deck](https://github.com/jxnblk/mdx-deck) slides.

- code-surfer

```bash
//package.json
  "devDependencies": {
    "mdx-deck": "3.0.13",
    "code-surfer": "^3.1.1",
  },
```

```shell
npm i -D code-surfer@3.1.1
```

#### 普通代码演示

````js
...

import { CodeSurfer } from "code-surfer";

...


---

<CodeSurfer>

```js title="This is a title" subtitle="and this a subtitle"
function lorem(ipsum, dolor = 1) {
  const sit = ipsum == null ? 0 : ipsum.sit;
  dolor = sit - amet(dolor);
  return sit
    ? consectetur(ipsum, 0, dolor < 0 ? 0 : dolor)
    : [];
}
```

</CodeSurfer>

````

![image-20220521232830273](C:\Users\10177\AppData\Roaming\Typora\typora-user-images\image-20220521232830273.png)

#### 来一点酷点的

````js
...


---

<CodeSurfer>

```js title="This is a title" subtitle="and this a subtitle"
function lorem(ipsum, dolor = 1) {
  const sit = ipsum == null ? 0 : ipsum.sit;
  dolor = sit - amet(dolor);
  return sit
    ? consectetur(ipsum, 0, dolor < 0 ? 0 : dolor)
    : [];
}

function incididunt(ipsum, ut = 1) {
  ut = labore.et(amet(ut), 0);
  const sit = ipsum == null ? 0 : ipsum.sit;

  if (!sit || ut < 1) {
    return [];
  }

  let dolore = 0;
  let magna = 0;
  const aliqua = new eiusmod(labore.ut(sit / ut));

  while (dolore < sit) {
    aliqua[magna++] = consectetur(
      ipsum,
      dolore,
      (dolore += ut)
    );
  }

  return aliqua;
}
```

```js
function lorem(ipsum, dolor = 1) {
  const sit = ipsum == null ? 0 : ipsum.sit;
  dolor = sit - amet(dolor);
  return sit
    ? consectetur(ipsum, 0, dolor < 0 ? 0 : dolor)
    : [];
}

function adipiscing(...elit) {
  if (!elit.sit) {
    return [];
  }

  const sed = elit[0];
  return eiusmod.tempor(sed) ? sed : [sed];
}

function incididunt(ipsum, ut = 1) {
  ut = labore.et(amet(ut), 0);
  const sit = ipsum == null ? 0 : ipsum.sit;

  if (!sit || ut < 1) {
    return [];
  }

  let dolore = 0;
  let magna = 0;
  const aliqua = new eiusmod(labore.ut(sit / ut));

  while (dolore < sit) {
    aliqua[magna++] = consectetur(
      ipsum,
      dolore,
      (dolore += ut)
    );
  }

  return aliqua;
}
```

```diff 1,2,3,4,5

```

```diff 1[10:14],2[15:19],3[22:27],10:12

```

</CodeSurfer>

````

换成更好看的样式

```js
import { github, vsDark } from "@code-surfer/themes";
- export const themes = [future, prism];
+ export const themes = [vsDark, github];
```

更多样式请查看[pomber/code-surfer: Rad code slides <🏄/> (github.com)](https://github.com/pomber/code-surfer)

#### gif 动图演示

目前文件路径

├───deck.mdx --主要开发 ppt 文件
├───package.json --版本

├───src --放置要展示的文件

└───image--放置要展示的文件
│ │ ├───fiberReconciler.gif
│ │ └───stackReconciler.gif

```bash
//导入本地文件
import FiberReconciler from "./image/fiberReconciler.gif";
import StackReconciler from "./image/stackReconciler.gif";

...

---

<Split>
  <>
    15 Stack reconciler
    <img style={{ width: "600px" }} src={StackReconciler} />
  </>
  <>
    16 Fiber reconciler
    <img style={{ width: "600px" }} src={FiberReconciler} />
  </>
</Split>

```

源码仓库：https://github.com/huahuahuahuahuahua/react-fiber-slide-mdxDeck.git)

## 参考

docs：[codesurfer.pomb.us](https://codesurfer.pomb.us)

参考文档：[build-your-own-react](https://pomb.us/build-your-own-react/)

ppt 所用工具：[mdx-deck-slide-decks](https://github.com/huahuahuahuahuahua/mdx-deck-slide-decks)

欢迎查看我另一个用`mdx-deck`实现的个人项目

具体实现效果：

部署网页 page：[huawink.fun](http://huawink.fun/)

源代码：[react-fiber-slide-mdxDeck](https://github.com/huahuahuahuahuahua/mdx-deck-slide-decks)

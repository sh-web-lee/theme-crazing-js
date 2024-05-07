# [theme-crazing-js](https://github.com/lee/theme-crazing-js)

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lee/theme-crazing-js/blob/master/LICENSE)
[![CI](https://github.com/lee/theme-crazing-js/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/lee/theme-crazing-js/actions/workflows/ci.yml)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/@yoga/theme-crazing-js)
[![NPM downloads](http://img.shields.io/npm/dm/theme-crazing-js.svg?style=flat-square)](http://www.npmtrends.com/@yoga/theme-crazing-js)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/lee/theme-crazing-js.svg)](http://isitmaintained.com/project/lee/theme-crazing-js 'Percentage of issues still open')

最好用的 `主题切换` 动画

## :star: 特性

- 体积小、操作简单
- 支持Vue、React

## :pill: 兼容性

单元测试保证支持如下环境：

| IE  | CH   | FF   | SF  | OP   | IOS   | Android | Node |
| --- | ---- | ---- | --- | ---- | ----- | ------- | ---- |
| 11+ | 100+ | 100+ | 16+ | 100+ | 10.3+ | 4.1+    | 14+  |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](./demo/demo-global.html)中的例子**

## :open_file_folder: 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## :rocket: 使用者指南

下载安装

```bash
# npm 安装
$ npm install --save @souljs/theme-crazing-js
# yarn 安装
$ yarn add @souljs/theme-crazing-js
```

使用

```scss
:root {
  --background-color: `light-color`;
  background-color: var(--background-color);
}

:root.dark {
  --background-color: `dark-color`;
  background-color: var(--background-color);
}
```

```vue
<script setup lang="ts">
import { useTheme } from '@souljs/theme-crazing-js';
const { setTheme } = useTheme();

btn.addEventListener('click', function (e) {
  setTheme(e);
});
</script>

<template>
  <button id="btn">Toggle Theme</button>
</template>
```

```js
const @souljs/theme-crazing-js = require('@souljs/theme-crazing-js');
```

## :bookmark_tabs: 文档

[API](./doc/api.md)

## :gear: 更新日志

[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表

[TODO.md](./TODO.md)

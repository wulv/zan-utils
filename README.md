# zan-utils

[![Build Status](https://api.travis-ci.org/AllenYangFly/zan-utils.png)](https://api.travis-ci.org/AllenYangFly/zan-utils)
[![Coverage Status](https://img.shields.io/coveralls/AllenYangFly/zan-utils/master.svg?style=flat)](https://coveralls.io/github/AllenYangFly/zan-utils?branch=master)

有赞业务共用函数库，提供大部分业务需要的函数。

### 安装

- esmodule
```
npm install zan-utils-es --save
```

- commonjs
```
npm install zan-utils-cjs --save
```

### 使用

使用方法类似于lodash，需要使用哪个函数，只引用当前函数

```js
import tozhCN from 'zan-utils-es/money/tozhCN';

tozhCN(100);
```

### 开发指南

1. 安装依赖
```bash
npm i (yarn)
```

2. 启动开发模式
```bash
make dev
```

3. 开发新函数，并添加测试用例

在 `src` 目录下对应模块添加新的文件 `xx.ts`，并将函数作为导出默认对象导出，同时在对应模块的 `__tests__` 文件夹下添加对应函数的测试文件 `xx.test.ts`，在该文件中添加测试用例

4. 打包发布

```
make publish
```

*Makefile接收参数：*
1. target 打包目标模块类型，可选参数: es、cjs

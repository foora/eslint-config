# Eslint 规则

## 介绍

自己开发时使用的eslint规则，用于约束自己的代码风格。主要参考[AlloyTeam eslint 规则](https://github.com/AlloyTeam/eslint-config-alloy),再结合自己的风格略微的修改了下，形成了这一份eslint规则。同时通过自己去了解每一条规则，然后配置一遍，学习一下eslint。

## 使用方法

1. 安装模块

使用yarn的开发者：
> yarn add foora/eslint-config-foora --dev

使用npm的开发者：

> npm install --save-dev foora/eslint-config-foora

2. 配置.eslintrc.js

standard版本:
```
// .eslintrs.js

module.exports = {
    extends: ['eslint-config-foora']
};
```
react版本:
```
// .eslintrs.js

module.exports = {
    extends: ['eslint-config-foora/react']
};
```
vue版本:
```
// .eslintrs.js

module.exports = {
    extends: ['eslint-config-foora/vue']
};
```
## 测试

1. standard版本

> npm test standard

2. react版本

> npm test react

3. vue版本

> npm test vue

## 参考
- [AlloyTeam Eslint 规则](https://github.com/AlloyTeam/eslint-config-alloy)
- [Eslint Guide](https://eslint.org/)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
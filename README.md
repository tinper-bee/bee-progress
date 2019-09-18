# bee-progress

[![npm version](https://img.shields.io/npm/v/bee-progress.svg)](https://www.npmjs.com/package/bee-progress)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-progress/master.svg)](https://travis-ci.org/tinper-bee/bee-progress)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-progress/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-progress?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-progress.svg)](https://david-dm.org/tinper-bee/bee-progress#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-progress.svg?style=flat)](https://npmjs.org/package/bee-progress)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-progress.svg)](http://isitmaintained.com/project/tinper-bee/bee-progress "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-progress.svg)](http://isitmaintained.com/project/tinper-bee/bee-progress "Percentage of issues still open")


react bee-progress component for tinper-bee

some description...

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```js

```



## API

 各类型共用的属性。

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| type | 类型，可选 `line` `circle` `dashboard` | string | `line` |  
| format | 内容的模板函数 | function(percent, successPercent) | `percent => percent + '%'` | 
| percent | 百分比 | number | 0 | 
| showInfo | 是否显示进度数值或状态图标 | boolean | true | 
| status | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | string | - |
| strokeLinecap |  | Enum{ 'round', 'square' } | `round` | 
| strokeColor | 进度条的色彩 | string | - | 
| successPercent | 已完成的分段百分比 | number | 0 | 

### `type="line"`

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| strokeWidth | 进度条线的宽度，单位 px | number | 10 | 
| strokeColor | 进度条的色彩，传入 object 时为渐变 | string \| { from: string; to: string; direction: string } | - | 

### `type="circle"`

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| width | 圆形进度条画布宽度，单位 px | number | 132 | 
| strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 | 
| strokeColor | 圆形进度条线的色彩，传入 object 时为渐变 | string \| object | - | 

### `type="dashboard"`

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| width | 仪表盘进度条画布宽度，单位 px | number | 132 |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 |
| gapDegree | 仪表盘进度条缺口角度，可取值 0 ~ 360 | number | 0 | 
| gapPosition | 仪表盘进度条缺口位置 | `Enum{ 'top', 'bottom', 'left', 'right' }` | `top` | 

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-progress
$ cd bee-progress
$ npm install
$ npm run dev
```

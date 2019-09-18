# 进度条 Progress


 ## 何时使用
记录进度或动态的显示进度变化。

 ## 如何使用
```
import Progress from 'bee-progress';
import 'bee-progress/build/Progress.css';

```

 ## 代码演示

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
| --- | --- | --- | --- | --- |
| width | 仪表盘进度条画布宽度，单位 px | number | 132 |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 |
| gapDegree | 仪表盘进度条缺口角度，可取值 0 ~ 360 | number | 0 | 
| gapPosition | 仪表盘进度条缺口位置 | Enum{ 'top', 'bottom', 'left', 'right' } | `top` | 


 ## 注意事项

 暂无

 ## 更新日志
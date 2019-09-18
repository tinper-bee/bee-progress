/**
*
* @title 仪表盘
* @description 通过设置 type=dashboard，可以很方便地实现仪表盘样式的进度条。
*
*/
import React, { Component } from 'react';
import Progress from '../../src';

class Demo8 extends Component {
    render () {
        return (
            <div>
                <Progress type="dashboard" percent={75} />
            </div>
        )
    }
}
export default Demo8
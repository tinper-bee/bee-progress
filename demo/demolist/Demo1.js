/**
*
* @title 进度条
* @description 标准的进度条。
*
*/
import React, { Component } from 'react';
import Progress from '../../src';

class Demo1 extends Component {
    render () {
        return (
            <div>
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
            </div>
        )
    }
}
export default Demo1
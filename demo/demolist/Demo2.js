/**
*
* @title 进度圈
* @description 圈形的进度。
*
*/
import React, { Component } from 'react';
import Progress from '../../src';

class Demo2 extends Component {
    render () {
        return (
            <div>
                <Progress type="circle" percent={75} />
                <Progress type="circle" percent={70} status="exception" />
                <Progress type="circle" percent={100} />
            </div>
        )
    }
}
export default Demo2
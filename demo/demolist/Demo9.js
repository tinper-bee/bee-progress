/**
*
* @title 分段进度条
* @description 标准的进度条。
*
*/
import React, { Component } from 'react';
import Progress from '../../src';
import Tooltip from 'bee-tooltip';

class Demo9 extends Component {
    render () {
        return (
            <div>
                <Tooltip overlay="3 done / 3 in progress / 4 to do">
                    <Progress percent={60} successPercent={30} />
                </Tooltip>

                <Tooltip overlay="3 done / 3 in progress / 4 to do">
                    <Progress percent={60} successPercent={30} type="circle" />
                </Tooltip>

                <Tooltip overlay="3 done / 3 in progress / 4 to do">
                    <Progress percent={60} successPercent={30} type="dashboard" />
                </Tooltip>
            </div>
        )
    }
}
export default Demo9
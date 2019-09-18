import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var Demo10 = require("./demolist/Demo10");var Demo11 = require("./demolist/Demo11");var DemoArray = [{"example":<Demo1 />,"title":" 进度条","code":"/**\n*\n* @title 进度条\n* @description 标准的进度条。\n*\n*/\nimport React, { Component } from 'react';\nimport { Progress } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <div>\n                <Progress percent={30} />\n                <Progress percent={50} status=\"active\" />\n                <Progress percent={70} status=\"exception\" />\n                <Progress percent={100} />\n                <Progress percent={50} showInfo={false} />\n            </div>\n        )\n    }\n}\nexport default Demo1","desc":" 标准的进度条。","scss_code":"div.u-progress-circle, div.u-progress-line {\r\n    margin-right: 8px;\r\n    margin-bottom: 8px;\r\n}"},{"example":<Demo2 />,"title":" 进度圈","code":"/**\r\n*\r\n* @title 进度圈\r\n* @description 圈形的进度。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Progress } from 'tinper-bee';\r\n\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n                <Progress type=\"circle\" percent={75} />\r\n                <Progress type=\"circle\" percent={70} status=\"exception\" />\r\n                <Progress type=\"circle\" percent={100} />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo2","desc":" 圈形的进度。"},{"example":<Demo3 />,"title":" 小型进度条","code":"/**\r\n*\r\n* @title 小型进度条\r\n* @description 适合放在较狭窄的区域内。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Progress } from 'tinper-bee';\r\n\r\n\r\nclass Demo3 extends Component {\r\n    render () {\r\n        return (\r\n            <div style={{ width: 170 }}>\r\n                <Progress percent={30} size=\"small\" />\r\n                <Progress percent={50} size=\"small\" status=\"active\" />\r\n                <Progress percent={70} size=\"small\" status=\"exception\" />\r\n                <Progress percent={100} size=\"small\" />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo3","desc":" 适合放在较狭窄的区域内。"},{"example":<Demo4 />,"title":" 小型进度圈","code":"/**\r\n*\r\n* @title 小型进度圈\r\n* @description 小一号的圈形进度。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Progress } from 'tinper-bee';\r\n\r\n\r\nclass Demo4 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n                <Progress type=\"circle\" percent={30} width={80} />\r\n                <Progress type=\"circle\" percent={70} width={80} status=\"exception\" />\r\n                <Progress type=\"circle\" percent={100} width={80} />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo4","desc":" 小一号的圈形进度。"},{"example":<Demo5 />,"title":" 进度圈动态展示","code":"/**\r\n*\r\n* @title 进度圈动态展示\r\n* @description 会动的进度条才是好进度条。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Icon, Button, ButtonGroup, Progress } from 'tinper-bee';\r\n\r\n\n\n\n\r\nclass Demo5 extends Component {\r\n    state = {\r\n        percent: 0,\r\n    };\r\n    \r\n    increase = () => {\r\n        let percent = this.state.percent + 10;\r\n        if (percent > 100) {\r\n            percent = 100;\r\n        }\r\n        this.setState({ percent });\r\n    };\r\n    \r\n    decline = () => {\r\n        let percent = this.state.percent - 10;\r\n        if (percent < 0) {\r\n            percent = 0;\r\n        }\r\n        this.setState({ percent });\r\n    };\r\n    render () {\r\n        return (\r\n            <div className=\"demo5\">\r\n                <Progress type=\"circle\" percent={this.state.percent} />\r\n                <ButtonGroup>\r\n                    <Button onClick={this.decline}><Icon type=\"uf-minus\" /></Button>\r\n                    <Button onClick={this.increase}><Icon type=\"uf-plus\" /></Button>\r\n                </ButtonGroup>\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo5","desc":" 会动的进度条才是好进度条。","scss_code":".demo5 {\r\n    .u-button-group {\r\n        display: inline-block;\r\n    }\r\n}"},{"example":<Demo6 />,"title":" 动态展示","code":"/**\r\n*\r\n* @title 动态展示\r\n* @description 会动的进度条才是好进度条。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Icon, Button, ButtonGroup, Progress } from 'tinper-bee';\r\n\r\n\n\n\n\r\nclass Demo6 extends Component {\r\n    state = {\r\n        percent: 0,\r\n    };\r\n    \r\n    increase = () => {\r\n        let percent = this.state.percent + 10;\r\n        if (percent > 100) {\r\n            percent = 100;\r\n        }\r\n        this.setState({ percent });\r\n    };\r\n    \r\n    decline = () => {\r\n        let percent = this.state.percent - 10;\r\n        if (percent < 0) {\r\n            percent = 0;\r\n        }\r\n        this.setState({ percent });\r\n    };\r\n    \r\n    render () {\r\n        return (\r\n            <div>\r\n                <Progress percent={this.state.percent} />\r\n                <ButtonGroup>\r\n                    <Button onClick={this.decline}><Icon type=\"uf-minus\" /></Button>\r\n                    <Button onClick={this.increase}><Icon type=\"uf-plus\" /></Button>\r\n                </ButtonGroup>\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo6","desc":" 会动的进度条才是好进度条。"},{"example":<Demo7 />,"title":" 自定义文字格式","code":"/**\r\n*\r\n* @title 自定义文字格式\r\n* @description format 属性指定格式。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Progress } from 'tinper-bee';\r\n\r\n\r\nclass Demo7 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n                <Progress type=\"circle\" percent={75} format={percent => `${percent} Days`} />\r\n                <Progress type=\"circle\" percent={100} format={() => 'Done'} />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo7","desc":" format 属性指定格式。"},{"example":<Demo8 />,"title":" 仪表盘","code":"/**\r\n*\r\n* @title 仪表盘\r\n* @description 通过设置 type=dashboard，可以很方便地实现仪表盘样式的进度条。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Progress } from 'tinper-bee';\r\n\r\n\r\nclass Demo8 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n                <Progress type=\"dashboard\" percent={75} />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo8","desc":" 通过设置 type=dashboard，可以很方便地实现仪表盘样式的进度条。"},{"example":<Demo9 />,"title":" 分段进度条","code":"/**\r\n*\r\n* @title 分段进度条\r\n* @description 标准的进度条。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Tooltip, Progress } from 'tinper-bee';\r\n\r\n\n\r\nclass Demo9 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n                <Tooltip overlay=\"3 done / 3 in progress / 4 to do\">\r\n                    <Progress percent={60} successPercent={30} />\r\n                </Tooltip>\r\n\r\n                <Tooltip overlay=\"3 done / 3 in progress / 4 to do\">\r\n                    <Progress percent={60} successPercent={30} type=\"circle\" />\r\n                </Tooltip>\r\n\r\n                <Tooltip overlay=\"3 done / 3 in progress / 4 to do\">\r\n                    <Progress percent={60} successPercent={30} type=\"dashboard\" />\r\n                </Tooltip>\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo9","desc":" 标准的进度条。"},{"example":<Demo10 />,"title":" 圆角/方角边缘","code":"/**\r\n*\r\n* @title 圆角/方角边缘\r\n* @description 通过设定 strokeLinecap=\"square|round\" 可以调整进度条边缘的形状。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Progress } from 'tinper-bee';\r\n\r\n\r\nclass Demo10 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n                <Progress strokeLinecap=\"square\" percent={75} />\r\n                <Progress strokeLinecap=\"square\" type=\"circle\" percent={75} />\r\n                <Progress strokeLinecap=\"square\" type=\"dashboard\" percent={75} />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo10","desc":" 通过设定 strokeLinecap=\"square|round\" 可以调整进度条边缘的形状。"},{"example":<Demo11 />,"title":" 自定义进度条渐变色","code":"/**\r\n*\r\n* @title 自定义进度条渐变色\r\n* @description linear-gradient 的封装。推荐只传两种颜色。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Progress } from 'tinper-bee';\r\n\r\n\r\nclass Demo11 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n                <Progress\r\n                    strokeColor={{\r\n                        '0%': '#108ee9',\r\n                        '100%': '#87d068',\r\n                    }}\r\n                    percent={99.9}\r\n                />\r\n                <Progress\r\n                    strokeColor={{\r\n                        from: '#108ee9',\r\n                        to: '#87d068',\r\n                    }}\r\n                    percent={99.9}\r\n                    status=\"active\"\r\n                />\r\n                <Progress\r\n                    type=\"circle\"\r\n                    strokeColor={{\r\n                        '0%': '#108ee9',\r\n                        '100%': '#87d068',\r\n                    }}\r\n                    percent={90}\r\n                />\r\n                <Progress\r\n                    type=\"circle\"\r\n                    strokeColor={{\r\n                        '0%': '#108ee9',\r\n                        '100%': '#87d068',\r\n                    }}\r\n                    percent={100}\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo11","desc":" linear-gradient 的封装。推荐只传两种颜色。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));

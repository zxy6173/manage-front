import React from "react";
import {Layout,Menu, Icon,Row,Col} from "antd";
const {Header} = Layout;

export default class MyHeader extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(e){
        this.props.router.replace(e.key);
    }
    render(){
        return <Header style={{backgroundColor:"white"}}>
            <Row>
                <Col span={4}><h1>Manage</h1></Col>
            </Row>

        </Header>
    }
}

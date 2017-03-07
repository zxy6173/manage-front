import React from "react";
import {Layout,Menu} from "antd";
const {Sider,Content} = Layout;

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentKey:"1"
        }
    }
    handleClick(e){
        this.props.router.replace(e.key);
        this.setState({
            currentKey:e.key
        });
    }

    render(){
        return <Layout style={{height:600}}>
            <Sider style={{backgroundColor:"#ececec",padding:20}}>
            <Menu onClick={this.handleClick.bind(this)}
             selectedKeys={[this.state.currentKey]} style={{height:"100%"}}>
              <Menu.Item key="student">学生管理</Menu.Item>
              <Menu.Item key="teacher">老师管理</Menu.Item>
              <Menu.Item key="course">课程管理</Menu.Item>

            </Menu>
            </Sider>
            <Content style={{backgroundColor:"#ececec",padding:20}}>
                {this.props.children}
            </Content>
        </Layout>
    }
}

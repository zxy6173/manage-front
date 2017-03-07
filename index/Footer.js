import React from "react";
import {Layout} from "antd";
const {Footer} = Layout;

export default class MyFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Footer style={{backgroundColor:"white",textAlign:"center"}}>
            <h1>Copyright &copy; 2017</h1>
        </Footer>
    }
}

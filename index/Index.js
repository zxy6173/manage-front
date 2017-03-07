import React from "react";
import {Layout} from "antd";
import Header from "./Header";
import Footer from "./Footer";

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // console.log("index_router",this.props);
        return <Layout>
            <Header router={this.props.router}></Header>
            {this.props.children}
            <Footer></Footer>
        </Layout>
    }
}

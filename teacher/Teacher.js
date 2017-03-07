import React from "react";
import {Button} from "antd";
import {connect} from "react-redux";
import store from "store";
class Teacher extends React.Component{
    constructor(props){
        super(props);
    }
    addNumber(){
        store.dispatch({
            type:"ADD_NUMBER",
            count:this.props.obj.count + 1
        });
    }
    render(){
        return <div style={{backgroundColor:"white",height:"100%",padding:20}}>
            <h1>老师管理</h1>
            <Button type="primary" onClick={this.addNumber.bind(this)}>计数器</Button>
            <p>{this.props.obj.count}</p>
        </div>
    }
}
const mapStateToProps = function(store){
    return {
        obj:store.testReducer
    }
}
export default connect(mapStateToProps)(Teacher);

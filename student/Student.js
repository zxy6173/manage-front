import React from "react";
import {Button} from "antd";
import {ajax} from "tools";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent"
import {connect} from "react-redux";
import store from "store";

class Student extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     data:{
        //         rows:[]
        //     },
        //     updateModal:false,
        //     student:{}
        // }
    }
    componentWillMount(){
        this.show();
    }
    show(page){
        ajax({
            type:"get",
            url:"/students/find",
            data:{
                page:page,
                rows:5
            },
            success:function(data){
                // this.setState({
                //     data:data
                // });
                store.dispatch({
                    type:"SHOW_ALL_STUDENT",
                    data:data
                });
            }.bind(this)
        });
    }
    // setStudent(student){
    //     this.setState({
    //         student:student,
    //         updateModal:true
    //     })
    //     console.log("student",student);
    // }
    // closeUpdate(){
    //     this.setState({
    //         updateModal:false
    //     });
    // }
    render(){
        return <div style={{backgroundColor:"white",height:"100%",padding:20}}>
            <h1>学生管理</h1>
            <AddStudent show={this.show.bind(this)}/>
            <UpdateStudent show={this.show.bind(this)}/>
            <StudentList show={this.show.bind(this)}   />
        </div>
    }
}

const mapStateToProps = function(store){
    return {
        wigetState:store.wigetReducer,
        studentState:store.studentReducer
    }
}
export default connect(mapStateToProps)(Student);

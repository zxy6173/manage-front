import React from "react";
import {Button,Table} from "antd";
import {ajax} from "tools";
import {connect} from "react-redux";
import store from "store";

class StudentList extends React.Component{
    constructor(props){
        super(props);
    }
    del(id){

        ajax({
            type:"post",
            url:"/students/del",
            data:{
                _id:id
            },
            success:function(){
                this.props.show();

            }.bind(this)
        });
    }
    showById(id){
        ajax({
            type:"get",
            url:"/students/find",
            data:{
                _id:id
            },
            success:function(data){
                store.dispatch({
                    type:"SHOW_STUDENT",
                    student:data
                });
                store.dispatch({
                    type:"SHOW_UPDATE_MODAL",
                    updateVisible:true
                });
            }.bind(this)
        });
    }
    render(){
        const columns = [
            {
                title:"姓名",
                dataIndex:"name",
                key:"name"
            },
            {
                title:"性别",
                dataIndex:"gender",
                key:"gender"
            },
            {
                title:"年龄",
                dataIndex:"age",
                key:"age"
            },
            { title: 'Action', dataIndex: '', key: 'x',
             render: (value) => {
                 return <div>
                    <Button type="primary" onClick={()=>{this.showById(value._id)}}>修改</Button>
                    &nbsp;
                    <Button type="primary" onClick={()=>{this.del(value._id)}}>删除</Button>
                 </div>
             } },
        ];

        var data = this.props.studentState.data;
        const pagination = {
            current:parseInt(this.props.studentState.data.curpage),
            total:data.total,
            pageSize:5,
            onChange:function(page){
                this.props.show(page);

            }.bind(this)
        }

        return <Table rowKey="_id" columns={columns} dataSource={this.props.studentState.data.rows} pagination={pagination} bordered />
    }
}

const mapStateToProps = function(store){
    return {
        studentState:store.studentReducer
    }
}
export default connect(mapStateToProps)(StudentList);

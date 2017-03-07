import React from "react";
import {ajax} from "tools";
import {
    Button,
    Modal,Form,Input,Select
} from "antd";
const FormItem = Form.Item;
import {connect} from "react-redux";
import store from "store";

class AddStudent extends React.Component {
    constructor(props) {
        super(props);

    }
    handleOk() {
        ajax({
            type:"post",
            url:"/students/add",
            data:this.props.form.getFieldsValue(),
            success:function(){
                store.dispatch({
                    type:"SHOW_ADD_MODAL",
                    addVisible:false
                });
                this.props.show();
            }.bind(this)
        });

    }
    handleCancel() {
        store.dispatch({
            type:"SHOW_ADD_MODAL",
            addVisible:false
        });
    }
    openAdd() {
        store.dispatch({
            type:"SHOW_ADD_MODAL",
            addVisible:true
        });
    }
    render() {
        const {
            getFieldDecorator
        } = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            },
        };

        return <div >
            <Button type = "primary"
        onClick = {
                this.openAdd.bind(this)
            }> 增加 </Button>
            <Modal title = "增加"
        visible = {
            this.props.wigetState.addVisible
        }
        onOk = {
            this.handleOk.bind(this)
        }
        onCancel = {
                this.handleCancel.bind(this)
            }>
            <Form>
            <FormItem {...formItemLayout}
        label = "姓名"
        hasFeedback>
            {
                getFieldDecorator('name', {})(
                    <Input />
                )
            } </FormItem>
            <FormItem {...formItemLayout}
        label = "年龄"
        hasFeedback>
            {
                getFieldDecorator('age', {})(
                    <Input />
                )
            } </FormItem>

            <FormItem
          label="性别"
          {...formItemLayout}
        >
          {getFieldDecorator('gender', {})(
            <Select placeholder="请选择性别">
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </Select>
          )}
        </FormItem>

        </Form>
        </Modal>
        </div>
    }
}

const mapStateToProps = function(store){
    return {
        wigetState:store.wigetReducer
    }
}
export default connect(mapStateToProps)(Form.create()(AddStudent));

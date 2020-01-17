import React from "react";
import {ajax} from "tools";
import {
    Button,
    Modal,Form,Input,Select
} from "antd";
const FormItem = Form.Item;
import {connect} from "react-redux";
import store from "store";

class UpdateStudent extends React.Component {
    constructor(props) {
        super(props);

    }

    handleOk() {
        var values = this.props.form.getFieldsValue();
        values._id = this.props.studentState.student._id;
        ajax({
            type:"put",
            url:"/students/"+values._id,
            data:values,
            success:function(){
                store.dispatch({
                    type:"SHOW_UPDATE_MODAL",
                    updateVisible:false
                });
                this.props.show();
            }.bind(this)
        });

    }
    handleCancel(){
        store.dispatch({
            type:"SHOW_UPDATE_MODAL",
            updateVisible:false
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
            <Modal title = "修改"
        visible = {
            this.props.wigetState.updateVisible
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
        wigetState:store.wigetReducer,
        studentState:store.studentReducer
    }
}
export default connect(mapStateToProps)(Form.create({
    mapPropsToFields(props) {
            return {
                name:{value:props.studentState.student.name},
                age:{value:props.studentState.student.age},
                gender:{value:props.studentState.student.gender}
            };
        }
})(UpdateStudent));

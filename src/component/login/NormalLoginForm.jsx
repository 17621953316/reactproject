import React from 'react'
import {
    Form, Select, Input, Button, Icon, Checkbox, Row, Col,message
} from 'antd';


import '../../css/loginform.css'

import {checkUser} from '../API/index'

const { Option } = Select


class NormalLoginForm extends React.Component {
    //显示提示信息错误
     error = (msg) => {
        message.error(msg)
      }

    handleSubmit = (e) => {
        e.preventDefault();
        //let history = this.context
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values); //{userName: "111", password: "2", captcha: "2", remember: true}
                checkUser(values).then(res => {
                    //如果成功要跳转到首页
                    console.log(res)
                    if(res.meta.status === 200) {
                        console.log('登陆成功')
                       // console.log(history)
                    }else{
                        //失败，展示提示信息
                        this.error(res.meta.msg)
                    }
                })
            }else{
                console.log("校验失败")
            }
        })
    }


    render() {

        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        }

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item
                >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input size="large" prefix={<Icon type="user" />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item
                >
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input size="large" prefix={<Icon type="lock" />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Form.Item
                        extra="We must make sure that your are a human."
                    >
                        <Row gutter={8}>
                            <Col span={14}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                                })(
                                    <Input size="large" />
                                )}
                            </Col>
                            <Col span={10}>
                                <Button size="large">Get captcha</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                        Log in
                     </Button>
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                </Form.Item>
        
            </Form>
        );
    }
}

export default Form.create({ name: 'coordinated' })(NormalLoginForm);


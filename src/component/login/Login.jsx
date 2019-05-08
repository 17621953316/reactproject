import React from 'react'
import { Modal, Button, Input } from 'antd'

import NormalLoginForm from './NormalLoginForm.jsx'

import '../../css/index.css'
import '../../css/login.css'

const onChange = (e) => {
    console.log(e);
  }

export default class Login extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            modal1Visible: false
        }
    }
   
      
    componentWillMount() {
    }
    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }
    goRegister=() => {
        //console.log(this.props)
    }
    
    render() {
        return <span>
            <Button className="btn-login" type="primary" onClick={() => this.setModal1Visible(true)}>
                登陆
            </Button>
            <img className="bgimg" src="http://www.gzdata.gov.cn/img/login_logo.png"></img>
            <Modal
                title="用户登陆"
                centered
                visible={this.state.modal1Visible}
                okText="注册"
                onOk={this.goRegister}
                onCancel={() => this.setModal1Visible(false)}
            >
                
                <NormalLoginForm></NormalLoginForm>
               
                
            </Modal>
            
        </span>
    }

}

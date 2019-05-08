import React from 'react'
import { Menu, Icon, Button, Layout, Card, Row, Col, Modal } from 'antd'
import { Route, Link } from 'react-router-dom'


import Home from '../home/Home.jsx'
import Requirement from '../require/Requirement.jsx'
import Directory from '../directory/Directory.jsx'
import Board from '../board/Board.jsx'

import Application from '../server/Application.jsx'
import Development from '../server/Developmenttools'

import Login from '../login/Login.jsx'

import '../../css/index.css'

const SubMenu = Menu.SubMenu
const { Header, Content, Footer } = Layout;




export default class Indexnav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return <div>
            <Layout style={{ height: "100%" }}>
                <Header style={{ position: 'fixed', zIndex: 999, width: '100%', backgroundColor: "white" }}>
                    <div className="logo" />
                    <Menu
                        theme="white"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px', backgroundColor: "white", color: "black", display: "inline-block" }}
                    >
                        <SubMenu key="home" title={<span className="submenu-title-wrapper"><Link className="link" to="/home">首页</Link></span>}>
                        </SubMenu>
                        <SubMenu className="nav-second" title={<span className="submenu-title-wrapper"><Link className="link" to="/">开放数据 <Icon type="down" style={{ fontSize: "10px", color: "#ccc" }} /></Link></span>}>
                            <Menu.Item key="1" style={{ color: "#ccc" }}><Link to="/list">文件</Link></Menu.Item>
                            <Menu.Item key="2" style={{ color: "#ccc" }}><Link to="/list">接口</Link></Menu.Item>
                            <Menu.Item key="3" style={{ color: "#ccc" }}><Link to="/list">应用</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="directory" title={<span className="submenu-title-wrapper"><Link className="link" to="/directory">数据目录</Link></span>}>
                        </SubMenu>
                        <SubMenu key="require" title={<span className="submenu-title-wrapper"><Link className="link" to="/require">数据申请</Link></span>}>
                        </SubMenu>
                        <SubMenu title={<span className="submenu-title-wrapper"><Link className="link" to="/">数据服务 <Icon type="down" style={{ fontSize: "10px", color: "#ccc" }} /></Link></span>}>
                            <Menu.Item key="1" style={{ color: "#ccc" }}><Link to="/server/application">应用展示</Link></Menu.Item>
                            <Menu.Item key="2" style={{ color: "#ccc" }}><Link to="/server/developmenttools">开发者工具</Link></Menu.Item>
                            <Menu.Item key="3" style={{ color: "#ccc" }}><a href="http://www.gzdata.gov.cn/index_black.html">数据分析</a></Menu.Item>
                            <Menu.Item key="4" style={{ color: "#ccc" }}><a href="http://map.tianditu.gov.cn/">地图服务</a></Menu.Item>
                        </SubMenu>
                        <SubMenu key="board" title={<span className="submenu-title-wrapper"><Link className="link" to="/board">政策文件</Link></span>}>
                        </SubMenu>

                    </Menu>
                    <div style={{ float: "right" }}>
                        <Button className="btn-user"><Icon type="compass" theme="filled" style={{ color: "#00cc99" }} />用户指南</Button>
                        <Login></Login>
                        <Button className="btn-reg" >注册</Button>
                    </div>
                </Header>

                <Content style={{ padding: '0px 0px', marginTop: 64, backgroundColor: "#F7F7F7", height: "100%" }}>


                    <Route path="/home" component={Home}></Route>
                    <Route path="/require" component={Requirement}></Route>
                    <Route path="/directory" component={Directory}></Route>
                    <Route path="/server/Application" component={Application}></Route>
                    <Route path="/server/Developmenttools" component={Development}></Route>
                    <Route path="/board" component={Board}></Route>


                </Content>

                <Footer style={{ textAlign: 'center', backgroundColor: "#414855" }}>
                    <Row type="flex" justify="center" className="foot-link">
                        <Col span={2}><a href="http://www.gzdata.gov.cn/link.html" target="_blank">友情链接</a></Col>
                        <Col span={2}><a href="http://www.gzdata.gov.cn/term.html" target="_blank">服务条款</a></Col>
                        <Col span={2}><a href="http://www.gzdata.gov.cn/privacy.html" target="_blank">隐私政策</a></Col>
                        <Col span={2}><a href="http://www.gzdata.gov.cn/copyright.html" target="_blank">版权声明</a></Col>
                        <Col span={2}><a href="http://www.gzdata.gov.cn/aboutus.html" target="_blank">关于我们</a></Col>
                    </Row>
                    <Row type="flex" gutter={16} className="foot-card" justify="space-between">
                        <Col span={10}>
                            <Card style={{ width: 300 }}>
                                <p>主办单位： <a href="#">贵州省大数据发展管理局</a></p>
                                <p>承办单位： 云上贵州大数据产业发展有限公司</p>
                                <p>技术支撑单位： <a href="https://zrys.gzdata.com.cn/">贵州中软云上数据技术服务有限公司</a></p>
                                <p>联系电话： 0851-85283098</p>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card style={{ width: 300 }}>
                                <p><a href="http://bszs.conac.cn/sitename?method=show&id=837BD1DE11157A51E05310291AAC8210"><img src="http://dcs.conac.cn/image/red_error.png"></img></a> <a href="http://121.43.68.40/exposure/jiucuo.html?site_code=5200000127&url=http%3A%2F%2Fwww.gzdata.gov.cn%2Fcity%2Findex.htm"><img src="http://www.gzdata.gov.cn/img/jiucuo.png"></img></a></p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card style={{ width: 300 }}>
                                <p>电子邮箱： <a href="#">gzsxxzxskc@163.com</a></p>
                                <p>备案号：黔ICP备17006171号-2</p>
                                <p>政府网站标识码：5200000127</p>
                                <p><img style={{ marginRight: "5px" }} src="http://www.gzdata.gov.cn/images/beiantubiao.png"></img>贵公网安备： <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=52010302000644">52010302001599号</a></p>
                            </Card>
                        </Col>
                    </Row>

                </Footer>
            </Layout>
        </div>
    }
}
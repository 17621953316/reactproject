import React from 'react'
import { Carousel, Input, Icon, Card, Divider, Row, Col, Button } from 'antd'
//import Indexnav from '../index/Indexnav' 
//导入fetch-jsonp
import fetchJSONP from 'fetch-jsonp'

import '../../css/home.css'
const Search = Input.Search

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            searchTop: false,
            cardShow: false,
            tittleTaps: [],
            allTitle: [],
            news:[],
            latestNews:[],
            recommonentNews:[]

        }
    }

    componentWillMount() {
        this.loadTittle()
        this.loadNews()
        this.loadAllTittle()
        this.loadLatestData()
        this.loadRecommendData()
    }

    render() {
        return <div>
            <Carousel
                effect="fade"
                autoplay="true"
            >
                <a href="http://www.gzdata.gov.cn/index.html"><div className="page1"><h3> </h3></div></a>
                <a href="http://www.et-data.com/index.html"><div className="page2"><h3> </h3></div></a>
                <a href="http://www.gzdata.gov.cn/application.html"><div className="page3"><h3> </h3></div></a>
            </Carousel>
            <Search
                placeholder="请输入数据名称"
                enterButton="搜索"
                size="large"
                onSearch={value => console.log(value)}
                className={this.state.searchTop ? 'search searchTop' : 'search'}
                onClick={this.searchTransitionHandle}
            />
            {/* 关闭按钮 */}
            <Icon className={this.state.searchTop ? "closeIcon closeIconShow" : "closeIcon"} type="close-circle" theme="filled" onClick={this.clickCloseIcon} />

            {/* 搜索列表项 */}
            <div className={this.state.searchTop ? "search-list search-listhidden" : "search-list "}>
                <div><span><Icon type="tags" style={{ fontSize: "16px" }} /></span></div>
                <div className="list">
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E5%B7%A5%E4%B8%9A" rel="noopener noreferrer">工业</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E6%9C%BA%E6%9E%84" rel="noopener noreferrer">机构</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E5%86%9C%E4%B8%9A" rel="noopener noreferrer">农业</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E6%95%99%E8%82%B2" rel="noopener noreferrer">教育</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E8%83%BD%E6%BA%90" rel="noopener noreferrer">能源</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E6%96%87%E5%8C%96" rel="noopener noreferrer">文化</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E4%BD%93%E8%82%B2" rel="noopener noreferrer">体育</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E7%8E%AF%E5%A2%83" rel="noopener noreferrer">环境</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E7%A7%91%E6%8A%80" rel="noopener noreferrer">科技</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E5%8D%AB%E7%94%9F" rel="noopener noreferrer">卫生</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E6%97%85%E6%B8%B8" rel="noopener noreferrer">旅游</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E7%BB%9F%E8%AE%A1" rel="noopener noreferrer">统计</a></span>
                    <span><a href="http://www.gzdata.gov.cn/list.html?name=%E5%8C%BB%E7%96%97" rel="noopener noreferrer">医疗</a></span>
                </div>
            </div>

            {/* 主题部分 */}
            <div className={this.state.cardShow ? "card cardShow" : 'card'}>
                <Card style={{ width: 480 }}>
                    <div style={{ float: "left" }}><span style={{ width: 30, marginRight: 10, color: "#fff", paddingTop: 10 }}>主题</span></div>
                    <div style={{ float: "left", width: 390 }}>
                        {this.state.tittleTaps.map((item, i) => {
                            return <span key={i}><a href="javascript:void(0)">{item.name}</a></span>
                        })}
                    </div>
                </Card>
            </div>

            {/* 平台 */}
            <div className="platform">
                <h3>平台通道:</h3>
                <ul>
                    <li>贵阳</li>
                    <li>遵义</li>
                    <li>铜仁</li>
                    <li>黔西南州</li>
                    <li>黔东南州</li>
                    <li>黔南州</li>
                    <li>六盘水</li>
                    <li>毕节</li>
                </ul>
            </div>

            <div className="data">
                <Row justify="space-around">
                    <Col className="gutter-row" sm={{ span: 5, offset: 1 }} xs={{ span: 8, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <div className="gutter-box">
                            <h3>开放数据集</h3>
                            <Divider style={{ backgroundColor: "#ccc", margin: 0 }} />
                            <p><span>2097</span>个</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" sm={{ span: 5, offset: 1 }} xs={{ span: 8, offset: 1 }} lg={{ span: 3, offset: 2 }}>
                        <div className="gutter-box">
                            <h3>开放文件</h3>
                            <Divider style={{ backgroundColor: "#ccc", margin: 0 }} />
                            <p><span>1488</span>个</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" sm={{ span: 5, offset: 1 }} xs={{ span: 8, offset: 1 }} lg={{ span: 3, offset: 2 }}>
                        <div className="gutter-box">
                            <h3>开放部门总数</h3>
                            <Divider style={{ backgroundColor: "#ccc", margin: 0 }} />
                            <p><span>69</span>个</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" sm={{ span: 5, offset: 1 }} xs={{ span: 8, offset: 1 }} lg={{ span: 3, offset: 2 }}>
                        <div className="gutter-box">
                            <h3>市州总数</h3>
                            <Divider style={{ backgroundColor: "#ccc", margin: 0 }} />
                            <p><span>8</span>个</p>
                        </div>
                    </Col>
                </Row>

            </div>

            {/* 全部主题部分 */}
            <div className="allTitle">
                <Row type="flex" justify="space-between" style={{ textAlign: "center" }}>
                    {this.state.allTitle.map((item, i) => {
                        return <Col className="gutter-row" span={4} key={i+1}>
                            <div className="gutter-box">
                                {/* <Icon type="area-chart" /> */}
                                <img src={'http://www.gzdata.gov.cn/img/topic_icon0'+  (i+1) +'.png'} style={{width:100,height:100}}></img>
                                <p>{item.name}</p>
                            </div>
                        </Col>
                    })}
                    <Col className="gutter-row" span={4}>
                        <div className="gutter-box">
                        <img src="http://www.gzdata.gov.cn/img/topic_icon09.png" style={{width:100,height:100}}></img>
                            <p>社保就业</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}> 
                        <div className="gutter-box">
                        <img src="http://www.gzdata.gov.cn/img/topic_icon10.png" style={{width:100,height:100}}></img>
                            <p>生态环境</p>
                        </div>
                    </Col>
                </Row>
                <Button>全部主题</Button>
            </div>

            {/* 文章部分 */}
            <div className="articles">
                <Row type="flex" justify="space-around">
                    <Col span={8}>
                        <div className="articlesTop">
                            <h1>新闻动态</h1>
                            <p>News</p>
                        </div>
                        <Card style={{ width: "100%", backgroundColor: "#fff" }}>
                            {this.state.news.map((item,i) => {
                                return <p key={i} className="line-limit-length">
                                <span>{item.description}｜</span>
                                <a href={item.url}>{item.name}</a>
                            </p>
                            })}
                            <p style={{ textAlign: "right" }}>
                                <a href="http://www.gzdata.gov.cn/news.html" style={{ color: "#ccc", textDecoration: "none" }}>更多</a>
                            </p> 
                        </Card>
                    </Col>
                    <Col span={8}>
                        <div className="articlesTop articlesTop2">
                            <h1>最新数据</h1>
                            <p>Latest Data</p>
                        </div>
                        <Card style={{ width: "100%", backgroundColor: "#fff" }}>
                            {this.state.latestNews.map((item,i) => {
                                return <p key={i} className="line-limit-length">
                                <span>{item.description}｜</span>
                                <a href={item.url} >{item.name}</a>
                            </p>
                            })}
                            <p style={{ textAlign: "right" }}>
                                <a href="http://www.gzdata.gov.cn/list.html" style={{ color: "#ccc", textDecoration: "none" }}>更多</a>
                            </p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <div className="articlesTop articlesTop3">
                            <h1>推荐数据</h1>
                            <p>Recommonended Data</p>
                        </div>
                        <Card style={{ width: "100%", backgroundColor: "#fff" }}>
                            {this.state.recommonentNews.map((item,i) => {
                                    return <p key={i} className="line-limit-length">
                                    <span>{item.description}｜</span>
                                    <a href={item.url} >{item.name}</a>
                                </p>
                            })}
                            <p style={{ textAlign: "right" }}>
                                <a href="http://www.gzdata.gov.cn/list.html" style={{ color: "#ccc", textDecoration: "none" }}>更多</a>
                            </p>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="kong" style={{ width: "100%", height: 100, backgroundColor: '#fff' }}></div>

        </div>
    }

    // 搜索框点击事件函数
    searchTransitionHandle = () => {
        this.setState({
            searchTop: !this.state.show,
            cardShow: true
        })
    }
    //关闭按钮函数
    clickCloseIcon = () => {
        this.setState({
            searchTop: false,
            cardShow: false
        })
    }
    //获取主题数据
    loadTittle = () => {
        var url = "http://data.guizhou.gov.cn/dataopen/api/topic/general"
        fetchJSONP(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    tittleTaps: data.data
                })
            })
    }

    //获取全部主题
    loadAllTittle = () => {
        var url = "http://data.guizhou.gov.cn/dataopen/api/topic/hot"
        fetchJSONP(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    allTitle: data.data
                })
            })
    }

    //获取  新闻动态数据 
    loadNews = () => {
        var url = `http://data.guizhou.gov.cn/dataopen/api/dataset/hot?dataType=0`
        fetchJSONP(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                news:data.data.hotdatasetlist
            })
        })
    }

    //获取  最新数据 
    loadLatestData= () => {
        var url = 'http://data.guizhou.gov.cn/dataopen/api/dataset/hot?dataType=1'
        fetchJSONP(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                latestNews:data.data.hotdatasetlist
            })
        })
    }

     //获取  推荐数据 
     loadRecommendData= () => {
        var url = 'http://data.guizhou.gov.cn/dataopen/api/dataset/hot?dataType=3'
        fetchJSONP(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                recommonentNews:data.data.hotdatasetlist
            })
        })
    }
    

}
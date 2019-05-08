import React from 'react'
import Index from './component/index/Index.jsx'
//import Home from './component/home/Home.jsx'
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'



export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <HashRouter>
            {/* <Switch>
                <Route exact path="/" component={Home}></Route>
                <Redirect from="/*" to="/"/>>
            </Switch> */}
                  <Index></Index>
                </HashRouter>
            
              
    }
}
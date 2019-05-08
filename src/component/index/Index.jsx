
import React from 'react'


import Indexnav from './Indexnav.jsx'



export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  render() {   
      return <div>
          <Indexnav></Indexnav>
      </div>  
  }
}
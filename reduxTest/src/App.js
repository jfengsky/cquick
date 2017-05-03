import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Head from './components/Head'
import View from './components/View'
import Foot from './components/Foot'
import Child from './components/Child'
import Son from './components/Son'

class App extends Component {
  render() {
    const { dispatch } = this.props
    
    return (
      <div>
        <Head />
        <View />
        <Foot />
        <Child>
          <Son />
        </Child>
      </div>
    );
  }
}

App.propTypes = {

}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App)
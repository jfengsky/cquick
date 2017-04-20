import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Head from './components/Head'
import View from './components/View'
import Foot from './components/Foot'

class App extends Component {
  render() {
    const { dispatch } = this.props
    
    return (
      <div>
        <Head />
        <View />
        <Foot />
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
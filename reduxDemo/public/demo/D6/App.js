import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Btn from './Btn'
import View from './View'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Btn />
                <View />
                <Footer />
            </div>
        );
    }
}


App.propTypes = {

};

// const mapStateToProps = (state) => {
//     return {
//         count: state.count
//     }
// }

// App = connect(mapStateToProps)(App)

export default App;
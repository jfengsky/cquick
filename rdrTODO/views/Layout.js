import React, { Component, PropTypes } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Layout extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home} />
            </Router>
        )
    }
}

{/*<Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/api'>Api</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home}/>
                    <Route path="/api" component={Api}/>
                </div>
            </Router>*/}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const Api = () => (
    <div>
        <h2>api</h2>
    </div>
)

Layout.propTypes = {

}
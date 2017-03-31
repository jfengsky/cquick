import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './component/Home'
import List from './component/List'
import Filter from './component/Filter'

export default class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">add</Link>
                        </li>
                        <li>
                            <Link to="/list">list</Link>
                        </li>
                        <li>
                            <Link to="/filter">filter</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/list" component={List} />
                    <Route exact path="/filter" component={Filter} />
                </div>
            </Router>
        )
    }
}

Root.propTypes = {

}
import React, { Component, PropTypes } from 'react'
import check from './check'

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.submitHandle}>
                mobile: <input type="number" ref="mobile" />
                <br />
                email: <input type="text" ref="email" />
                <br />
                <button type="submit">submit</button>
            </form>
        )
    }

    submitHandle = e => {
        e.preventDefault()
        check(this.refs)
    }
}

Form.propTypes = {

}
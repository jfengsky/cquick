import React from 'react'
import ReactDOM from 'react-dom'

import Formapp from './Formapp'

const render = data => {
    ReactDOM.render(
        <Formapp />,
        document.getElementById('root')
    )
}

render()
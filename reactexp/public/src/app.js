/**
 * Created by jiangfeng on 2017/2/24.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import Todolist from './Todolist'

const render = data => {
    ReactDOM.render(
        <Todolist data={data} />,
        document.getElementById('root')
    )
}

$.ajax({
    type: 'post',
    url: '/getData',
    dataType: 'json'
}).done(data => {
    render(data)
})
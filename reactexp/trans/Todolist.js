/**
 * Created by jiangfeng on 2017/2/24.
 */

import React from 'react'

export default class Todolist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: props.data
        }
    }
    // componentDidMount(){
    //     $.ajax({
    //         type: 'post',
    //         url: '/getData',
    //         dataType: 'json'
    //     }).done(data => {
    //         this.setState({
    //             list: data
    //         })
    //     })
    // }
    render(){
        return (
            React.createClass('div', {className: "list"}, [

                    this.props.data.map( (item,index) => {
                        return (
                            React.createClass('p', {key: index}, [item])
                        )
                    })

            ])
        )
    }
}
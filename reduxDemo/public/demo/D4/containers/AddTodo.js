import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// class AddTodo extends React.Component{
//
//     submitHandle = e =>{
//         e.preventDefault()
//         console.log(e)
//         this
//         debugger
//     }
//
//     render(){
//         return (
//             <form onSubmit={this.submitHandle}>
//                 <input type="text" ref="myTextInput" />
//                 <input type="submit" value="Add Todo" />
//             </form>
//         )
//     }
// }

let AddTodo = ({ dispatch }) => {

    let textInput

    const submitHandle = e =>{
        e.preventDefault()
        if(!textInput.value.trim()){
            return
        }
        dispatch(addTodo(textInput.value))
        textInput.value = ''
    }

    const setInput = node => {
        textInput = node
    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text" ref={setInput} />
            <input type="submit" value="Add Todo" />
        </form>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo
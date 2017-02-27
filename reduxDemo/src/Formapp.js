
import React from 'react'

export default class Formapp extends React.Component {
    // mixins: [React.addons.LinkedStateMixin]

    constructor(props){
        super(props)
        this.state = {
            inputValue: 'input value',
            selectValue: 'A',
            radioValue: 'B',
            textareaValue: 'some text here...',
            radioValue: null,
            checkValues: []
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>

                <input ref={function(comp){
                    console.log(comp)
                    comp.focus()
                }} type="text" defaultValue={this.state.inputValue} />
                <br />

                选项：
                <select ref="goodSelect" defaultValue={this.state.selectValue} >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>

                <p>radio button!</p>
                <RadioButton handleRadio={this.handleRadio} />
                <br />
                <CheckBoxButton handleCheck={this.handleCheck} ref="goodCheckbox" />
                <br />
                <textarea defaultValue={this.state.textareaValue} ref="goodTextarea" ></textarea>
                <button type="submit">提交</button>
            </form>
        )
    }

    handleCheck = e => {
        let checkValues = this.state.checkValues.slice()
        let newVal = e.target.value
        let index = checkValues.indexOf(newVal)
        if(index == -1){
            checkValues.push(newVal)
        } else {
            checkValues.splice(index, 1)
        }

        this.setState({
            checkValues
        })
    }

    handleRadio = e => {
        this.setState({
            radioValue: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const formatData = {
            input: this.refs.goodInput.value,
            select: this.refs.goodSelect.value,
            textarea: this.refs.goodTextarea.value,
            radioValue: this.state.radioValue,
            checkValues: this.state.checkValues
        }
        console.log(formatData)
        this.refs.goodCheckbox.saySomeThing()
    }

}

class RadioButton extends React.Component {
    render(){
        return (
            <span>
                A:
                <input onChange={this.props.handleRadio} type="radio" name="goodRadio" value="A" />
                B:
                <input onChange={this.props.handleRadio} type="radio" name="goodRadio" value="B" defaultChecked="" />
                C:
                <input onChange={this.props.handleRadio} type="radio" name="goodRadio" value="C" />
            </span>
        )
    }
}

class CheckBoxButton extends React.Component {
    saySomeThing(){
        alert('say some thing!')
    }
    render(){
        return(
            <span>
                D:
                <input onChange={this.props.handleCheck} type="checkbox" name="goodCheckBox" value="D" />
                E:
                <input onChange={this.props.handleCheck} type="checkbox" name="goodCheckBox" defaultChecked="" value="E" />
                F:
                <input onChange={this.props.handleCheck} type="checkbox" name="goodCheckBox" value="F" />
            </span>
        )
    }
}
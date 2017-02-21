const ClickApp = React.createClass({
    getInitialState(){
        return {
            inputValue: 'input value',
            selectValue: 'A',
            radioValue: 'B',
            textareaValue: 'some text here....'
        }
    },
    handleSubmit(e){
        e.preventDefault()
        console.log('form submintting...')
        console.log(e)
    },
    handleInput(e){
        this.setState({
            inputValue: e.target.value
        })
    },
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={ this.state.inputValue } onChange={this.handleInput} />
                <br />
                <select value={ this.state.selectValue }>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                <br />
                <p>radio button!</p>
                <input name="gradio" type="radio" value="A" />
                <input name="gradio" type="radio" checked value="B" />
                <input name="gradio" type="radio" value="C" />
                <br />
                <input name="gcheck" type="checkbox" value="A" />
                <input name="gcheck" type="checkbox" value="B" />
                <input name="gcheck" type="checkbox" value="C" checked />
                <br />
                <textarea value={ this.state.textareaValue }></textarea>

                <button type="submit">submit</button>
            </form>
        )
    }
})

const clickComponent = React.render(
    <ClickApp />,
    document.getElementById('app')
)
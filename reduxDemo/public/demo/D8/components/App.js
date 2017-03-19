import React, { Component, PropTypes } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
                <Footer />
            </div>
        );
    }
}

App.propTypes = {

}

export default App
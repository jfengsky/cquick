const todos = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

const addTodo = text => {
    return {
        type: 'ADD_TODO',
        text
    }
}

let store = Redux.createStore(todos)



store.dispatch(addTodo('read the docs'))

console.log(store.getState())

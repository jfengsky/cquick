const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                complated: false
            }
        break
        case 'TOGGLE_TODO':
            if(state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                complated: !state.complated
            })
        break
        default:
            return state
        break
    }
}

const todos = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined,action)
            ]
        break
        case 'TOGGLE_TODO':
            return state.map( item => todo(item ,action))
        break
        default:
            return state
        break
    }
}

export default todos
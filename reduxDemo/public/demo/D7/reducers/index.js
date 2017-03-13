const initialState = {
    list: [],
    filter: 'SHOW_ALL'
}

let todoId = 0

const toggleTodo = (list, id) => {
    list.map( item => {
        if(item.id === id) {
            item.completed = !item.completed
        }
    })
    return list
}

export default (state=initialState, action) =>  {
    switch(action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                list: [
                    ...state.list,
                    {
                        id: todoId++,
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                list: state.list.map(item => {
                    if(item.id === action.id){
                        item.completed = !item.completed
                    }
                    return item
                })
            })
        case 'SHOW_ALL':
            return Object.assign({}, state, {
                ...state,
                filter: action.type
            })
        case 'SHOW_TODO':
            return Object.assign({}, state, {
                ...state,
                filter: action.type
            })
        case 'SHOW_COMPLETED':
            return Object.assign({}, state, {
                ...state,
                filter: action.type
            })
        default:
            return state
    }
}

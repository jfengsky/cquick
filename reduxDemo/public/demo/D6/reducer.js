const reducer = (state = {count: 0}, action) => {
    switch (action.type){
        case 'ADD':
            console.log('ADD');
            return Object.assign({},state,{
                count: state.count + 1
            })
        case 'REDUCE':
            console.log('REDUCE');
            return Object.assign({}, state, {
                count: state.count - 1
            })
        case 'TWO':
            return Object.assign({}, state, {
                count: state.count * 2
            })
        case 'THREE':
            return Object.assign({}, state, {
                count: state.count * 3
            })
        case 'CLEAR':
            return Object.assign({}, state, {
                count: 0
            })
        default:
            return state
    }
}

export default reducer
let initialState = {
    count: 0
}

let actionCounter = (state=0, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                count: state.count + 1
            }
        case 'REDUCE':
            return {
                count: state.count - 1
            }
        default:
            return state

    }
}

let render = () => {
    $('#value').text(store.getState().count)
}

let store = Redux.createStore(actionCounter, initialState)

render()

store.subscribe(render)

$('#increment').bind('click', e => {
    store.dispatch({type: 'ADD'})
})

$('#decrement').bind('click', e => {
    store.dispatch({type: 'REDUCE'})
})

$('#incrementAsync').bind('click', e => {
    setTimeout(()=>{
        store.dispatch({type: 'ADD'})
    }, 2000)
})
let nextTodoId = 0

// 添加
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId,
        text
    }
}

// 过滤
export const setVisibiliy = filter => {
    return {
        type: 'SET_VISIBILITY',
        filter
    }
}

// 是否完成
export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
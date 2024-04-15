export const addTodo = (data) => {
    return {
        type: "ADD",
        payload: {
            id: new Date().getTime().toString(), // Call getTime() to get the timestamp
            data: data
        }
    }
}

export const deleteTodo =(id) =>{
    return {
        type: "DELETE_TODO",
        id
    }
}

export const removeTodo =() =>{
    return {
        type: "REMOVE_TODO"
    }
}
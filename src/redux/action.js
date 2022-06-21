import axios from "axios";

export function getTodos() {
    return (dispatch) => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/card')
            .then(result => {
                console.log(result.data)
                dispatch({
                    type: 'GET_TODO_SERVER',
                    payload: result.data
                })
            })
            .catch(error => console.log(error))
    }
}

export function addTodo(newName) {
    return (dispatch) => {
        axios.post('https://nazarov-kanban-server.herokuapp.com/card', {name: newName})
            .then(result => {
                console.log(result.data)
                dispatch(getTodos())
            })
            .catch(error => console.log(error))
    }
}

export function delTodo(_id) {
    return (dispatch) => {
        axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${_id}`)
            .then(result => {
                console.log(result.data)
                dispatch(getTodos())
            })
            .catch(error => console.log(error))
    }
}
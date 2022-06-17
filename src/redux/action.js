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
            .
                catch(error => console.log(error))
            }
    }
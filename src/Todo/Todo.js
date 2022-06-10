import '../App.css';
import {useState} from "react";

function Todo() {
    const initialState = [
        {id: Math.random(), name: 'Liverpool'},
        {id: Math.random(), name: 'Vancouver'},
        {id: Math.random(), name: 'LA'},
        {id: Math.random(), name: 'San Francisco'},
    ]
    const [todos, setTodos] = useState(initialState)
    const [newTodo, setNewTodo] = useState('')
    const addNewTodo = () => {
        const updateTodo = [...todos, {id: Math.random(), name: newTodo}]
        setTodos(updateTodo)
        setNewTodo('')
    }

    return (
        <div className="App">
            <input placeholder='new todo' value={newTodo} onChange={event => setNewTodo(event.target.value)}/>
            <button onClick={addNewTodo}>add new to do</button>
            {todos.map(todo =>
                <div key={todo.id}>
                    <button>down</button>
                    {todo.name}
                    <button>up</button>
                    <button>delete</button>
                </div>
            )}

        </div>
    );
}

export default Todo;

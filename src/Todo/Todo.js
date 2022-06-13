import '../App.css';
import {useId, useState} from "react";

function Todo() {
    const id1 = useId()
    const id2 = useId()
    const id3 = useId()
    const id4 = useId()

    const initialState = [
        {id: id1, name: 'Liverpool', openTodo: true, openUpdate: true, markTodo: false},
        {id: id2, name: 'Vancouver', openTodo: true, openUpdate: true, markTodo: false},
        {id: id3, name: 'LA', openTodo: true, openUpdate: true, markTodo: false},
        {id: id4, name: 'San Francisco', openTodo: true, openUpdate: true, markTodo: false},
    ]
    const [todos, setTodos] = useState(initialState)
    const [newTodo, setNewTodo] = useState('')
    const [updateTodo, setUpdateTodo] = useState('')
    const addNewTodo = () => {
        const updateTodo = [...todos, {id: Math.random(), name: newTodo, openTodo: true, openUpdate: true}]
        setTodos(updateTodo)
        setNewTodo('')
    }
    const deleteTodo = (id) => {
        const updateTodo = todos.filter(el => el.id !== id)
        setTodos(updateTodo)
    }
    const openWindowDelete = (id) => {
        const updateTodo = todos.map(el => el.id === id ? {...el, openTodo: !el.openTodo} : el)
        setTodos(updateTodo)
    }
    const mark = (id) => {
        const updateTodo = todos.map(el => el.id === id ? {...el, markTodo: !el.markTodo} : el)
        setTodos(updateTodo)
    }
    const openUpdateWindow = (id) => {
        const updateTodo = todos.map(el => el.id === id ? {...el, openUpdate: !el.openUpdate} : el)
        setTodos(updateTodo)
        setUpdateTodo('')
    }
    const saveUpdate = (id, newTodo) => {
        const updateTodo = todos.map(el => el.id === id ? {...el, name: newTodo, openUpdate: !el.openUpdate} : el)
        setTodos(updateTodo)
        setUpdateTodo('')
    }
    const moveTodo = (index, value) => {
      const updateTodo = [...todos]
        const currentTodo = updateTodo[index]
        const nextTodo = updateTodo[index + value]
        updateTodo[index] = nextTodo
        updateTodo[index + value] = currentTodo
        setTodos(updateTodo)
    }

    return (
        <div className="App">
            <input autoFocus={true} placeholder='new todo' value={newTodo} onChange={event => setNewTodo(event.target.value)}/>
            <button onClick={addNewTodo}>add new to do</button>
            <hr/>
            {todos.map((todo, i) =>
                <div key={todo.id} style={todo.markTodo ? {textDecoration: "line-through"} : null}>
                    <input type='checkbox' onClick={() => mark(todo.id)}/>
                    <button disabled={i === todos.length - 1} onClick={() => moveTodo(i, 1)}>down</button>
                    {todo.name}
                    <button disabled={i === 0} onClick={() => moveTodo(i, - 1)}>up</button>
                    {todo.openTodo ? <button onClick={() => openWindowDelete(todo.id)}>delete</button> :
                        <div>
                            <button onClick={() => deleteTodo(todo.id)}>yes delete</button>
                            <button onClick={() => openWindowDelete(todo.id)}>cancel</button>
                        </div>}
                    {todo.openUpdate ? <button onClick={() => openUpdateWindow(todo.id)}>update</button> :
                        <div>
                            <input autoFocus={true} value={updateTodo} onChange={event => setUpdateTodo(event.target.value)}/>
                            <button onClick={() => saveUpdate(todo.id, updateTodo)}>save update</button>
                            <button onClick={() => openUpdateWindow(todo.id)}>cancel</button>
                        </div>
                    }
                </div>
            )}
        </div>
    );
}

export default Todo;

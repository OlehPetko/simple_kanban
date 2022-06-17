import '../App.css';
import {connect} from "react-redux";
import {useState, useEffect} from "react";
import {getTodos} from "../redux/action";


function Todo_with_server(props) {

    const {todos} = props
    const [newTodo, setNewTodo] = useState('')
    const [updateTodo, setUpdateTodo] = useState('')

    const addHandlerTodo = () => {
        props.addTodo(newTodo)
        setNewTodo('')
    }
    const updateHandlerTodo = (todoId) => {
        props.updateAddTodo(todoId, updateTodo)
        setUpdateTodo('')
    }
    const openUpdateHandlerTodo = (todoId) => {
      props.openUpdateTodo(todoId)
        setUpdateTodo('')
    }
    const moveHandlerTodo = (currentTodo, nextTodo) => {
      props.moveTodo(currentTodo, nextTodo)
    }
    useEffect(() => {

        props.getList()
    }, [])

    return (
        <div className="App">
            <input autoFocus={true} value={newTodo} onChange={event => setNewTodo(event.target.value)}/>
            <button onClick={addHandlerTodo}>add to do</button>
            {todos.map((todo, i) =>
                <div key={todo.id}>
                    <input type="checkbox" onClick={() => props.mark(todo.id)}/>
                    <button disabled={i === 0} onClick={() => moveHandlerTodo(i, i - 1)}>up</button>
                    <h3 style={todo.markTodo ? {textDecoration: "line-through"} : null}>
                        {todo.name}
                    </h3>
                    <button disabled={i === todos.length - 1} onClick={() => moveHandlerTodo(i, i + 1)}>down</button>
                    {todo.openTodo ? <button onClick={() => props.openDeleteTodo(todo.id)}>delete</button> :
                        <div>
                            <button onClick={() => props.deleteTodo(todo.id)}>yes delete</button>
                            <button onClick={() => props.openDeleteTodo(todo.id)}>cancel</button>
                        </div>}
                    {todo.openUpdate ? <button onClick={() => props.openUpdateTodo(todo.id)}>update</button> :
                        <div>
                            <input autoFocus={true} value={updateTodo} onChange={event => setUpdateTodo(event.target.value)}/>
                            <button onClick={() => updateHandlerTodo(todo.id)}>save update</button>
                            <button onClick={() => openUpdateHandlerTodo(todo.id)}>cancel</button>
                        </div>}
                </div>
            )}
        </div>
    );
}
const mapStateToProps = (state) => ({
    todos: state.todos
})
const mapDispatchToProps = (dispatch) => ({
    mark: (todoId) => dispatch({type: 'MARK_TODO', payload: todoId}),
    addTodo: (newTodo) => dispatch({type: 'ADD_TODO', payload: newTodo}),
    updateAddTodo: (todoId, updateTodo) => dispatch({type: 'UPDATE_TODO', payload: {todoId, updateTodo}}),
    openUpdateTodo: (todoId) => dispatch({type: 'OPEN_UPDATE_TODO', payload: todoId}),
    openDeleteTodo: (todoId) => dispatch({type: 'OPEN_DELETE_TODO', payload: todoId}),
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    moveTodo: (currentTodo, nextTodo) => dispatch({type: 'MOVE_TODO', payload: {currentTodo, nextTodo}}),
    getList: () => dispatch(getTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo_with_server);

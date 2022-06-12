import '../App.css';
import {connect} from "react-redux";
import {useState} from "react";

function Todo_with_redux(props) {

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


    return (
        <div className="App">
            <input autoFocus={true} value={newTodo} onChange={event => setNewTodo(event.target.value)}/>
            <button onClick={addHandlerTodo}>add to do</button>
            {todos.map(todo =>
                <div key={todo.id}>
                    <input type="checkbox" onClick={() => props.mark(todo.id)}/>
                    <button>down</button>
                    <h3 style={todo.markTodo ? {textDecoration: "line-through"} : null}>
                        {todo.name}
                    </h3>
                    <button>up</button>
                    {todo.openTodo ? <button>delete</button> :
                        <div>
                            <button>yes delete</button>
                            <button>cancel</button>
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
    openUpdateTodo: (todoId) => dispatch({type: 'OPEN_UPDATE_TODO', payload: todoId})
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo_with_redux);

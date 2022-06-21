import '../App.css';
import {connect} from "react-redux";
import {useState, useEffect} from "react";
import {addTodo, delTodo, getTodos} from "../redux/action";


function Todo_with_server(props) {

    const {todos} = props
    const [newTodo, setNewTodo] = useState('')
    const [updateTodo, setUpdateTodo] = useState('')
    const addHandlerTodo = () => {
        props.addTodo(newTodo)
        setNewTodo('')
    }
    useEffect(() => {
        props.getList()
    }, [])

    return (
        <div className="App">
            <input autoFocus={true} value={newTodo} onChange={event => setNewTodo(event.target.value)}/>
            <button onClick={addHandlerTodo}>add to do</button>
            {todos.map((todo, i) =>
                <div key={todo._id}>
                    <input type="checkbox" onClick={() => props.mark(todo.id)}/>
                    <h3 style={todo.markTodo ? {textDecoration: "line-through"} : null}>
                        {todo.name}
                    </h3>
                    <button onClick={() => props.delTodo(todo._id)}>yes delete</button>

                    <input autoFocus={true} value={updateTodo}
                           onChange={event => setUpdateTodo(event.target.value)}/>
                    <button>save update</button>
                    <button>cancel</button>
        </div>
    )
}

</div>
)
;
}

const mapStateToProps = (state) => ({
    todos: state.todos
})
const mapDispatchToProps = (dispatch) => ({
    getList: () => dispatch(getTodos()),
    addTodo: (newTodo) => dispatch(addTodo(newTodo)),
    delTodo: (_id) => dispatch(delTodo(_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo_with_server);

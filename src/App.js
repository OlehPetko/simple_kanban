import './App.css';
import Counter from "./Counter/Counter";
import Todo from "./Todo/Todo";
import Kanban from "./Kanban/Kanban";
import {useState} from "react";
import Counter_with_redux from "./Counter_with_redux/Counter_with_redux";
import Todo_with_redux from "./Todo_with_redux/Todo_with_redux";
import Kanban_with_redux from "./Kanban_with_redux/Kanban_with_redux";
import Counter_with_server from "./Counter_with_server/Counter_with_server";
import Kanban_with_server from "./Kanban_with_server/Kanban_with_server";
import Todo_with_server from "./Todo_with_server/Todo_with_server";

function App() {

    const [apps, setApps] = useState('')


    return (
        <div className="App">
            <button onClick={() => setApps('Counter')}>Counter</button>
            <button onClick={() => setApps('To do')}>To do</button>
            <button onClick={() => setApps('Kanban')}>Kanban</button>
            {apps === 'Counter' && <Counter/>}
            {apps === 'To do' && <Todo/>}
            {apps === 'Kanban' && <Kanban/>}
            <hr/>
            <button onClick={() => setApps('Counter_with_redux')}>Counter_with_redux</button>
            <button onClick={() => setApps('Todo_with_redux')}>To do_with_redux</button>
            <button onClick={() => setApps('Kanban_with_redux')}>Kanban_with_redux</button>
            {apps === 'Counter_with_redux' && <Counter_with_redux /> }
            {apps === 'Todo_with_redux' && <Todo_with_redux />}
            {apps === 'Kanban_with_redux' && <Kanban_with_redux />}
            <hr/>
            <button onClick={() => setApps('Counter_with_server')}>Counter_with_server</button>
            <button onClick={() => setApps('Todo_with_server')}>To do_with_server</button>
            <button onClick={() => setApps('Kanban_with_server')}>Kanban_with_server</button>
            {apps === 'Counter_with_server' && <Counter_with_server /> }
            {apps === 'Todo_with_server' && <Todo_with_server />}
            {apps === 'Kanban_with_server' && <Kanban_with_server />}

        </div>
    );
}

export default App;

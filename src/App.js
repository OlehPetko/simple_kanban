import './App.css';
import Counter from "./Counter";
import Todo from "./Todo";
import Kanban from "./Kanban";
import {useState} from "react";

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
        </div>
    );
}

export default App;

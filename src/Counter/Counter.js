import '../App.css';
import {useState} from "react";


function Counter() {
    const [count, setCount] = useState(0)
    const plusAndMinus = (value) => {
        setCount(count + value)
    }
    return (
        <div className="App">
            <button onClick={() => plusAndMinus(-1)}>-</button>
            {count}
            <button onClick={() => plusAndMinus(+1)}>+</button>


        </div>
    );
}

export default Counter;

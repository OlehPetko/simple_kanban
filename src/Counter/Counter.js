import '../App.css';
import {useState} from "react";


function Counter() {
    const initialState = [
        {id: Math.random(), counter: 1, buttons: [1]},
        {id: Math.random(), counter: 2, buttons: [1, 2]},
        {id: Math.random(), counter: 3, buttons: [1, 2, 3]},
        {id: Math.random(), counter: 4, buttons: [1, 2, 3, 4]},
        {id: Math.random(), counter: 5, buttons: [1, 2, 3, 4, 5]},
    ]
    const [count, setCount] = useState(0)
    const [counters, setCounters] = useState(initialState)
    const plusAndMinus = (value) => {
        setCount(count + value)
    }
    const plusMinus = (id, value) => {
      const newCounter = counters.map(el => el.id === id ? {...el, counter: el.counter + value} : el)
        setCounters(newCounter)
    }
    return (
        <div className="App">
            <button onClick={() => plusAndMinus(-1)}>-</button>
            {count}
            <button onClick={() => plusAndMinus(+1)}>+</button>
            <hr/>
            <button>add counter</button>
            {counters.map(counter =>
            <div key={counter.id}>
                {counter.buttons.map(button => <button key={button} onClick={() => plusMinus(counter.id,  - button)}>-{button}</button>)}
                {counter.counter}
                {counter.buttons.map(button => <button key={button} onClick={() => plusMinus(counter.id, button)}>{button}</button>)}
            </div>
            )}

        </div>
    );
}

export default Counter;

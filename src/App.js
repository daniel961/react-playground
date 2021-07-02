import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <p>counter is: {counter}</p>
            <button onClick={() => { setCounter(counter + 1) }}>+1</button>
            <button onClick={() => { setCounter(0) }}>reset</button>
            <button onClick={() => { setCounter(counter - 1) }}>-1</button>
        </div>
    );
}

export default App;

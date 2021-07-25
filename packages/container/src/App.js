import React, { useState } from 'react';
import MarketingApp from './components/MarketingApp';


export default () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((count) => {
            const newCount = count + 1;
            return newCount;
        })
    }
    const decrement = () => {
        setCount((count) => {
            const newCount = count - 1;
            return newCount;
        })
    }
    return (<>
        <div>
            <h1>{`Header title Juan`}</h1>
            <hr />

            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <p>{count}</p>
            </div>
            <hr />
            <MarketingApp />
        </div></>)
};
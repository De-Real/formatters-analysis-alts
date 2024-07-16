import React, {useState, useEffect, useCallback, memo} from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
    username: string
}

const ReactCheckAnalysis: React.FC<Props> = (props) => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('Hello');

    // Unused variable
    const unusedVariable = 'I am not used anywhere';

    // Incorrect hook dependencies
    const updateMessage = useCallback(() => {
        setMessage('Hello, ' + props.username);
    }, []); // Missing props.username dependency

    useEffect(() => {
        console.log('Count updated:', count);
        // Missing dependency on count
    }, []); // Should include [count]

    // Using index as a key in a list
    const items = ['Apple', 'Banana', 'Cherry'];

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>{message}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li> // Using index as key
                    ))}
                </ul>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}



export default memo(ReactCheckAnalysis);

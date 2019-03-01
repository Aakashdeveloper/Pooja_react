import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';

const App = () => {
    return(
        <div>
            
            <Home/>
            <h1> ReactApp</h1>
            <h2> New App </h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))
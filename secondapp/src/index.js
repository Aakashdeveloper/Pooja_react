import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './component/App';
import Posts from './component/Posts';
import Profile from './component/Profile';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/posts">Post</Link>
                <Link to="/profile">Profile</Link>
            </header>
            <Route exact path="/" component={Home}></Route>
            <Route path="/posts" component={Posts}></Route>
            <Route path="/profile" component={Profile}></Route>
        </div>
    </BrowserRouter>
    ,document.getElementById('root'));

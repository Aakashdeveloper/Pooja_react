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
            <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                        </button>
                        <a class="navbar-brand" >WebSiteName</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Post</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                      
                        </div>
                    </div>
            </nav>
            </header>
            <Route exact path="/" component={Home}></Route>
            <Route path="/posts" component={Posts}></Route>
            <Route path="/profile" component={Profile}></Route>
        </div>
    </BrowserRouter>
    ,document.getElementById('root'));

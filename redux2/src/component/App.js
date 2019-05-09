import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../container/Home';
import News from '../container/News'
import GalleryDetails from '../container/GalleryDetails';

import Header from './Header';
import Footer from './Footer'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/news/:id" component={News}/>
                    <Route path="/galleries/:id" component={GalleryDetails}/>
                    <Route exact path="/" component={Home}/>
                    <Footer/>
                </div>
            </BrowserRouter>
            
        )
    }
}

export default App;
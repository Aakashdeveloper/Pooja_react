import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// Components
import Home from './components/Home';
import Artists from './components/Artists';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/artists/:artistid" component={Artists}/>
            </div>
        </BrowserRouter>
    )
}


export default Routing;
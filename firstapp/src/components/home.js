import React,{Component} from 'react';

import Header from './header';

// Class Base
class Home extends Component{
    constructor(){
        super()

        
    }
    render(){
        return(
            <div>
                <Header/>
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default Home;


/*
// Functional
const Home = () => {
    return (
        <div>
            <Header/>
            <h1>Home Page</h1>
        </div>
    )
}
*/
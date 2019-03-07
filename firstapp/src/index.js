import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/newList';

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            data:JSON,
            filtered: JSON
        }
    }
    filterNews(keywords){
        let output = this.state.data.filter((item)=>{
            return (item.title.indexOf(keywords) > -1 || item.feed.indexOf(keywords) > -1 )
        })

        this.setState({filtered:output})
    }
    render(){
        return(
            <div>
                <Header newsSearch={(inputtext)=>{this.filterNews(inputtext)}}/>
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }
    
}

ReactDOM.render(<App/>,document.querySelector('#root'))
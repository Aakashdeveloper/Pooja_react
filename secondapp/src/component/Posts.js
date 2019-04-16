import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import JSON from '../db.json';

class Posts extends Component {
    constructor(props){
        super(props);

        this.state={
            data:JSON
        }
    }
    

    render(){
        
        const items = this.state.data.map((output) => {
        return(
                    <Link to={`/posts/${output.id}`}><h3>{output.title}</h3></Link>
        )
    })
        return(
            <div class="panel panel-danger">
                <div className="panel-heading">Posts Page</div>
                <div class="panel-body">
                    Posts Page COntent
                    {items}
                </div>

            </div>
        )
    }
}

export default Posts;
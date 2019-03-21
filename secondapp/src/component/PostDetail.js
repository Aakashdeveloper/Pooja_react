import React, {Component} from 'react';

class PostDetail extends Component {
    render(){
        console.log(this.props);
        return(
            <div class="panel panel-info">
            <div className="panel-heading">Posts Details</div>
            <div class="panel-body">
                Posts Detail COntent for id {this.props.match.params.id}
            </div>

        </div> 
        )
    }
}

export default PostDetail;
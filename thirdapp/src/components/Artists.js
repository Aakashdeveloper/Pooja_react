import React, {Component} from 'react';
import Header from './Header'
const Detail_url =  "http://localhost:7800/artists";

class Artists extends Component {
    constructor(props){
        super(props);

        this.state={
            artist:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.artistid);
        fetch(`${Detail_url}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                artist:data
            })
        })
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/assets/images/covers/${this.state.artist.cover}.jpg')
                            no-repeat`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artists
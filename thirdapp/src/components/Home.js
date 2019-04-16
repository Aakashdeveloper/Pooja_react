import React, {Component} from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';

const URL_ARTISTS = "http://localhost:7800/artists";


class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTISTS,{
            method:'GET'
        })
        .then(response =>  response.json()) 
        .then(data => {
            this.setState({
                artists:data
            })
        })
    }

    render(){
        console.log("render part");
        return(
           <div>
               <Banner/>
               <ArtistList artistlist = {this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home
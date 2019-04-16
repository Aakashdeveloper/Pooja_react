import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
    console.log('in artists list', props)

    const listdata = ({artistlist}) => {
        if(artistlist){
            return artistlist.map((data) => {
                const styles = {
                    background:`url('/assets/images/covers/${data.cover}.jpg')
                    no-repeat`
                }
                return(
                    <Link key={data.id} to={`/artists/${data.id}`}
                        className="artist_item"
                        style={styles}>
                        <div>{data.name}</div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <center>
                <h3>Browse the artists</h3>
            </center>
            {listdata(props)}
        </div>
    )
}

export default ArtistList;
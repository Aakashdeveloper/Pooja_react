import React from 'react';
import { Link } from 'react-router-dom';

const showLatest = ({latestNews}) => {
    if(latestNews){
        return latestNews.map((data) => {
            return(
                <Link to="/" className="item">
                    <div className="image_cover"
                    style={{background:`url(/images/articles/${data.img})`}}>
                        <div className="description">
                            <span>{data.category}</span>
                            <div>{data.title}</div>
                        </div>
                    </div>
                </Link>
            )
        })
    }
}

const LatestNews = (props) => {
    return(
        <div className="home-latest">
            {showLatest(props)}
        </div>
    )
}

export default LatestNews;
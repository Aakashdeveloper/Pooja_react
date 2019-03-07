import React, {Component} from 'react';

const NewsList = (props) => {
    const items = props.news.map((output) => {
        return(
            <div>
                <h2>{output.title}</h2>
                <h4>{output.feed}</h4>
            </div>
        )
    })

    return(
       <div>{items}</div>
    )
}

export default NewsList;



/*
const NewsList = (props) => {
    console.log("props from new"+ props.myList);
    return(
        <div>
            <h2>
                User input data in news {props.myList}
            </h2>
        </div>
    )
}


function add(a,b){
    sum = a+b
}
*/
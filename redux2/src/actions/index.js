const URL = 'http://localhost:7800';

export function latestNews(){
    const output = fetch(`${URL}/articles?_end=3`, {method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_LATEST',
        payload: output
    }
}

export function otherNews(){
    const output = fetch(`${URL}/articles?_start=3&_end=10`, {method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_OTHER',
        payload: output
    }
}

export function latestGAllery(){
    const output = fetch(`${URL}/galleries?_limit=2`, {method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_LATEST_GALLERY',
        payload: output
    }
}


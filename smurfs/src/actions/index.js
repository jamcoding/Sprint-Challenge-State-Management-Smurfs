import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';
export const POST_SMURF_DATA = 'POST_SMURF_DATA';

export const smurfData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    })
    setTimeout(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                console.log('response: ', response.data)
                dispatch({ type: DATA_SUCCESS, payload: response.data });
            })  
            .catch(error => {
                console.log('data error: ', error)
                dispatch({ type: DATA_ERROR, payload: error });
            });
    }, 1500)
};

export const postSmurfData = value => dispatch => {
    dispatch({
        type: POST_SMURF_DATA, payload: value
    });
    axios
        .post('http://localhost:3333/smurfs', value)
        .then(postResponse => {
            console.log('postResponse: actions: index.js: ', postResponse);
        })
        .catch(postError => {
            console.log('postError: ', postError);
        })
}
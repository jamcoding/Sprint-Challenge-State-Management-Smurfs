import { FETCH_DATA, DATA_ERROR, DATA_SUCCESS } from '../actions/index';

const initialState = {
    smurf: [],
    isLoading: false,
    error: ''
};

export const rootReducer = (state = initialState, action) => {
    console.log('state: ', state);
    console.log('action: ', action);
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isLoading: true
            }
        case DATA_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false,
                error: '',
            }
        case DATA_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};
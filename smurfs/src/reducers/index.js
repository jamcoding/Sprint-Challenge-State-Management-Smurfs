const initialState = {};

export const rootReducer = (state = initialState, action) => {
    console.log('state: ', state);
    console.log('action: ', action);
    switch (action.type) {
        default:
            return state;
    }
};
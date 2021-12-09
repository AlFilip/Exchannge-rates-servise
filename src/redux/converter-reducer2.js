const SEND_VALUE = 'SEND_VALUE';

export const sendValueSuccess = value => ({type: SEND_VALUE, value})
export const sendValue = value => dispatch => {
    const arr = value.toUpperCase().split(' ');
    if (arr.length === 4 && +arr[0] && (arr[2] === 'IN' || arr[2] === 'TO' || arr[2] === 'AT'))
        dispatch(sendValueSuccess(arr));
}


const initState = {
    from: null,
    to: null,
    rate: null
};

const converterReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_VALUE:
            return {
                ...state,
                value: [...action.value]
            }
        default:
            return state
    }
}

export default converterReducer;


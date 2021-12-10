import {ConverterApi} from '../components/api/api';

const SET_RESULT = 'SET_RESULT';
const pretextValues = ['IN', 'TO', 'AT']

const initState = {
    result: ''
};

const converterReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export const setResult = payload => ({type: SET_RESULT, payload})

export const processValue = value => (dispatch, getState) => {
    const [count, from, pretext, to] = value.toUpperCase().split(' ');
    if (+count && pretextValues.includes(pretext)) {
        const currentCurrencies = getState().app.currencyList.filter(cur => [from, to].includes(cur.symbol))
        if (currentCurrencies.length === 2) {
            ConverterApi.getCourse(from, to).then(course => {
                dispatch(setResult({result: `${count} ${from} = ${(+(course * count).toFixed(2))} ${to}`}))
            })
        }
    }
}


export default converterReducer;












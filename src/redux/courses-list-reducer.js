const SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY';
const SET_CURRENCY_LIST = 'SET_CURRENCY_LIST';

export const setCurrentCurrency = currency => ({type: SET_CURRENT_CURRENCY, currency});
export const setCurrencyList = currencyList => ({type: SET_CURRENCY_LIST, currencyList});


const initState = {currentCurrency: 'RUB', currencyList: {}};

const coursesListReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_CURRENCY:
            return {
                ...state,
                currentCurrency: action.currency
            }
        case SET_CURRENCY_LIST:
            return {
                ...state,
                currencyList: action.currencyList
            }
        default:
            return state
    }
}

export default coursesListReducer;
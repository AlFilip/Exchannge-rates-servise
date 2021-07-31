import {initApp} from "../components/api/api";

const GET_LIST = 'GET_LIST';
const GET_ALL_COURSES = 'GET_ALL_COURSES';

export const getCurrencyListComplete = currencyList => ({type: GET_LIST, currencyList})
export const getAllCoursesComplete = courses => ({type: GET_ALL_COURSES, courses})

export const getCurrencyList = () => dispatch => {
    initApp.getList().then(data => {
        if (data.status === 200) {
            dispatch(getCurrencyListComplete(data.data))
        }
    })
    initApp.getAllCourses().then(data => {
        if (data.status === 200) {
            dispatch(getAllCoursesComplete(data.data.merchant));
        }
    })
}

const initState = {
    currencyList: [],
    courses: {},
    isInitialised: false
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                currencyList: action.currencyList,
                isInitialised: true
            }
        case GET_ALL_COURSES:
            return {
                ...state,
                courses: action.courses
            }
        default:
            return state
    }
}

export default appReducer;


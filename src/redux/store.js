import {combineReducers, createStore, applyMiddleware } from "redux";
import converterReducer from "./converter-reducer";
import thunk from 'redux-thunk';
import appReducer from "./app-reducer";
import coursesListReducer from "./courses-list-reducer";

let reducers = combineReducers({
    converter: converterReducer,
    app: appReducer,
    courses: coursesListReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;


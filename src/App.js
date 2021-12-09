import React, {useEffect} from "react";
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import Converter from "./components/Converter/Converter";
import {useDispatch, useSelector} from "react-redux";
import {getCurrencyList} from "./redux/app-reducer";

const App = () => {
    const isInitialised = useSelector(state => state.app.isInitialised)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!isInitialised) {
            dispatch(getCurrencyList())
        }
    })

    if (!isInitialised) return null;
    return (
        <>
            <NavBar/>
            <div className="contentWrapper">
                <Converter/>
                {/*<CoursesList/>*/}
            </div>
        </>
    );
}

export default App

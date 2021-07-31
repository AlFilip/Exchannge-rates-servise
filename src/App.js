import React, {useEffect} from "react";

import './App.css';
import NavBar from "./components/Navbar/Navbar";
import Converter from "./components/Converter/Converter";
import {connect} from "react-redux";
import {getCurrencyList} from "./redux/app-reducer";

const App = props => {
    useEffect(() => {
        if (!props.isInitialised) props.getCurrencyList();
    })

    if (!props.isInitialised) return null;
    return (
        <>
            <NavBar/>
            <div className="contentWrapper">
                <Converter/>
                <Table/>
            </div>
        </>
    );
}
const mapStateToProps = state => ({isInitialised: state.app.isInitialised})

export default connect(mapStateToProps, {getCurrencyList})(App);

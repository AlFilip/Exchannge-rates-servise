import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setCurrencyList, setCurrentCurrency} from "../../redux/courses-list-reducer";


const CoursesList = props => {
    useEffect(() => {
        const currentCurrency = props.currentCurrency
        const displayObj = {};
        for (let key in props.courses) {
            if (key !== props.currentCurrency) {
                displayObj[key] = props.courses[key][currentCurrency];
            }
        }
        props.setCurrencyList(displayObj);
    }, [props.currentCurrency, props.courses])

    return <>
        <div>
            {props.currentCurrency}
            <ul>
                {Object.keys(props.currencyList).map((oneKey, i) => {
                    return (
                        <li key={i+ oneKey}>{oneKey} {props.currencyList[oneKey]}</li>
                    )
                })}
            </ul>
        </div>
    </>
}

const mapStateToProps = state => ({
    courses: state.app.courses,
    currentCurrency: state.courses.currentCurrency,
    currencyList: state.courses.currencyList,
})

export default connect(mapStateToProps, {setCurrentCurrency, setCurrencyList})(CoursesList);
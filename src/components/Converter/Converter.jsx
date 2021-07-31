import React, {useEffect, useState} from "react";

import s from './Converter.module.css'
import {connect} from "react-redux";
import {sendValue} from "../../redux/converter-reducer";
import {ConverterApi} from "../api/api";

const Converter = props => {
    const [formValue, setFormValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        let foundedCurrencies = [];
        props.currencyList.forEach(currency => {
            if (currency.symbol === props.value[1]
                || currency.symbol === props.value[3]) {
                foundedCurrencies.push(currency);
            }
        })
        if (foundedCurrencies.length === 2) {
            ConverterApi.getCourse([props.value[1], props.value[3]]).then(data => {
                setResult(`${props.value[0]} ${props.value[1]} = 
                ${(+(data.data * props.value[0]).toFixed(2))} ${props.value[3]}`);
            })
        }
    }, [props])

    const onFormChange = e => setFormValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        props.sendValue(formValue);
    }

    return (
        <>
            <form className={s.converterContent}>
                <input type="text" placeholder={'Enter here'} value={formValue} onChange={onFormChange}/>
                <button onClick={onSubmit}>Submit</button>
            </form>
            {result}
        </>
    )
}

const mapStateToProps = state => {
    return {
        currencyList: state.app.currencyList,
        value: state.converter.value
    }
}

export default connect(mapStateToProps, {sendValue})(Converter);
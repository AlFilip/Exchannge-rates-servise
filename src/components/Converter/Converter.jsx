import React, {useEffect, useState} from "react";
import s from './Converter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {sendValue} from "../../redux/converter-reducer";
import {ConverterApi} from "../api/api";


const Converter = () => {
    const currencyList = useSelector(state => state.app.currencyList)
    const value = useSelector(state => state.converter.value)
    const dispatch = useDispatch()


    const [formValue, setFormValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        const foundedCurrencies = currencyList.filter(cur => cur.symbol === value[1] || cur.symbol === value[3])

        console.log(value)
        if (foundedCurrencies.length === 2) {
            console.log(value)
            ConverterApi.getCourse([value[1], value[3]]).then(data => {
                setResult(`${value[0]} ${value[1]} = 
                ${(+(data.data * value[0]).toFixed(2))} ${value[3]}`);
            })
        }
    }, [currencyList, value])

    const onFormChange = e => setFormValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        dispatch(sendValue(formValue))
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


export default Converter
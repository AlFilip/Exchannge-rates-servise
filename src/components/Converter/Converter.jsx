import React, {useState} from "react";
import s from './Converter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {processValue} from "../../redux/converter-reducer";


const Converter = () => {
    const dispatch = useDispatch()
    const result = useSelector(state => state.converter.result)

    const [formValue, setFormValue] = useState('');


    const onFormChange = e => setFormValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        dispatch(processValue(formValue))
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
import React, { useState, useEffect } from 'react';
import '../../style/Input.css';

const Input = ({ title, style, id, styleWrap }) => {
    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
        const label = document.querySelector(`#${id}`);
        if (label) {
            if (inputValue !== '') {
                label.classList.add('entered');
            } else {
                label.classList.remove('entered');
            }
        }
    }, [inputValue, title]);


    return (
        <div className={'input__wrapper'}>
            <input type="text" style={style} className={'input'} value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <label id={id} className={'label'}>
                {title}
            </label>
        </div>
    );
};

export default Input;

import React, { useState } from 'react';

import './styles.css';

function Calc() {

    const [ values, setValues ] = useState("")

    const valueHandler = (element) => {
        setValues(values + element.target.name)
    }

    const operatorHandler = (element) => {
        setValues(eval(values))
    }

    return (
        <div className=" calc-buttons">
            <input className="calc-visor" value={values} disabled="disabled"></input>
            <button name="1" onClick={valueHandler}>1</button>
            <button name="2" onClick={valueHandler}>2</button>
            <button name="3" onClick={valueHandler}>3</button>
            <button name="+" onClick={valueHandler}>+</button>
            <button name="4" onClick={valueHandler}>4</button>
            <button name="5" onClick={valueHandler}>5</button>
            <button name="6" onClick={valueHandler}>6</button>
            <button name="7" onClick={valueHandler}>7</button>
            <button name="8" onClick={valueHandler}>8</button>
            <button name="9" onClick={valueHandler}>9</button>
            <button name="0" onClick={valueHandler}>0</button>
            <button name="=" onClick={operatorHandler}>=</button>
        </div>
    );
}

export default Calc;
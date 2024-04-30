import React from "react";

function Input(props){
    return <div className={props.name}>
        <input type='text' className="form-input" placeholder={props.placeholder} name={props.name}></input>
        <p className="Error">{props.error}</p>
    </div>
}

export default Input;
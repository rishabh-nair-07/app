import React from "react";

function Input(props){
    return <div>
        <input type='text' className="form-input" placeholder={props.placeholder} name={props.name}></input>
    </div>
}

export default Input;
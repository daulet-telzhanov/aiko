import React from 'react';
import "./component.css";

type BoxInputProps = {

}&React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const BoxInput = React.forwardRef(({className, ...inputProps}:BoxInputProps, ref:any) => {
    let classText = "box_input";
    if (className) classText += ` ${className}`;

    return <input type="text" {...inputProps} className={classText} ref={ref}/>
})

export default BoxInput;

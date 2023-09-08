import { useState } from "react";
import "./FormInput.css"

const FormInput = (props: any) => {
    const {label, onChange, inputProps, errorMessage, required, pattern } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true)
    }

    return (
        <div className="formInput">
            <label>{label}</label>
            <input 
                {...inputProps}
                onChange={onChange}
                required={required}
                pattern={pattern}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )

}

export default FormInput;
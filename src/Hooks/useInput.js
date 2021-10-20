import { useState } from "react";

const useInput = (initialValue, type, placeholder, className, styles = {}) => {
    const [value, setValue] = useState(initialValue);

    const reset = () => setValue(null);

    const bindInput = {
        placeholder,
        type,
        className: className,
        name: type,
        style: styles,
    }

    const bindHookForm = {
        defaultValue: value,
        name: type,
    }

    return {bindInput, reset, bindHookForm}
};

export default useInput;
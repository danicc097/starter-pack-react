import { useState } from "react";

const useInput = (initialValue, type, placeholder, className) => {
    const [value, setValue] = useState(initialValue);

    const reset = () => setValue(null);

    const bind = {
        value,
        placeholder,
        type,
        className: className,
        name: type,
        onChange: e => setValue(e.target.value)
    }

    return {bind, reset}
};

export default useInput;
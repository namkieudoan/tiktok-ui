import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDeBouncedValue] = useState(value);
    
    useEffect(()=> {
        const handler = setTimeout(()=> setDeBouncedValue(value), delay)
        
        return ()=> clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debouncedValue;
}

export default useDebounce;

import { useEffect, useState } from 'react'

function useDebounce(value, delay) {
    const [debouncedVal, setDebounceVal] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceVal(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedVal
}

export default useDebounce
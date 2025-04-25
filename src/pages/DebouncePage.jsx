import React, { useState } from 'react'

function DebouncePage() {
    const [value, setValue] = useState('')
    const [debounceValue, setDebounceValue] = useState('')
  
    React.useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebounceValue(value);
      }, 500);
      return () => clearTimeout(timeoutId);
    }, [value]);

    const handleChange = (e) => {
        const inputValue = e.target.value
        setValue(inputValue)
    }

    console.log(debounceValue)

    return (
    <input value={value} onChange={handleChange} />
  )
}

export default DebouncePage
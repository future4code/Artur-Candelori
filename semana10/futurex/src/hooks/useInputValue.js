import { useState } from 'react';

export const useInputValue = () => {
    const [value, setValue] = useState("")

    const onChangeValue = event => {
        setValue(event.target.value)
    }

    return [value, onChangeValue, setValue]
}
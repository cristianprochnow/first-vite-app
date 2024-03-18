import { useState } from 'react'
import './index.css'

/**
 * @param {{ skipOdds?: boolean }} props 
 */
export function Counter(props) {
    const [counter, setCounter] = useState(0)

    function onHandlerAddButton() {
        if (props.skipOdds) {
            return setCounter(counter + 2)
        }

        setCounter(counter + 1)
    }

    return (
        <button className="counter" onClick={onHandlerAddButton}>
            {counter}
        </button>
    )
}
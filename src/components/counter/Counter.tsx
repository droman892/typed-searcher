import './Counter.scss'
import '../../styles/_index.scss'
import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 className="button-notifier">Below is the counter:</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Count: {count}
            </button>
        </div>
    )
}

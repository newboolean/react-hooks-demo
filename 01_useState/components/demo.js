import { useState } from "react"
export default function Demo() {
    const [count, setCount] = useState(0)
    function add() {
        setCount((count) => count + 1)
    }
    return (
        <div>
            <h1>计数器:{count}</h1>
            <button onClick={() => add()}>点击加一</button>
        </div>
    )
}
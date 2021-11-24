import { useState,useEffect } from "react"
/* 
    Effect Hook 可以让你在函数组件中执行副作用操作
    数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。
    不管你知不知道这些操作，或是“副作用”这个名字，应该都在组件中使用过它们。
*/
export default function Demo() {
    const [count, setCount] = useState(0)
    function add() {
        setCount((count) => count + 1)
    }
    useEffect(()=> {
        document.title = `将title设置为${count}的值`
    },[count])
    return (
        <div>
            <h1>计数器:{count}</h1>
            <button onClick={() => add()}>点击加一</button>
        </div>
    )
}
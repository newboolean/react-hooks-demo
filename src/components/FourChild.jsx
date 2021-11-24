import { useContext } from "react"
import { ThemeContext } from './Demo'
export default function FourChild() {
    const theme = useContext(ThemeContext)
    return <div>
        <button style={{ background: theme.background, color: theme.color }}>
            我的从demo组件继承过来的
        </button>
    </div>
}
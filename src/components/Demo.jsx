import { createContext } from "react"
import OneChild from "./OneChild";
const themes = {
    light: {
        color: "#000000",
        background: "#eeeeee"
    },
    dark: {
        color: "#ffffff",
        background: "#222222"
    }
}
export const ThemeContext = createContext(themes.light);
export default function Demo() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <OneChild />
        </ThemeContext.Provider>
    )
}
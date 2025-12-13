import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";


const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        } else {setTheme('light')}

    }


    document.body.className = theme;
    
    return (
        <button onClick={toggleTheme}>Current theme is: {theme}</button>
    )
}

export default ThemeSwitcher;
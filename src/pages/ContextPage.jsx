import React from 'react'
import { createContext } from 'react'
import ThemePage from '../components/ThemeComponent';

export const ThemeContext = createContext('light');

function ContextPage() {
    const [theme, setTheme] = React.useState('light')

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{theme, handleChangeTheme}}>
            <ThemePage />
        </ThemeContext.Provider>
    )
}

export default ContextPage
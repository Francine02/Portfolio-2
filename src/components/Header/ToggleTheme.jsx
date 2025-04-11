import { useState, useEffect } from "react";
import dark from '../../assets/dark.png';
import light from '../../assets/light.png';

export function ToggleTheme() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true'
    })

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode
            localStorage.setItem('darkMode', newMode.toString())
            return newMode
        })
    }

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    return (
        <button
            onClick={toggleDarkMode}
            className="mr-7 lg:mr-8 hover:opacity-70 ">
            <img src={isDarkMode ? light : dark}
                alt="dark/light mode"
                className="w-6 md:w-7" />
        </button>
    )
}
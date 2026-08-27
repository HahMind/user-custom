import React, { useEffect, useState } from 'react'

const ToggleThemeButton = ({ toggleTheme, theme}) => {
    const [displayTheme, setDisplayTheme] = useState(theme);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayTheme(theme);
        },200);
        return () => clearTimeout(timer);
    }, [theme]);

  return (
    <div className='w-full'>
        <button
            onClick={toggleTheme}
            className="w-full px-4 py-3 text-l bg-gray-600 rounded-full text-yellow-500 font-bold dark:text-orange-50  transition-all duration-1000 ease-in-out">
            {displayTheme === "light" ? `${displayTheme} mode: 🌙` : `${displayTheme} mode: ☀`}
          </button>
    </div>
  )
}

export default ToggleThemeButton
import { useEffect, useState } from "react";
import { AiFillBulb } from "react-icons/ai";


export function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.theme)
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme)
    root.classList.add(theme);
    localStorage.setItem('theme', theme)
    console.log(root)
    console.log(theme)
  }, [theme, colorTheme])

  return (
    <button className="text-2xl text-orange-300 dark:text-white ease-in-out transition duration-300" onClick={() => setTheme(colorTheme)}>
      <AiFillBulb />
    </button >
  )
}
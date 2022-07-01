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
    <button className="text-2xl fixed right-3  bottom-16   p-1 text-orange-300 hover:text-black transition duration-300 dark:text-white ease-in-out  dark:hover:text-orange-300" onClick={() => setTheme(colorTheme)}>
      <AiFillBulb />
    </button >
  )
}
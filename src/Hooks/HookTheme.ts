import { useEffect, useState } from "react";

export function useDarkMode() {
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

  return [colorTheme, setTheme]
}
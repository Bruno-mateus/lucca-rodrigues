import { AiFillBulb } from "react-icons/ai";
import { useDarkMode } from '../Hooks/HookTheme'
export function ToggleTheme() {
  const [colorTheme, setTheme] = useDarkMode()
  return (
    <button className="text-2xl text-orange-300 dark:text-white ease-in-out transition duration-300" onClick={() => setTheme(colorTheme)}>
      <AiFillBulb />
    </button >
  )
}
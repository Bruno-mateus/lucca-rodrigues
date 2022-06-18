import { Link } from "react-router-dom";
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export function Header() {

  const [toggle, setToggle] = useState(true)



  return (
    <>
      <header className=" flex fixed flex-col bg-slate-800 text-white p-4 justify-center z-10  w-full ">
        <div className="logo  d-inline"><h1 className="text-2xl font-bold ">Lucca Rodrigues</h1>
        </div>
        <div className="menu-mobile absolute inline  top-6 right-4">
          <AiOutlineMenu onClick={() => setToggle(false)} className={toggle ? "show" : "hidden"} />
          <AiOutlineClose onClick={() => setToggle(true)} className={toggle ? "hidden" : "show"} />
        </div>
        <nav className={` nav flex relative  align-center   w-full h-screen justify-center  ${toggle ? "hidden" : "show"}`}  >
          <ul className=" flex absolute   bg-slate-800 flex-col gap-10 align-center w-full h-full top-20 ">
            <li className="text-center  inline text-2xl cursor-pointer hover:brightness-75 transition-all	">
              <Link onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
                setToggle(true);
              }} className={toggle ? "hidden" : "show"} to="/" >Le Corbusier</Link>
            </li>
            <li className="text-center inline text-2xl  cursor-pointer hover:brightness-75 transition-all ">
              <Link onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
                setToggle(true);
              }} className={toggle ? "hidden" : "show"} to="/henry-hobson-richardson" >Henry Hobson Richardson </Link>
            </li>
            <li className="text-center inline text-2xl  cursor-pointer hover:brightness-75 transition-all">
              <Link onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
                setToggle(true);
              }} className={toggle ? "hidden" : "show"} to="/eduardo-reidy" >Eduardo Reidy </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
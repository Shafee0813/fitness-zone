import { useState } from "react";
import { Logo } from "../assets"
import { navLinks } from "../constants/index.js"
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="p-6 max-sm:py-4 sticky top-0 z-50 backdrop-blur-lg bg-nav">
      <nav className="flex justify-between lg:px-6 ">
        <a href="/" className="flex flex-row gap-4 items-center text-2xl max-sm:text-xl font-semibold">
          <img  src = {Logo} className="w-8 h-8 max-sm:w-6 max-sm:h-6 "/>Fitness Zone</a>
        <ul className="flex justify-center items-center gap-16 max-md:flex-col max-md:hidden">
          { navLinks.map((item) => (
            <li key = {item.label}>
              <a href={item.href} className="text-lg nav-links">{item.label}</a>
            </li>
          ))}
        </ul>

          <button className = "md:hidden nav-toggle p-2" onClick={()=>setMenu(!menu)}>
            {menu ? (<FaTimes className="text-2xl md:hidden"/>) : (<FaBars className="text-2xl md:hidden"/>)}
          </button>
          
      </nav>
      <ul className="flex flex-col items-center justify-center w-full md:hidden">
          { navLinks.map((item) => (
            <li key = {item.label} className={menu ? "flex" : "hidden"}>
              <a href={item.href} className="text-lg p-2 mt-2 nav-links-menu" onClick={()=>setMenu(!menu)}>{item.label}</a>
            </li>
          ))}
        </ul>
    </header>
  )
}

export default Nav
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { NavDesktop } from "../NavDesktop";

const iconProps = {
  size: 30,
  color: "#DBDAD8",
};

type HeaderProps = {
  toggleTheme: () => void,
  darkMode: boolean
}

export const Header = ({ toggleTheme, darkMode }:HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="bg-darkColor rounded-b-lg fixed w-full h-36 flex justify-between items-center z-50 pr-1">
      <div className="2xl:hidden">
        <RiMenu2Line {...iconProps} onClick={toggleMenu} />
        <AnimatePresence>
          {isOpen && <Menu toggleMenu={toggleMenu} />}
        </AnimatePresence>
      </div>
      <Logo primario={true}/>
      <NavDesktop />
      {
        darkMode ? <FaMoon {...iconProps} className="2xl:w-1/6 cursor-pointer" onClick={toggleTheme}/> : <FaSun {...iconProps} className="2xl:w-1/6 cursor-pointer" onClick={toggleTheme}/>
      }
      
    </header>
  );
};

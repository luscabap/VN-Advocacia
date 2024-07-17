import { Logo } from "../Logo";
import { RiMenu2Line } from "react-icons/ri";
import { FaCloudSun } from "react-icons/fa";
import { Menu } from "../Menu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const iconProps = {
  size: 30,
  color: "#DBDAD8"
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevOpen => !prevOpen)
  }

  return (
    <header className="bg-darkColor rounded-b-lg fixed w-full h-36 flex justify-between items-center">
      <RiMenu2Line {...iconProps} onClick={toggleMenu}/>
      <AnimatePresence>
      {isOpen && (
          <Menu toggleMenu={toggleMenu} />
        )}
      </AnimatePresence>
      <Logo />
      <FaCloudSun {...iconProps}/>
    </header>
  )
}
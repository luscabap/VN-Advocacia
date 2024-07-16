import { Logo } from "../Logo";
import { RiMenu2Line } from "react-icons/ri";
import { FaCloudSun } from "react-icons/fa";
import { Menu } from "../Menu";
import { useState } from "react";

const iconProps = {
  size: 30,
  color: "#DBDAD8"
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClickMenu = () => {
    setIsOpen(true);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <header className="bg-darkColor rounded-b-lg fixed w-full h-36 flex justify-between items-center">
      <RiMenu2Line {...iconProps} onClick={handleClickMenu}/>
      {isOpen && <Menu closeMenu={closeMenu}/>}
      <Logo />
      <FaCloudSun {...iconProps}/>
    </header>
  )
}
import { GoLaw } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid"
import { Contact } from "../Contact";

interface IMenuProps {
  closeMenu: () => void
}

const itensNav = [
  {
    id: uuidv4(),
    texto: "Home",
    href: "#"
  },
  {
    id: uuidv4(),
    texto: "Quem somos nós?",
    href: "#"
  },
  {
    id: uuidv4(),
    texto: "Área de atuação",
    href: "#"
  },
  {
    id: uuidv4(),
    texto: "Contato",
    href: "#"
  },
]

export const Menu = ({ closeMenu }: IMenuProps) => {
  return (
    <nav className="bg-secondaryColor absolute top-0 w-1/2 h-screen px-4">
      <button className="w-full flex justify-end items-center my-2" onClick={closeMenu}>
        <IoMdCloseCircle size={28} />
      </button>
      <h3 className="flex items-center justify-center gap-2 text-bold text-contrastColor text-xl mt-4">VN Advocacia <GoLaw size={20}/></h3>
      <ul className="flex flex-col gap-4 my-8">
        {itensNav.map(item => (
          <li key={item.id} className="mb-2 w-full">
            <a href={item.href} className="uppercase text-lightColor border-solid border-ultraLightColor border-b-[1px] pb-2 block">
              {item.texto}
            </a>
          </li>
        ))}
      </ul>
      <Contact iconColor="#DBDAD8" iconSize={25}/>
    </nav>
  )
}
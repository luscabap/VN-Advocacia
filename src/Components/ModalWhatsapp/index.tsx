import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const ModalWhatsApp = () => {
  const [contatoIsOpen, setContatoIsOpen] = useState(false);

  const toggleContato = () => {
    setContatoIsOpen(prevState => !prevState);
  }

  return (
    <div className="fixed z-50 bottom-2 right-2">
      { contatoIsOpen && (
        <div className="fixed z-50 bottom-20 right-2 bg-darkColor px-5 pb-3 pt-1 rounded-lg shadow-2xl h-44 flex flex-col items-center justify-evenly">
          <h5 className="uppercase text-primaryColor">Contato via WhatsApp</h5>
          <p className="text-white">Clique aqui para conversar com nossos especilistas</p>
          <a className="bg-lightColor p-2 rounded-2xl flex items-center justify-center gap-1" href="https://wa.me/55869816883515">
            <FaWhatsapp size={20} color="#232920"/>
            <p className="text-darkColor">Quero conversar com um especialista!</p>
          </a>
        </div>
      )}
      <div className="bg-primaryColor rounded-full fixed z-50 bottom-2 right-2 p-3 border-2 border-solid border-darkColor" onClick={toggleContato}>
        { contatoIsOpen ? <IoClose size={40} color="#232920"/> : <FaWhatsapp size={40} color="#232920"/>}
      </div>
    </div>
  )
}
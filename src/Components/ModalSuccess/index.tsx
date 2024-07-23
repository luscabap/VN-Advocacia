import { FaCheck } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Logo } from "../Logo";

interface IModalSuccessProps {
  togggleModal: () => void
}

export const ModalSucess = ({ togggleModal }:IModalSuccessProps) => {
  return (
      <div className="flex flex-col justify-center items-center relative bg-lightColor h-3/4 w-3/4 rounded-xl">
        <IoCloseOutline onClick={togggleModal} className="absolute top-2 right-2 cursor-pointer" size={35}/>
        <Logo primario={false}/>
        <h4 className="font-bold text-xl lg:text-3xl lg:mb-4">E-mail enviado com sucesso!</h4>
        <p className="text-base text-center mb-4 lg:text-xl">Em breve responderemos o seu contato.</p>
        <FaCheck size={60} color="green"/>
      </div>
  )
}
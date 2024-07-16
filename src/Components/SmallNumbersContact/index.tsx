import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

interface ISmallNumberContactProps {
  iconSize: number,
  iconColor: string
}

export const SmallNumbersContact = ({ iconColor, iconSize }: ISmallNumberContactProps) => {
  return (
    <>
      <div className="flex items-center justify-start gap-1 font-bold mb-3">
        <BsFillTelephoneFill color={iconColor} size={iconSize}/>
        <h4>Telefone: XXXXX-XXXX</h4>
      </div>
      <div className="flex items-center justify-start gap-1 font-bold mb-3">
        <IoLogoWhatsapp color={iconColor} size={iconSize}/>
        <h4>WhatsApp: XXXXX-XXXX</h4>
      </div>
    </>
  )
}
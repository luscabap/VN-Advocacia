import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export interface ISmallNumberContactProps {
  iconSize: number,
  iconColor: string
}

export const SmallNumbersContact = ({ iconColor, iconSize }: ISmallNumberContactProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex items-center justify-start gap-1 font-bold mb-3 lg:text-base 2xl:text-xl 2xl:justify-center">
          <BsFillTelephoneFill color={iconColor} size={iconSize}/>
          <h4 className="2xl:text-center">Telefone: (86) 98168-8351</h4>
        </div>
        <a className="flex items-center justify-start gap-1 font-bold mb-3 lg:text-base 2xl:text-xl 2xl:justify-center" href="https://wa.me/55869816883515">
          <IoLogoWhatsapp color={iconColor} size={iconSize}/>
          <h4>WhatsApp: (86) 98168-8351</h4>
        </a>
      </div>
      <div className="flex items-center justify-start gap-1 font-bold mb-3 lg:text-base text-xs 2xl:text-xl 2xl:justify-center">
        <MdEmail color={iconColor} size={iconSize}/>
        <h4>E-mail: vnassessoriajuridicag@gmail.com</h4>
      </div>
    </div>
  )
}
import { FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

interface IContactProps {
  iconSize: number,
  iconColor: string,
}

export const ContactSocialMedia = ({ iconSize, iconColor }: IContactProps) => {
  return (
    <div className="flex justify-evenly items-center">
        <a href="https://www.instagram.com/vnadvocacia_/" target="_blank">
          <FaInstagram size={iconSize}  color={iconColor}/>
        </a>
        <a href="#" target="_blank" className=" w-32 flex justify-center py-1 rounded-md">
          <FaWhatsapp size={iconSize}  color={iconColor}/>
        </a>
        <a href="https://linktr.ee/vnadvogados?utm_source=linktree_admin_share" target="_blank">
          <SiLinktree size={iconSize}  color={iconColor}/>
        </a>
    </div>
  )
}
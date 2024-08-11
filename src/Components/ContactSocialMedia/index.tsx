import { FaInstagram, FaWhatsapp, FaLinkedin  } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

interface IContactProps {
  iconSize: number,
  iconColor: string,
}

export const ContactSocialMedia = ({ iconSize, iconColor }: IContactProps) => {
  return (
    <div className="flex justify-evenly items-center">
        <a href="https://www.instagram.com/vnadvocacia_/" target="_blank" className=" w-32 flex justify-center py-1 rounded-md">
          <FaInstagram size={iconSize}  color={iconColor}/>
        </a>
        <a href="https://wa.me/558681688351?text=Olá,+gostaria+de+informações+sobre+os+seus+serviços,+por+favor." target="_blank" className=" w-32 flex justify-center py-1 rounded-md">
          <FaWhatsapp size={iconSize}  color={iconColor}/>
        </a>
        <a href="https://linktr.ee/vnadvogados?utm_source=linktree_admin_share" target="_blank" className=" w-32 flex justify-center py-1 rounded-md">
          <SiLinktree size={iconSize}  color={iconColor}/>
        </a>
        <a href="https://www.linkedin.com/company/vn-advocacia-e-consultoria-jur%C3%ADdica/posts/?feedView=all" target="_blank" className=" w-32 flex justify-center py-1 rounded-md">
          <FaLinkedin size={iconSize}  color={iconColor}/>
        </a>
    </div>
  )
}
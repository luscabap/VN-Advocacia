import { Link } from "react-scroll";
import logo from "/logo.png";

export const Logo = () => {
  return (
      <Link to="home" className="flex flex-col items-center justify-center 2xl:w-1/6 cursor-pointer" >
        <h1 className="font-destaque text-xl text-contrastColor underline">VN Advocacia</h1>
        <h2 className="text-contrastColor text-base">Assessoria e Consultoria Jurídica</h2>
        <img src={logo} alt="Logo da VN Advocacia" className="h-14"/>
      </Link>
  )
}
import logo from "../../../public/logo.png";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4">
      <img src={logo} alt="Logo da VN Advocacia" className="h-40"/>
      <h1 className="font-destaque text-2xl text-contrastColor underline">VN Advocacia</h1>
      <h2 className="text-contrastColor text-lg">Assessoria e Consultoria Jurídica</h2>
    </div>
  )
}
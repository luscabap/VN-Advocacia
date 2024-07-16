import logo from "/logo.png";

export const Logo = () => {
  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-destaque text-xl text-contrastColor underline">VN Advocacia</h1>
        <h2 className="text-contrastColor text-base">Assessoria e Consultoria Jurídica</h2>
        <img src={logo} alt="Logo da VN Advocacia" className="h-14"/>
      </div>
  )
}
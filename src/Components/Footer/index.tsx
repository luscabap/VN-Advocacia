import { SmallNumbersContact } from "../SmallNumbersContact"

export const Footer = () => {
  return (
    <footer className="bg-darkColor text-white flex flex-col items-center justify-center gap-4 py-8 px-3">
      <div>
        <address className="text-sm text-center italic mb-1">Endereço Completo do Escritório - Rua: Frei Gaspar, 50 | Edificio Hellbor Offices</address>
        <address className="text-sm text-center italic mb-2">Bloco TESTE - Centro | São Vicente - SP</address>
      </div>
      <div className="flex text-xs gap-4">
        <SmallNumbersContact iconSize={15} iconColor="#DBDAD8"/>
      </div>
      <p className="text-sm border-solid border-t-[1px] border-ultraLightColor w-full pt-5 text-center font-thin">Todos os direitos reservados - VN Advocacia 2024 &copy;</p>
      <code className="text-sm font-light ">Site desenvolvido por <a href="https://portfolio-luscabap.vercel.app/" target="_blank"><abbr title="lucasbaptistasilva.dev@gmail.com">Lucas Baptista</abbr></a></code>
    </footer>
  )
}
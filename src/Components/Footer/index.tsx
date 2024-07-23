import { ContactSocialMedia } from "../ContactSocialMedia"
import { SmallNumbersContact } from "../SmallNumbersContact"

export const Footer = () => {
  return (
    <footer className="bg-darkColor text-white flex flex-col items-center 
    justify-center gap-4 py-8 px-3">
      <div>
        <address className="text-sm text-center italic mb-1 lg:text-xl">Rua Riachuelo, 514 - Edifício Angélico, Sala 04 | Centro - Parnaíba / PI</address>
      </div>
      <div className="flex items-center justify-center text-xs gap-4">
        <SmallNumbersContact iconSize={15} iconColor="#DBDAD8"/>
      </div>
      <p className="text-sm border-solid border-t-[1px] border-ultraLightColor w-full pt-5 text-center font-thin lg:text-xl">Todos os direitos reservados &copy; 2024 - VN Advocacia Assessoria e Consutoria Jurídica. CNPJ: 21.596.578/0001-22 </p>
      <div className="w-1/2">
        <ContactSocialMedia iconColor="white" iconSize={15}/>
      </div>
      <code className="text-xs font-light lg:text-base mt-8">Site desenvolvido por <a href="https://portfolio-luscabap.vercel.app/" target="_blank"><abbr title="lucasbaptistasilva.dev@gmail.com">Lucas Baptista</abbr></a></code>
    </footer>
  )
}
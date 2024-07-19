import { ContactSocialMedia } from "../ContactSocialMedia"

export const Home = () => {
  return (
    <div className="mb-8 flex flex-col gap-4 ">
      <p className="indent-7 text-justify font-medium text-base lg:text-xl">Na <span className="font-bold text-terciaryColor">VN Advocacia</span>, oferecemos assistência jurídica competente e eficaz, sempre tratando TODOS os casos com empatia, atenção e excelência!</p>
      <p className="indent-7 text-justify font-medium text-base lg:text-xl"> Com anos de experiência no mercado e profundo conhecimento jurídico, nossa equipe está pronta para atender todas as suas necessidades e de sua empresa.
      </p>
      <ContactSocialMedia iconSize={45} iconColor="#53330c"/>
    </div>
  )
}
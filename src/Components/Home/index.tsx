import { Contact } from "../Contact"

export const Home = () => {
  return (
    <div className="my-8 flex flex-col gap-4">
      <p className="indent-7 text-justify font-medium text-base">Na <span className="font-bold text-terciaryColor">VN Advocacia</span>, oferecemos assistência jurídica competente e eficaz, sempre tratando TODOS os casos com empatia, atenção e excelência!</p>
      <p className="indent-7 text-justify font-medium text-base"> Com anos de experiência no mercado e profundo conhecimento jurídico, nossa equipe está pronta para atender todas as suas necessidades e de sua empresa.
      </p>
      <Contact iconSize={45} iconColor="#53330c"/>
    </div>
  )
}
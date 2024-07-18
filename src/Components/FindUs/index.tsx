import { Title } from "../Title";
import { FaMapMarkerAlt } from "react-icons/fa";

export const FindUs = () => {
  return (
    <div>
      <Title text="Onde nos encontrar?" id="encontre-nos"/>
      <div className="max-w-full flex justify-center items-center my-3">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6987906934664!2d-41.77821561449176!3d-2.902836338428666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec2fea339624dd%3A0x3480ae3ca3424465!2sR.%20Riachuelo%2C%20514%20-%20Centro%2C%20Parna%C3%ADba%20-%20PI%2C%2064200-280!5e0!3m2!1spt-BR!2sbr!4v1721234015128!5m2!1spt-BR!2sbr"  
          loading="lazy"
          className="w-80 h-72 bg-darkColor p-[1px] rounded-md"
        ></iframe>
      </div>
      <div className="flex items-start justify-center mb-6 mx-auto gap-2">
        <FaMapMarkerAlt  size={20} color="red"/>
        <address className="text-base text-darkColor">Rua Riachuelo, 514 - Edifício Angélico, Sala 04 | Centro - Parnaíba / PI</address>
      </div>
    </div>
  )
}
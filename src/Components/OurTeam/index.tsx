import { TeamMember } from "../TeamMember";
import { Title } from "../Title";
import time from "/assets/time.png";
import { dataTeamMember } from "./dataTeamMember";

export const OurTeam = () => {
  return (
    <div className="2xl:mt-16">
      <Title text="Nosso time" id="nosso-time"/>
      <h4 className="indent-4">O time de advogados da VN Advocacia foi formado com base em uma visão compartilhada de excelência jurídica, ética e comprometimento com os clientes.</h4>
      <h4 className="indent-4">A criação do time foi uma jornada estratégica, marcada por cuidadosa seleção, parcerias estratégicas e a busca por profissionais dedicados ao propósito da empresa.</h4>
      <div className="flex flex-col items-center justify-center my-3">
        <h5 className="text-secondaryColor font-destaque">Equipe VN Advocacia</h5>
        <img src={time} alt="Imagem da equipe VN Advocacia" />
        <div className="w-full flex-wrap p-4 my-4 flex flex-col gap-8 2xl:w-1/2">
        <h4 className="uppercase font-bold">Membros</h4>
          {
            dataTeamMember.map(member => (
              <TeamMember 
                key={member.id}
                funcao={member.funcao}
                img={member.img}
                nome={member.nome}
                primario={member.primario}
                especialidade={member.especialidade}
                nOab={member.nOab}
                email={member.email}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
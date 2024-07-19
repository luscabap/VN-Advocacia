interface ITeamMemberProps {
  primario: boolean,
  img: string,
  nome: string,
  funcao: string,
  especialidade?: string
}

export const TeamMember = ({ funcao, img, nome, primario, especialidade }: ITeamMemberProps) => {
  return (
    <div className={`flex ${primario ? "flex-row" : "flex-row-reverse"} 
      items-center gap-2 border-[1px] border-solid border-darkColor p-2 rounded-md`}>
    <img src={img} alt={`Imagem do membro da equipe ${nome}`} className="w-32 h-40 rounded-sm"/>
    <div>
      <h5 className="text-primaryColor underline text-lg">{nome}</h5>
      <p className="font-bold">{funcao}</p>
      { especialidade && <p>Especialidade: {especialidade}</p> }
    </div>
    </div>
  )
}
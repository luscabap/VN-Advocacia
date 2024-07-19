interface ITeamMemberProps {
  primario: boolean,
  img: string,
  nome: string,
  funcao: string,
  especialidade?: string,
  nOab?: string,
  email?: string
}

export const TeamMember = ({ funcao, img, nome, primario, especialidade, nOab, email }: ITeamMemberProps) => {
  return (
    <div className={`flex ${primario ? "flex-row" : "flex-row-reverse"} 
      items-center justify-between gap-2 border-[1px] border-solid border-darkColor p-2 rounded-md bg-darkColor`}>
    <img src={img} alt={`Imagem do membro da equipe ${nome}`} className="w-32 h-40 rounded-sm"/>
    <div>
      <h5 className="text-contrastColor underline text-lg">{nome}</h5>
      <p className="font-bold text-primaryColor text-sm">{funcao} {nOab ? " - N° OAB: 12550" : null}</p>
      { especialidade && <p className="text-lightColor text-sm">Especialidade: {especialidade}</p> }
      { email && <p className="text-lightColor text-xs">{email}</p> }
    </div>
    </div>
  )
}
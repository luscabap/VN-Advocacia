import { ItemCheck } from "../ItemCheck";
import { Title } from "../Title"

const itemsCheck = [
  "Recuperação de Empresas",
  "Sociedade Empresária",
  "Contratos Empresariais",
  "Capitação de Recursos",
  "Blindagem Patrimonial",
  "Recuperação de Crédito",
  "Cobrança",
  "Direito do Consumidor",
  "Licitações"
]

export const Expertise = () => {
  return (
    <div>
      <Title text="Área de atuação" id="area-atuacao"/>
      <div className="flex flex-col gap-3">
        <h3 className="italic text-secondaryColor">Por que contratar a VN Advocacia?</h3>
        <p className="indent-5">O direito empresarial é uma <strong>área essencial</strong> para qualquer empresário e seu empreendimento, pois envolve regulamentações e diretrizes que visam garantir a <strong>sustentabilidade</strong> e o <strong>sucesso dos negócios</strong>.</p>
        <p className="indent-5">Proporcionando segurança jurídica, evitando problemas legais e garantindo um ambiente saudável e propício para o progresso e crescimento sustentável</p>
      </div>
      <ul className="bg-primaryColor px-3 py-6 my-4 rounded-md flex flex-col gap-4">
        {itemsCheck.map((item, index) => <ItemCheck key={index} texto={item}/>)}
      </ul>
    </div>
  )
}
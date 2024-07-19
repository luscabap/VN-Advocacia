import { ItemCheck } from "../ItemCheck";
import { Title } from "../Title";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { PiMaskHappyLight } from "react-icons/pi";
import { SiPrivateinternetaccess } from "react-icons/si";

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
      <div className="flex flex-col gap-8 my-8">
        <div className="border-2 border-solid border-darkColor rounded-xl p-4">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <GoGear size={50}/>
            <h4 className="text-center uppercase text-terciaryColor underline">Melhor organização Empresarial</h4>
          </div>
          <p className="indent-2">Com menos questões a se preocupar e com maior segurança no desenvolvimento dos negócios a Empresa consegue reorganizar setores e funcionários para funções que realmente venham a agregar valor e gerar lucro para Empresa.</p>
        </div>
        <div className="border-2 border-solid border-darkColor rounded-xl p-4">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <AiOutlineFileProtect size={50}/>
            <h4 className="text-center uppercase text-terciaryColor underline">Proteção Patrimonial da Empresa</h4>
          </div>
          <p>Da mesma forma, a consultoria consegue elaborar planos e emitir pareceres verbais e/ou por escrito que protegem o patrimônio da Empresa. Menos gastos, menos custos, mais investimentos e, consequentemente, mais desenvolvimento e crescimento.</p>
        </div>
        <div className="border-2 border-solid border-darkColor rounded-xl p-4">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <PiMaskHappyLight size={50}/>
            <h4 className="text-center uppercase text-terciaryColor underline">Menor desgaste emocional</h4>
          </div>
          <p>Com a assessoria jurídica, menores serão as chances dos problemas surgirem e, caso apareçam, a Empresa terá a representação de advogados sem que para isso tenha que desembolsar valores. Redução de perdas financeiras e melhor controle de gastos são essenciais.</p>
        </div>
        <div className="border-2 border-solid border-darkColor rounded-xl p-4">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <SiPrivateinternetaccess size={50}/>
            <h4 className="text-center uppercase text-terciaryColor underline">Soluções personalizadas e com total sigilo e segurança</h4>
          </div>
          <p>Analisamos minuciosamente o seu caso e implementamos a solução jurídica mais adequada. Com atendimento 100% digital, priorizamos um serviço seguro e totalmente sigiloso.</p>
        </div>
      </div>
      <ul className="bg-primaryColor px-3 py-6 my-4 rounded-md flex flex-col gap-4">
        {itemsCheck.map((item, index) => <ItemCheck key={index} texto={item}/>)}
      </ul>
    </div>
  )
}
import { Title } from "../Title";
import escritorio from "/assets/escritorio.png"

export const AboutUs = () => {
  return (
    <article className="flex flex-col items-start justify-start gap-4 my-4">
      <Title text="Quem somos nós?" id="quem-somos-nos"/>
      <p>Com registro n° x na Ordem dos Advogados do Brasil - Seção do Piauí, o escritório VN Advocacia busca entender e resolver os anseios e necessidades de todos os seus clientes, de forma personalizada,eficaz e precisa.</p>
      <p>Para a VN Advocacia, priorizar excelência no atendimento e excepcionalidade nos serviços - Sempre amparado pela ética e dignidade - é a principal forma de ser um escritório credibilizado e admirado no mercado a mais de X anos.</p>
      <p>Sob orientação do fundador, Dr Nome do Dr (n° oab), afirmamos a atuação do escritório, como referência e exemplo de excelencia na região, sempre os valores e máxima competência.</p>

      <code className="bg-zinc-600">PEGAR IMAGENS DO ESCRITÓRIO VN ADVOCACIA</code>
      <img src={escritorio} alt="Imagem do escritório VN Advocacia"/>
    </article>
  )
}
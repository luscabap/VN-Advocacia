import { Title } from "../Title";
import escritorio from "/assets/escritorio.png"

export const AboutUs = () => {
  return (
    <article className="flex flex-col items-start justify-start gap-6 my-4">
      <Title text="Quem somos nós?" id="quem-somos-nos"/>
      <p>Com <span className="font-bold">sede na cidade de Parbaína - Piauí</span>, o escritório VN Advocacia busca entender e resolver os anseios e necessidades de todos os seus clientes, de forma personalizada,eficaz e precisa.</p>
      <p>Para a VN Advocacia, <span className="font-bold">priorizar excelência no atendimento e excepcionalidade nos serviços</span> - Sempre amparado pela ética e dignidade - é a principal forma de ser um escritório credibilizado e admirado no mercado a mais de 13 anos.</p>
      <p>Sob orientação do fundador, Dr Virgílio Neris Machado Neto - N° OAB:12550, afirmamos a atuação do escritório, como referência e exemplo de excelencia na região, sempre os valores e máxima competência.</p>
      <h3 className="underline italic font-bold">Uma breve história sobre essa jornada de compromentimento e sucesso</h3>
      <p>Em uma tarde ensolarada de 03 de dezembro de 2012, três visionários, <span className="font-bold">Dr. Virgílio Neris Machado Neto</span>, <span className="font-bold">Dra. Maria do Livramento</span> e a dedicada <span className="font-bold">Maria de Fátima</span>, uniram suas paixões pela advocacia e formaram a VN Advocacia. Essa data não marcou apenas o início de uma nova empresa, mas sim o começo de uma jornada repleta de desafios e conquistas.</p>
      <p>O Dr. Virgílio, advogado experiente e apaixonado pela justiça, trouxe consigo anos de experiência e um comprometimento inabalável com a ética e os princípios legais. A Dra. Maria do Livramento, com sua mente analítica e visão estratégica, complementou a equipe de fundadores, enquanto Maria de Fátima, com sua dedicação incansável, tornou-se o alicerce operacional da VN Advocacia.</p>
      <p>Os primeiros anos não foram fáceis. Os desafios eram constantes, desde conquistar clientes até construir uma reputação sólida no mundo jurídico. A equipe enfrentou longas horas de trabalho, estudando casos, comparecendo às audiências e construindo relacionamentos com clientes e colegas.</p>
      <p>O compromisso com a excelência e a paixão por fazer a diferença na vida das pessoas foram fundamentais para superarem os desafios e consolidarem a reputação da empresa.</p>
      <p>Hoje, a VN Advocacia é reconhecida não apenas por seu profissionalismo e competência, mas também por seu envolvimento na comunidade. Iniciativas sociais e pro bono tornaram-se parte integrante da filosofia da empresa.</p>
      <p>As metas para o futuro incluem a expansão para novas áreas de prática, a adoção de tecnologias inovadoras para aprimorar os serviços e o contínuo comprometimento com a educação jurídica. A VN Advocacia não apenas representa seus clientes nos tribunais, mas também defende os princípios que alicerçam uma sociedade justa e equitativa.</p>
      <img src={escritorio} alt="Imagem do escritório VN Advocacia"/>
    </article>
  )
}
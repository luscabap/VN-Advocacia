import { v4 as uuidv4 } from "uuid";
import { Link } from "react-scroll";

const itensNav = [
  {
    id: uuidv4(),
    texto: "Home",
    idAncora: "home",
  },
  {
    id: uuidv4(),
    texto: "Área de atuação",
    idAncora: "area-atuacao",
  },
  {
    id: uuidv4(),
    texto: "Quem somos nós?",
    idAncora: "quem-somos-nos",
  },
  {
    id: uuidv4(),
    texto: "Nosso time",
    idAncora: "nosso-time",
  },

  {
    id: uuidv4(),
    texto: "Entre em Contato",
    idAncora: "entre-em-contato",
  },
  {
    id: uuidv4(),
    texto: "Encontre-nos",
    idAncora: "encontre-nos",
  },
];

export const NavDesktop = () => {
  return (
    <nav className="hidden 2xl:flex items-start justify-center gap-12">
      {itensNav.map((item) => (
            <li key={item.id} className="list-none">
              <Link
                to={item.idAncora}
                smooth={true}
                offset={-160} 
                duration={500} 
                spy={true} 
                className="uppercase text-lightColor border-solid border-lightColor border-b-[1px] p-2 block cursor-pointer transition-all 
                hover:bg-lightColor hover:text-darkColor hover:rounded-xl"
              >
                {item.texto}
              </Link>
            </li>
          ))}
    </nav>
  )
}
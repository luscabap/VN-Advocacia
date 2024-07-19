import { motion } from "framer-motion";
import { GoLaw } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { ContactSocialMedia } from "../ContactSocialMedia";
import { Link } from "react-scroll";

interface IMenuProps {
  toggleMenu: () => void;
}

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

export const Menu = ({ toggleMenu }: IMenuProps) => {
  const menuVariants = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itensVariants = {
    initial: {
      x: "5vh",
      transition: {
        duration: 0.4
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-secondaryColor fixed top-0 w-1/2 h-screen px-4 origin-left z-50"
    >
      <motion.nav
        variants={itensVariants}
        initial="initial"
        animate="open"
      >
        <div className="overflow-hidden">
        <button
          className="w-full flex justify-end items-center my-2"
          onClick={toggleMenu}
        >
          <IoMdCloseCircle size={28} />
        </button>
        <h3 className="flex items-center justify-center gap-2 text-bold text-contrastColor text-xl mt-4">
          VN Advocacia <GoLaw size={20} />
        </h3>
        <ul className="flex flex-col gap-4 my-8">
          {itensNav.map((item) => (
            <li key={item.id} className="mb-2 w-full ">
              <Link
                to={item.idAncora}
                smooth={true}
                offset={-160} 
                duration={500} 
                spy={true} 
                className="uppercase text-lightColor border-solid border-ultraLightColor border-b-[1px] pb-2 block"
              >
                {item.texto}
              </Link>
            </li>
          ))}
        </ul>
        </div>
        <ContactSocialMedia iconColor="#DBDAD8" iconSize={25} />
      </motion.nav>
    </motion.div>
  );
};

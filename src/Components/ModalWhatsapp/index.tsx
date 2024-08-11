import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

export const ModalWhatsApp = () => {
  const [contatoIsOpen, setContatoIsOpen] = useState(false);

  const toggleContato = () => {
    setContatoIsOpen((prevState) => !prevState);
  };

  const modalVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="fixed z-50 bottom-2 right-2">
      <AnimatePresence>
        {contatoIsOpen && (
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 bottom-20 right-2 bg-primaryColor px-5 pb-3 pt-1 rounded-lg shadow-2xl h-44 flex flex-col items-center justify-evenly border-[1px] border-solid border-darkColor origin-bottom
            2xl:text-2xl 2xl:h-60 2xl:bottom-32
            "
          >
            <h5 className="uppercase text-darkColor font-bold">
              Contato via WhatsApp
            </h5>
            <p className="text-white">
              Clique aqui para conversar com nossos especilistas
            </p>
            <a
              className="bg-lightColor p-2 rounded-2xl flex items-center justify-center gap-1"
              href="https://wa.me/558681688351?text=Olá,+gostaria+de+informações+sobre+os+seus+serviços,+por+favor."
            >
              <FaWhatsapp size={20} color="#232920" />
              <p className="text-darkColor">
                Quero conversar com um especialista!
              </p>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="bg-primaryColor rounded-full fixed z-50 bottom-2 right-2 p-3 border-2 border-solid border-darkColor 2xl:p-6 cursor-pointer"
        onClick={toggleContato}
      >
        {contatoIsOpen ? (
          <motion.div>
            <IoClose size={40} color="#232920" />
          </motion.div>
        ) : (
          <motion.div>
            <FaWhatsapp size={40} color="#232920" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

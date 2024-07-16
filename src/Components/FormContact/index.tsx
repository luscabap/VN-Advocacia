import { useState } from "react";
import { Title } from "../Title";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

// import emailjs from "@emailjs/browser";

const iconProps = {
  size: 20,
  color: "#232920"
}

export const FormContact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("MAAAAAAUZ");
    setNome("");
    setEmail("");
    setAssunto("");
    setMensagem("");

    // const templateParams = {
    //   from_name: nome,
    //   assunto: assunto,
    //   message: mensagem,
    //   email: email
    // }

    // emailjs.send("service_z6n4ymq", "template_pbys7ld", templateParams, "96zS6kOjqprudpstJ")
    // .then(success => {
    //   console.log("Email enviado com sucesso", success);
    //   setNome("");
    //   setEmail("");
    //   setAssunto("");
    //   setMensagem("");
    // }, (err) => {
    //   console.log("erro", err);
    // })
  };

  return (
    <>
      <Title text="Entre em contato conosco" />
      <form className="flex flex-col" onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-4 my-4">
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            required
            className="w-full font-medium border-solid border-zinc-600 px-3 rounded-md border-[1px] focus:border-darkColor"
          />

          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full font-medium border-solid border-zinc-600 px-3 rounded-md border-[1px] focus:border-darkColor"
          />

          <input
            type="text"
            placeholder="Assunto"
            onChange={(e) => setAssunto(e.target.value)}
            value={assunto}
            required
            className="w-full font-medium border-solid border-zinc-600 px-3 rounded-md border-[1px] focus:border-darkColor"
          />

          <input
            type="text"
            placeholder="Mensagem"
            onChange={(e) => setMensagem(e.target.value)}
            value={mensagem}
            required
            className="w-full font-medium border-solid border-zinc-600 px-3 rounded-md border-[1px] focus:border-darkColor h-24"
          />
        </div>
        <button 
          type="submit"
          className="bg-secondaryColor w-24 mx-auto font-destaque rounded-xl p-2 text-white mb-4"
        >
          Enviar
        </button>
      </form>
      <div className="flex items-center justify-start gap-1 font-bold mb-3">
        <BsFillTelephoneFill {...iconProps}/>
        <h4>Telefone: XXXXX-XXXX</h4>
      </div>
      <div className="flex items-center justify-start gap-1 font-bold">
        <IoLogoWhatsapp {...iconProps}/>
        <h4>WhatsApp: XXXXX-XXXX</h4>
      </div>
    </>
  );
};

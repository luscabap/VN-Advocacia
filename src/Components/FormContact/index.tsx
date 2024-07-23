import { useState } from "react";
import { Title } from "../Title";
import { SmallNumbersContact } from "../SmallNumbersContact";
import emailjs from "@emailjs/browser";


export const FormContact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNome("");
    setEmail("");
    setAssunto("");
    setMensagem("");
    setCelular("");

    const templateParams = {
      from_name: nome,
      assunto: assunto,
      message: mensagem,
      email: email,
      celular: celular
    }

    emailjs.send("service_9x3ub58", "template_icyf04k", templateParams, "pQuiflB0PLgJgh2Tw")
    .then(success => {
      console.log("Email enviado com sucesso", success);
      setNome("");
      setEmail("");
      setAssunto("");
      setMensagem("");
    }, (err) => {
      console.log("erro", err);
    })
  };

  return (
    <>
      <Title text="Entre em contato conosco" id="entre-em-contato"/>
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
            type="tel"
            placeholder="Número de celular"
            onChange={(e) => setCelular(e.target.value)}
            value={celular}
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
          className="bg-secondaryColor w-24 mx-auto rounded-xl p-2 text-white mb-4
          2xl:w-40
          "
        >
          Enviar
        </button>
      </form>
      <SmallNumbersContact iconSize={20} iconColor="#232920"/>
    </>
  );
};

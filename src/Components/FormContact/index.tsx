import { Title } from "../Title";
import { SmallNumbersContact } from "../SmallNumbersContact";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ModalSucess } from "../ModalSuccess";
import { SchemaFormFields } from "../../schemas/FormFields";

export const FormContact = () => {
  const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);

  const togggleModal = () => {
    setIsOpenModalSuccess((prevValue) => !prevValue);
  };

  type CorpoEmail = z.infer<typeof SchemaFormFields>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<CorpoEmail>({
    resolver: zodResolver(SchemaFormFields),
  });

  const toggleModalOnSuccess = () => {
    setIsOpenModalSuccess(true);
    
    setTimeout(() => {
      setIsOpenModalSuccess(false);
    }, 7000)
  }

  const OnSubmit: SubmitHandler<CorpoEmail> = (data) => {
    const templateParams = {
      from_name: data.nome,
      assunto: data.assunto,
      message: data.mensagem,
      email: data.email,
      celular: data.celular,
    };

    emailjs
      .send(
        "service_9x3ub58",
        "template_icyf04k",
        templateParams,
        "pQuiflB0PLgJgh2Tw"
      )
      .then(
        (success) => {
          console.log("Email enviado com sucesso", success);
        },
        (err) => {
          console.log("erro", err);
        }
      );

      toggleModalOnSuccess()
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        assunto: "",
        celular: "",
        email: "",
        mensagem: "",
        nome: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="flex flex-col relative">
      {isOpenModalSuccess &&
        <div className="absolute bg-backgroundModal mx-auto w-full h-full flex items-center justify-center rounded-2xl">
          <ModalSucess togggleModal={togggleModal} />
        </div>
      }
      <div>
        <Title text="Entre em contato conosco" id="entre-em-contato" />
        <form className="flex flex-col" onSubmit={handleSubmit(OnSubmit)}>
          <div className="flex flex-col gap-4 my-4">
            <input
              placeholder="Nome"
              {...register("nome")}
              className="w-full font-medium border-solid border-zinc-600 px-3 rounded-md border-[1px] focus:border-darkColor"
            />
            {errors.nome?.message && (
              <ErrorMessage>{errors.nome.message}</ErrorMessage>
            )}

            <input
              placeholder="E-mail"
              {...register("email")}
              className="w-full font-medium border-solid border-zinc-600 px-3 rounded-md border-[1px] focus:border-darkColor"
            />
            {errors.email?.message && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}

            <input
              placeholder="Número de celular"
              {...register("celular")}
              className="w-full font-medium border-solid border-zinc-600 px-3 rounded-md border-[1px] focus:border-darkColor"
            />
            {errors.celular?.message && (
              <ErrorMessage>{errors.celular.message}</ErrorMessage>
            )}

            <input
              placeholder="Assunto"
              {...register("assunto")}
              className="w-full font-medium border-solid border-zinc-600 px-3 rounded-md border-[1px] focus:border-darkColor"
            />
            {errors.assunto?.message && (
              <ErrorMessage>{errors.assunto.message}</ErrorMessage>
            )}

            <input
              placeholder="Mensagem"
              {...register("mensagem")}
              className="w-full font-medium border-solid border-zinc-600 px-3 rounded-md border-[1px] focus:border-darkColor h-24"
            />
            {errors.mensagem?.message && (
              <ErrorMessage>{errors.mensagem.message}</ErrorMessage>
            )}
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
        <SmallNumbersContact iconSize={20} iconColor="#232920" />
      </div>
    </div>
  );
};

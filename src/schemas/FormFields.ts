import { z } from "zod";

export const SchemaFormFields = z.object({
  nome: z
    .string()
    .min(3, { message: "O nome deve conter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Escreva um e-mail válido." }),
  celular: z
    .string()
    .min(11, { message: "Verifique o número digitado e tente novamente!" }),
  assunto: z.string().min(1, { message: "Preencha o campo" }),
  mensagem: z.string().min(1, { message: "Preencha o campo" }),
});
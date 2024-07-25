import { v4 as uuidv4 } from "uuid";
import vigilio from "/assets/vigilio.png";
import eudes from "/assets/eudes.png";
import andrea from "/assets/andrea.png";
import nubia from "/assets/nubia.png";
// import teste from "/assets/teste.png";
import maynara from "/assets/maynara.png";
import gildivane from "/assets/gildivane.png";
import jhon from "/assets/jhon.png";
import mariafatima from "/assets/maria-fatima.png";
import jacinta from "/assets/jacinta.png";
import alexandrino from "/assets/alexandrino.png";

export const dataTeamMember = [
  {
    id: uuidv4(),
    img: vigilio,
    primario: true,
    nome: "Dr. Virgílio Neris Machado Neto",
    funcao: "Advogado",
    especialidade: "Direito Imobiliário, Cível e Empresarial",
    nOab: "6644",
    email: "vnadv@hotmail.com"
  },
  {
    id: uuidv4(),
    img: eudes,
    primario: false,
    nome: "Dr. Francisco Eudes Braga Lima",
    funcao: "Advogado",
    especialidade: "Direito Civil e Empresarial",
    nOab: "12550",
    email: "f.eudesbraga@hotmail.com"
  },
  {
    id: uuidv4(),
    img: andrea,
    primario: true,
    nome: "Dra. Andréa Silva Monteiro",
    funcao: "Advogada",
    especialidade: "Direito Trabalhista"
  },
  {
    id: uuidv4(),
    img: nubia,
    primario: false,
    nome: "Dra. Núbia Virgínia Rabelo Nunes Machado",
    funcao: "Advogada",
    especialidade: "Direito Previdenciário"
  },
  {
    id: uuidv4(),
    primario: true,
    nome: "Dr. Deusdedit Narciso de O.C. Filho",
    funcao: "Advogado",
    especialidade: "Direito Civil"
  },
  {
    id: uuidv4(),
    img: maynara,
    primario: false,
    nome: "Maynara Barros",
    funcao: "Advogada",
    especialidade: "Direito Civil"
  },
  {
    id: uuidv4(),
    img: gildivane,
    primario: true,
    nome: "Gildivane Almeida",
    funcao: "Estagiária"
  },
  {
    id: uuidv4(),
    img: jhon,
    primario: false,
    nome: "Jhon Mark",
    funcao: "Estagiário",
  },
  {
    id: uuidv4(),
    img: mariafatima,
    primario: true,
    nome: "Maria de Fátima Sousa Silva",
    funcao: "Setor Financeiro",
  },
  {
    id: uuidv4(),
    img: jacinta,
    primario: false,
    nome: "Maria Jacinta Nascimento Silva",
    funcao: "Atendimento ao Cliente",
  },
  {
    id: uuidv4(),
    img: alexandrino,
    primario: true,
    nome: "Alexandrino Alves dos Santos Neto",
    funcao: "Setor Administrativo",
  },
]
import { Meta, StoryObj } from "@storybook/react";
import { TeamMember } from "./index";

const meta = {
  title: "UIComponents/TeamMember",
  component: TeamMember
} satisfies Meta<typeof TeamMember>

export default meta;

type Story = StoryObj<typeof meta>;

export const Exemplo: Story = {
  args: {
    funcao: "Advogado",
    nome: "Roberto",
    primario: true,
    email: "roberto@gmail.com",
    especialidade: "Criminalista",
    nOab: "123456"
  }
}

export const Primário: Story = {
  args: {
    funcao: "Advogado",
    nome: "Roberto",
    primario: true,
    email: "roberto@gmail.com",
    especialidade: "Criminalista",
    nOab: "123456"
  }
}

export const Secundario: Story = {
  args: {
    funcao: "Advogada",
    nome: "Amanda",
    primario: false,
    email: "amanda@gmail.com",
    especialidade: "Familiar",
    nOab: "123456"
  }
}
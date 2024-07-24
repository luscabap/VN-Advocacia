import { Meta, StoryObj } from "@storybook/react";
import { Title } from "./index"

const meta = {
  title: "UIComponents/Title",
  component: Title
} satisfies Meta<typeof Title>

export default meta;

type Story = StoryObj<typeof meta>;

export const Exemplo: Story = {
  args: {
    id: "idgerado",
    text: "teste"
  }
}
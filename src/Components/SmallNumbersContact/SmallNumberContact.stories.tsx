import { Meta, StoryObj } from "@storybook/react";
import { SmallNumbersContact } from "./index";

const meta = {
  title: "UIComponents/SmallNumberContact",
  component: SmallNumbersContact,
} satisfies Meta<typeof SmallNumbersContact>

export default meta;

type Story = StoryObj<typeof meta>

export const Exemplo: Story = {
  args: {
    iconColor: "#b19e0a",
    iconSize: 40,
  }
}
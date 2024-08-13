import { Meta, StoryObj } from "@storybook/react";
import { NavDesktop } from "./index";

const meta = {
  title: "UIComponents/NavDesktop",
  component: NavDesktop
} satisfies Meta<typeof NavDesktop>


export default meta;

type Story = StoryObj<typeof meta>

export const Exemplo:Story = {}
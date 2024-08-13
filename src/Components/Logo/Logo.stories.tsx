import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./index";

const meta = {
  title: "UIComponents/Logo",
  component: Logo
} satisfies Meta<typeof Logo>

export default meta;

type StoryLogo = StoryObj<typeof meta>;

export const Primary: StoryLogo = {
  args: {
    primario: true
  }

}
export const Secondary: StoryLogo = {
  args: {
    primario: false
  }
}
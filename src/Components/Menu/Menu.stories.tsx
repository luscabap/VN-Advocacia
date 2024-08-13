import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./index";

const meta = {
  title: "UIComponents/Menu",
  component: Menu
} satisfies Meta<typeof Menu>

export default meta;

type StoryMenu = StoryObj<typeof meta>;

const exampleFunc = () => console.log("a")

export const Example: StoryMenu = {
  args: {
    toggleMenu: exampleFunc
  }
}
import { Meta, StoryObj } from "@storybook/react";
import { ModalSucess } from "./index";

const meta = {
  title: "UIComponents/ModalSuccess",
  component: ModalSucess
} satisfies Meta<typeof ModalSucess>

export default meta;

type StoryModal = StoryObj<typeof meta>

const exampleFunction = () => console.log("teste")

export const Example: StoryModal = {
  args: {
    togggleModal: exampleFunction
  }
}
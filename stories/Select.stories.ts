import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Select } from "../src/components/Select/Select";

const meta = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onFocus: fn(),
    onBlur: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "select",
    label: "Select",
    options: [
      ["value 1", "Text 1"],
      ["value 2", "Text 2"],
    ],
    value: "value 1"
  },
};


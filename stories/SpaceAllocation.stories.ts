import type { Meta, StoryObj } from "@storybook/react";
import { SpaceAllocation } from "../src/components/SpaceAllocation/SpaceAllocation";

const meta = {
  title: "Advanced/SpaceAllocation",
  component: SpaceAllocation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SpaceAllocation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        title: "Maximum storage space used by the node",
        size: 10000000,
      },
      {
        title: "Amount of storage space currently in use",
        size: 10000000 * 0.2,
      },
      {
        title: "Amount of storage space reserved",
        size: 10000000 * 0.2,
      },
    ],
  },
};

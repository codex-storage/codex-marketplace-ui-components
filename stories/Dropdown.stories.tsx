import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownOption } from "../src/components/Dropdown/Dropdown";
import { ChangeEvent, useState } from "react";
import { fn } from "@storybook/test";
import { WebFileIcon } from "../src/components/WebFileIcon/WebFileIcon";

const meta = {
  title: "Forms/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onChange: fn(),
    onSelected: fn(),
    onFocus: fn(),
    onBlur: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  onSelected?: (o: DropdownOption) => void;

  onClick?: () => void;

  onMouseEnter?: () => void;

  onBlur?: () => void;
};

const Template = (p: Props) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    p.onChange(e);
    setValue(e.currentTarget.value);
  };

  const onSelected = (o: DropdownOption) => {
    setValue(o.title);
    p.onSelected?.(o);
  };

  return (
    <Dropdown
      {...p}
      placeholder="Select your file"
      onChange={onChange}
      onSelected={onSelected}
      value={value}
      id={"dropdown"}
      label={"Dropdown"}
      options={[
        {
          title: "File1.pdf",
          Icon: () => <WebFileIcon type="application/pdf"></WebFileIcon>,
          subtitle: "cid1",
        },
        {
          title: "File2.jpg",
          Icon: () => <WebFileIcon type="image/png"></WebFileIcon>,
          subtitle: "cid2",
        },
      ]}
    />
  );
};

export const Default = Template;

export const CustomStyle: Story = {
  args: {
    placeholder: "Select your file",
    options: [],
    value: "",
    id: "dropdown",
    label: "Dropdown",
  },
};

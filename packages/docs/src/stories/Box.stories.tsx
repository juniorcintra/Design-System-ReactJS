import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@juniorcintra-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

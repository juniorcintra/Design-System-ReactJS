import { styled } from "./styles";
import { ComponentProps } from "react";

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite300",
  borderRadius: "$sm",
  padding: "$2 $4",
  border: 0,
  fontWeight: "$bold",
  color: "$white",

  variants: {
    size: {
      sm: {
        fontSize: "$xs",
        padding: "$2 $4",
      },
      lg: {
        fontSize: "$md",
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "sm",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;

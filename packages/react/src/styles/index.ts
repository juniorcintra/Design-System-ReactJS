import {
  colors,
  space,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  radii,
} from "@juniorcintra-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    colors,
    space,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    radii,
  },
});

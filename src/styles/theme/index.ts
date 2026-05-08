import { colors } from "./colors";
import { typography } from "./typography";
import { metrics } from "./metrics";
import { components } from "./components";

export const theme = {
  colors,
  typography,
  metrics,
  components,
} as const;

export type Theme = typeof theme;

export type Color = keyof typeof theme.colors;
export type Typography = keyof typeof theme.typography;
export type Spacing = keyof typeof theme.metrics.spacing;
export type Radius = keyof typeof theme.metrics.radius;
export type Shadow = keyof typeof theme.metrics.shadows;
export type Breakpoint = keyof typeof theme.metrics.breakpoints;
export type ZIndex = keyof typeof theme.metrics.zIndex;

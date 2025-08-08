import { colors } from './colors';
import { typography } from './typography';
import { spacing, borderRadius, shadows, transitions } from './metrics';
import { components } from './components';

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  components,
} as const;

export type Theme = typeof theme;

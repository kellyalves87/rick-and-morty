export const colors = {
  background: {
    primary: "#050816",
    secondary: "#0b1020",
    surface: "rgba(16, 22, 34, 0.78)",
    surfaceStrong: "#121a2b",
  },

  text: {
    primary: "#f3f7ff",
    secondary: "#a9b4c7",
    muted: "#6f7b91",
  },

  border: {
    soft: "rgba(108, 255, 141, 0.18)",
    strong: "rgba(108, 255, 141, 0.35)",
  },

  accent: {
    primary: "#6cff8d",
    hover: "#8cffaa",
  },

  status: {
    alive: "#6cff8d",
    dead: "#ff6b81",
    unknown: "#f7c873",
  },

  state: {
    hover: "rgba(108, 255, 141, 0.16)",
    focus: "rgba(108, 255, 141, 0.28)",
  },
} as const;

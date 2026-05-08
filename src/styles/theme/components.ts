export const components = {
  button: {
    primary: {
      background: "#6cff8d",
      color: "#050816",
      hoverBackground: "#8cffaa",
    },
    secondary: {
      background: "rgba(108, 255, 141, 0.08)",
      color: "#f3f7ff",
      hoverBackground: "rgba(108, 255, 141, 0.16)",
    },
    ghost: {
      background: "transparent",
      color: "#f3f7ff",
      hoverBackground: "rgba(255, 255, 255, 0.06)",
    },
  },

  card: {
    background: "rgba(16, 22, 34, 0.78)",
    border: "rgba(108, 255, 141, 0.18)",
    hoverTransform: "translateY(-4px)",
    transition: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  input: {
    background: "rgba(16, 22, 34, 0.72)",
    border: "rgba(108, 255, 141, 0.18)",
    focusBorder: "rgba(108, 255, 141, 0.35)",
    color: "#f3f7ff",
    placeholder: "#6f7b91",
  },
} as const;

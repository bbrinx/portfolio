import { theme } from "@chakra-ui/core";

const colors = [
  "#e09f3e",
  "#9e2a2b",
  "#d9c5b2",
  "#1b998b",
  "#ffd3e8",
  "#f2cc8f",
  "#08b2e3",
  "#f37748",
  "#ffcbdd",
  "#7c0b2b",
  "#fb4b4e",
];

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    main: colors[Math.floor(Math.random() * colors.length)],
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
    mono: "Roboto Mono, monospace",
  },
};

export default customTheme;

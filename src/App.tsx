import React from "react";
import CharacterCards from "./components/CharacterCards";
import "./styles/fonts.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1
        style={{
          fontFamily: "RickAndMortyFont1, sans-serif",
          fontWeight: "bold",
          fontSize: "5rem",
          color: "#08C952",
          textAlign: "center",
        }}
      >
        Rick and Morty
      </h1>
      <CharacterCards />
    </ThemeProvider>
  );
};

export default App;

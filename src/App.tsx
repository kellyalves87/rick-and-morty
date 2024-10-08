import React from "react";
import CharacterCards from "./components/CharacterCards";
import "./styles/fonts.css";

const App: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;

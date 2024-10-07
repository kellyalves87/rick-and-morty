import React from "react";
import CharacterCards from "./components/CharacterCards";

const App: React.FC = () => {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <CharacterCards />
    </div>
  );
};

export default App;

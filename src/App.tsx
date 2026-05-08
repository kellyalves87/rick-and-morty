import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterList from "./components/characters/CharacterList";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navigation } from "./components/navigation";
import { BackgroundElements } from "./components/layout/BackgroundElements";
import About from "./pages/About";
import styled from "styled-components";
import { LoadingProvider } from "./contexts/LoadingContext";
import CharacterTrivia from "./components/characters/CharacterTrivia";

const Main = styled.main`
  margin-top: ${({ theme }) => theme.metrics.spacing.xl};
`;

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <GlobalStyle />
          <BackgroundElements />
          <Navigation />
          <Routes>
            <Route path="/" element={<About />} />
            <Route
              path="/personagens"
              element={
                <Main>
                  <CharacterList />
                </Main>
              }
            />
            <Route
              path="/curiosidades"
              element={
                <Main>
                  <CharacterTrivia />
                </Main>
              }
            />
          </Routes>
        </LoadingProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;

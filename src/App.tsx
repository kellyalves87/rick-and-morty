import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { LoadingProvider } from "./contexts/LoadingContext";

import { Navigation } from "./components/navigation";
import { BackgroundElements } from "./components/layout/BackgroundElements";

import About from "./pages/About";
import CharacterList from "./components/characters/CharacterList";
import CharacterTrivia from "./components/characters/CharacterTrivia";

const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.primary};
  overflow: hidden;
`;

const ContentArea = styled.main`
  position: relative;
  z-index: ${({ theme }) => theme.metrics.zIndex.base};
  width: 100%;

  padding: calc(52px + ${({ theme }) => theme.metrics.spacing.xl})
    ${({ theme }) => theme.metrics.spacing.lg}
    ${({ theme }) => theme.metrics.spacing.xxl};

  @media (min-width: ${({ theme }) => theme.metrics.breakpoints.lg}) {
    padding: ${({ theme }) => theme.metrics.spacing.xxl}
      ${({ theme }) => theme.metrics.spacing.xl}
      ${({ theme }) => theme.metrics.spacing.xxl};
  }
`;

const PageContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.metrics.container.wide || "1440px"};
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <GlobalStyle />

          <AppShell>
            <BackgroundElements />
            <Navigation />

            <ContentArea>
              <PageContainer>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/personagens" element={<CharacterList />} />
                  <Route path="/curiosidades" element={<CharacterTrivia />} />
                </Routes>
              </PageContainer>
            </ContentArea>
          </AppShell>
        </LoadingProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;

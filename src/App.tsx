import React from "react";
import { CharacterList } from "./components/characters";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Typography, Box } from "@mui/material";
import { LoadingProvider } from "./contexts/LoadingContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <GlobalStyle />
        <Box
          component="header"
          sx={{
            padding: theme.spacing.xl,
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "'RickAndMorty', sans-serif",
              fontWeight: "normal",
              fontSize: "5rem",
              color: theme.colors.brand.primary,
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              letterSpacing: "2px",
            }}
          >
            Rick and Morty
          </Typography>
        </Box>
        <Box component="main">
          <CharacterList />
        </Box>
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;

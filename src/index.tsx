import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Box, Typography, Button } from "@mui/material";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        if (error?.response?.status === 404) return false;
        return failureCount < 2;
      },
      staleTime: 1000 * 60 * 5,
    },
  },
});

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <Box
      role="alert"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      padding={3}
      textAlign="center"
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Oops! Algo deu errado
      </Typography>
      <Typography variant="body1" color="error" paragraph>
        {error.message}
      </Typography>
      <Button variant="contained" onClick={resetErrorBoundary}>
        Tentar Novamente
      </Button>
    </Box>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

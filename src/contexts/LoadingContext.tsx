import React from "react";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Backdrop, CircularProgress, Typography, Box } from "@mui/material";
import { useTheme } from "styled-components";

interface LoadingContextType {
  showLoading: (message?: string) => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const theme = useTheme();

  const showLoading = useCallback((msg?: string) => {
    setMessage(msg || "");
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
    setMessage("");
  }, []);

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      <Backdrop
        sx={{
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        open={isLoading}
      >
        <CircularProgress
          sx={{
            color: theme.colors.primary.main,
          }}
          size={60}
        />
        {message && (
          <Box textAlign="center">
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontFamily: theme.typography.fontFamily.primary,
              }}
            >
              {message}
            </Typography>
          </Box>
        )}
      </Backdrop>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

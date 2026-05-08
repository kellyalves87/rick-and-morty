import { useState, useCallback, useMemo } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import { Box, Typography, Grid, Skeleton, Button } from "@mui/material";
import { useTheme } from "styled-components";
import { debounce } from "lodash";
import CharacterCard from "../CharacterCard";
import CharacterFilter from "./CharacterFilter";
import { CharacterFilters } from "../../types/character";

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<CharacterFilters>({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  const { data, isLoading, isError, error } = useCharacters(page, filters);

  const theme = useTheme();

  const handleFilterChange = useCallback(
    (key: keyof CharacterFilters, value: string) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
      setPage(1);
    },
    [],
  );

  const debouncedFilterChange = useMemo(
    () => debounce(handleFilterChange, 300),
    [handleFilterChange],
  );

  const handleClearFilters = useCallback(() => {
    setFilters({
      name: "",
      status: "",
      species: "",
      gender: "",
    });
    setPage(1);
  }, []);

  const LoadingSkeleton = () => (
    <Box padding={2}>
      <Grid container spacing={2} paddingTop={2}>
        {Array.from(new Array(8)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
                padding: "16px",
              }}
            >
              <Skeleton variant="rectangular" width="100%" height={250} />
              <Box sx={{ mt: 2 }}>
                <Skeleton variant="text" height={30} width="80%" />
                <Skeleton variant="text" height={20} width="60%" />
                <Skeleton variant="text" height={20} width="50%" />
                <Skeleton variant="text" height={20} width="70%" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  if (isError) {
    return (
      <Box padding={2} display="flex" justifyContent="center">
        <Typography color="error">
          Error: {error?.message || "Failed to load characters"}
        </Typography>
      </Box>
    );
  }

  const characters = data?.results ?? [];

  return (
    <Box padding={2}>
      <Box mb={4}>
        <CharacterFilter
          filters={filters}
          onFilterChange={debouncedFilterChange}
          onClearFilters={handleClearFilters}
        />
      </Box>

      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <Grid container spacing={2} paddingTop={2}>
          {characters.length > 0 ? (
            characters.map((character) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                <CharacterCard character={character} />
              </Grid>
            ))
          ) : (
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              padding={4}
            >
              <Typography variant="body1" color="text.secondary">
                Nenhum personagem encontrado.
              </Typography>
            </Box>
          )}
        </Grid>
      )}

      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={!data?.info.prev}
          sx={{
            backgroundColor: theme.components.button.primary.background,
            color: theme.components.button.primary.color,
            "&:hover": {
              backgroundColor: theme.components.button.primary.hoverBackground,
            },
            transition: theme.metrics.transitions.normal,
          }}
        >
          Anterior
        </Button>
        <Typography
          variant="body1"
          alignSelf="center"
          sx={{
            color: theme.colors.text.primary,
            fontFamily: theme.typography.fontFamily.body,
          }}
        >
          Página {page}
        </Typography>
        <Button
          variant="contained"
          onClick={() => setPage((old) => old + 1)}
          disabled={!data?.info.next}
          sx={{
            backgroundColor: theme.components.button.primary.background,
            color: theme.components.button.primary.color,
            "&:hover": {
              backgroundColor: theme.components.button.primary.hoverBackground,
            },
            transition: theme.metrics.transitions.normal,
          }}
        >
          Próxima
        </Button>
      </Box>
    </Box>
  );
};

export default CharacterList;

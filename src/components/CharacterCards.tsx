import React, { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import Filters from "./Filters";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const CharacterCards = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    location: "",
    episode: "",
  });

  // Usa React Query para buscar os personagens com base nos filtros
  const { data, isLoading, isError, error } = useCharacters(page, filters);

  // Atualiza os filtros dinamicamente
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setPage(1); // Reiniciar a paginação ao mudar os filtros
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Adiciona uma verificação de segurança para evitar erro de undefined
  const hasNextPage = data?.results?.length === 20 && !!data?.info?.next;
  const hasPrevPage = page > 1;

  return (
    <Box padding={2}>
      {/* Filtros */}
      <Filters onFilterChange={handleFilterChange} />

      {/* Exibe os cards */}
      <Grid container spacing={2} paddingTop={2}>
        {data?.results?.length > 0 ? (
          data.results.map((character: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={character.image}
                  alt={character.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {character.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Status: {character.status}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Species: {character.species}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: {character.location?.name ?? "Unknown"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            Nenhum personagem encontrado.
          </Typography>
        )}
      </Grid>

      {/* Botões de Paginação */}
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={!hasPrevPage} /* Desativa se não houver página anterior */
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!hasNextPage} /* Desativa se não houver próxima página */
          sx={{ marginLeft: 2 }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CharacterCards;

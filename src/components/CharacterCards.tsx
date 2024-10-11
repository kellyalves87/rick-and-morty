import React, { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Skeleton,
  Button,
} from "@mui/material";

// Interface de personagem
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  image: string;
}

const CharacterCards = () => {
  // Estado da página para controlar a paginação
  const [page, setPage] = useState(1);

  // Busca os personagens com a página atual
  const { data, isLoading, isError, error, previousData } = useCharacters(page);

  // Exibe uma mensagem de erro caso a requisição falhe
  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  // Exibe Skeletons se estiver carregando e não há dados anteriores
  if (isLoading && !previousData) {
    return (
      <Box padding={2}>
        <Grid container spacing={2} paddingTop={2}>
          {/* Renderizando 8 Skeletons como placeholders */}
          {Array.from(new Array(8)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <CardContent>
                  <Skeleton variant="text" height={30} width="80%" />
                  <Skeleton variant="text" height={20} width="60%" />
                  <Skeleton variant="text" height={20} width="50%" />
                  <Skeleton variant="text" height={20} width="70%" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  // Define quais dados mostrar (se estiver carregando, mostra os dados anteriores)
  const characters =
    isLoading && previousData ? previousData.results : data?.results ?? [];

  return (
    <Box padding={2}>
      {/* Exibe os cards */}
      <Grid container spacing={2} paddingTop={2}>
        {characters.length > 0 ? (
          characters.map((character: Character) => (
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

      {/* Controles de Paginação */}
      <Box mt={4} display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={!data?.info.prev}
        >
          Anterior
        </Button>
        <Typography variant="body1" mx={2}>
          Página {page}
        </Typography>
        <Button
          variant="contained"
          onClick={() => setPage((old) => (data?.info.next ? old + 1 : old))}
          disabled={!data?.info.next}
        >
          Próxima
        </Button>
      </Box>
    </Box>
  );
};

export default CharacterCards;

import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Skeleton,
} from "@mui/material";
// src/App.js

const CharacterCards = () => {
  // Busca os personagens
  const { data, isLoading, isError, error } = useCharacters();

  // Exibe uma mensagem de carregamento enquanto os dados são buscados
  if (isLoading) {
    return (
      <Box padding={2}>
        <Grid container spacing={2} paddingTop={2}>
          {/* Renderizando 8 Skeletons como placeholders */}
          {Array.from(new Array(8)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                {/* Skeleton para a imagem */}
                <Skeleton variant="rectangular" width="100%" height={200} />
                <CardContent>
                  {/* Skeletons para os textos */}
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

  // Exibe uma mensagem de erro caso a requisição falhe
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box padding={2}>
      {/* Exibe os cards */}
      <Grid container spacing={2} paddingTop={2}>
        {data?.length > 0 ? (
          data.map((character: Character) => (
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
    </Box>
  );
};

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location?: {
    name: string;
  };
  image: string;
}

export default CharacterCards;

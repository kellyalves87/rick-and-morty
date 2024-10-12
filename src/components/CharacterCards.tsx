import { useState } from "react";
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
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useTheme } from "styled-components";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
}

const CharacterCards = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  const { data, isLoading, isError, error, previousData } = useCharacters(
    page,
    { name, status, species, gender }
  );

  const theme = useTheme();

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (isLoading && !previousData) {
    return (
      <Box padding={2}>
        <Grid container spacing={2} paddingTop={2}>
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

  const characters =
    isLoading && previousData ? previousData.results : data?.results ?? [];

  return (
    <Box padding={2}>
      <Box mb={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Status"
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="alive">Alive</MenuItem>
                <MenuItem value="dead">Dead</MenuItem>
                <MenuItem value="unknown">Unknown</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Espécie</InputLabel>
              <Select
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                label="Espécie"
              >
                <MenuItem value="">Todas</MenuItem>
                <MenuItem value="human">Human</MenuItem>
                <MenuItem value="alien">Alien</MenuItem>
                <MenuItem value="robot">Robot</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Gênero</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                label="Gênero"
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="genderless">Genderless</MenuItem>
                <MenuItem value="unknown">Unknown</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                setName("");
                setStatus("");
                setSpecies("");
                setGender("");
                setPage(1);
              }}
              sx={{
                backgroundColor: theme.colors.clearButton.background,
                color: theme.colors.clearButton.color,
                "&:hover": {
                  backgroundColor: theme.colors.clearButton.hoverBackground,
                },
              }}
            >
              Limpar Filtros
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2} paddingTop={2}>
        {characters.length > 0 ? (
          characters.map((character: Character) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
              <Card
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                    color: "#08C952",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={character.image}
                  alt={character.name}
                  style={{ objectFit: "contain", marginTop: "1rem" }}
                />
                <CardContent>
                  <Typography variant="h5" component="div" fontWeight="bold">
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

      <Box mt={4} display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={!data?.info.prev}
          sx={{
            backgroundColor: theme.colors.paginationButton.background,
            color: theme.colors.paginationButton.color,
            "&:hover": {
              backgroundColor: theme.colors.paginationButton.hoverBackground,
            },
          }}
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
          sx={{
            backgroundColor: theme.colors.paginationButton.background,
            color: theme.colors.paginationButton.color,
            "&:hover": {
              backgroundColor: theme.colors.paginationButton.hoverBackground,
            },
          }}
        >
          Próxima
        </Button>
      </Box>
    </Box>
  );
};

export default CharacterCards;

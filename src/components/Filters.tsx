import React, { useState, useEffect } from "react";
import { useLocations } from "../hooks/useLocations";
import { useEpisodes } from "../hooks/useEpisodes";
import {
  TextField,
  Select,
  MenuItem,
  Box,
  InputLabel,
  FormControl,
} from "@mui/material";

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [episode, setEpisode] = useState("");

  const { data: locations } = useLocations();
  const { data: episodes } = useEpisodes();

  // UseEffect para enviar os filtros para o componente pai
  useEffect(() => {
    onFilterChange({
      name,
      status,
      location,
      episode,
    });
  }, [name, status, location, episode, onFilterChange]);

  return (
    <Box display="flex" flexDirection="column" gap={2} padding={2}>
      <TextField
        label="Pesquisar por personagem"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Status"
        >
          <MenuItem value="">Todos os Status</MenuItem>
          <MenuItem value="alive">Vivo</MenuItem>
          <MenuItem value="dead">Morto</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Localização</InputLabel>
        <Select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          label="Localização"
        >
          <MenuItem value="">Todas as Localizações</MenuItem>
          {locations?.map((loc: any) => (
            <MenuItem key={loc.id} value={loc.name}>
              {loc.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Episódio</InputLabel>
        <Select
          value={episode}
          onChange={(e) => setEpisode(e.target.value)}
          label="Episódio"
        >
          <MenuItem value="">Todos os Episódios</MenuItem>
          {episodes?.map((ep: any) => (
            <MenuItem key={ep.id} value={ep.id}>
              Episódio {ep.episode}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { useTheme } from "styled-components";
import {
  CharacterFilters,
  STATUS_OPTIONS,
  SPECIES_OPTIONS,
  GENDER_OPTIONS,
} from "../../types/character";
import { memo } from "react";

interface CharacterFilterProps {
  filters: CharacterFilters;
  onFilterChange: (key: keyof CharacterFilters, value: string) => void;
  onClearFilters: () => void;
}

const CharacterFilter = memo(
  ({ filters, onFilterChange, onClearFilters }: CharacterFilterProps) => {
    const theme = useTheme();

    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={filters.name}
            onChange={(e) => onFilterChange("name", e.target.value)}
            aria-label="Filtrar por nome"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={filters.status}
              onChange={(e) => onFilterChange("status", e.target.value)}
              label="Status"
            >
              {STATUS_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth>
            <InputLabel id="species-label">Espécie</InputLabel>
            <Select
              labelId="species-label"
              value={filters.species}
              onChange={(e) => onFilterChange("species", e.target.value)}
              label="Espécie"
            >
              {SPECIES_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth>
            <InputLabel id="gender-label">Gênero</InputLabel>
            <Select
              labelId="gender-label"
              value={filters.gender}
              onChange={(e) => onFilterChange("gender", e.target.value)}
              label="Gênero"
            >
              {GENDER_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Button
            variant="outlined"
            fullWidth
            onClick={onClearFilters}
            sx={{
              backgroundColor: theme.components.button.clear.background,
              color: theme.components.button.clear.color,
              "&:hover": {
                backgroundColor: theme.components.button.clear.hoverBackground,
              },
              transition: theme.transitions.normal,
            }}
          >
            Limpar Filtros
          </Button>
        </Grid>
      </Grid>
    );
  }
);

CharacterFilter.displayName = "CharacterFilter";

export default CharacterFilter;

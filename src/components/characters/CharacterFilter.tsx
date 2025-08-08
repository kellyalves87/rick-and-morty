import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import styled from "styled-components";
import {
  CharacterFilters,
  STATUS_OPTIONS,
  SPECIES_OPTIONS,
  GENDER_OPTIONS,
} from "../../types/character";
import { memo } from "react";

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    height: 40px;
    background: ${({ theme }) => theme.colors.background.card};
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: 8px;
    transition: all 0.3s ease;

    input {
      padding: 12px 14px;
    }

    fieldset {
      border: 2px solid ${({ theme }) => theme.colors.brand.primary}30;
      border-radius: 8px;
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.brand.primary};
    }

    &.Mui-focused {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.brand.primary}30;

      fieldset {
        border-color: ${({ theme }) => theme.colors.brand.primary};
      }
    }
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.text.primary};
    transform: translate(14px, 8px) scale(1);

    &.Mui-focused,
    &.MuiFormLabel-filled {
      transform: translate(14px, -9px) scale(0.75);
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }
`;

const StyledFormControl = styled(FormControl)`
  .MuiOutlinedInput-root {
    height: 40px;
    background: ${({ theme }) => theme.colors.background.card};
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: 8px;
    transition: all 0.3s ease;

    fieldset {
      border: 2px solid ${({ theme }) => theme.colors.brand.primary}30;
      border-radius: 8px;
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.brand.primary};
    }

    &.Mui-focused {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.brand.primary}30;

      fieldset {
        border-color: ${({ theme }) => theme.colors.brand.primary};
      }
    }
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.text.primary};
    transform: translate(14px, 8px) scale(1);

    &.Mui-focused,
    &.MuiFormLabel-filled {
      transform: translate(14px, -9px) scale(0.75);
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }

  .MuiSelect-select {
    padding: 8px 14px;
  }
`;
const StyledMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.card};
  height: 35px;
  min-height: 35px;
  padding: 0 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.primary}20;
  }

  &.Mui-selected {
    background: ${({ theme }) => theme.colors.brand.primary}40;

    &:hover {
      background: ${({ theme }) => theme.colors.brand.primary}60;
    }
  }
`;

const ClearButton = styled(Button)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.brand.primary}20 0%,
    ${({ theme }) => theme.colors.brand.primary}40 100%
  );
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: none;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  height: 40px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.brand.primary}50;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 0.5px;
  backdrop-filter: blur(5px);

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.brand.primary} 0%,
      ${({ theme }) => theme.colors.brand.secondary} 100%
    );
    color: ${({ theme }) => theme.colors.text.primary};
    transform: translateY(-2px);
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.brand.primary}40;
    border-color: transparent;
  }

  &:active {
    transform: translateY(0);
  }
`;

interface CharacterFilterProps {
  filters: CharacterFilters;
  onFilterChange: (key: keyof CharacterFilters, value: string) => void;
  onClearFilters: () => void;
}

const CharacterFilter = memo(
  ({ filters, onFilterChange, onClearFilters }: CharacterFilterProps) => {
    return (
      <Grid container spacing={2} sx={{ marginTop: "60px", padding: "0 16px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <StyledTextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={filters.name}
            onChange={(e) => onFilterChange("name", e.target.value)}
            aria-label="Filtrar por nome"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <StyledFormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={filters.status}
              onChange={(e) => onFilterChange("status", e.target.value)}
              label="Status"
            >
              {STATUS_OPTIONS.map((option) => (
                <StyledMenuItem key={option.value} value={option.value}>
                  {option.label}
                </StyledMenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <StyledFormControl fullWidth>
            <InputLabel id="species-label">Espécie</InputLabel>
            <Select
              labelId="species-label"
              value={filters.species}
              onChange={(e) => onFilterChange("species", e.target.value)}
              label="Espécie"
            >
              {SPECIES_OPTIONS.map((option) => (
                <StyledMenuItem key={option.value} value={option.value}>
                  {option.label}
                </StyledMenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <StyledFormControl fullWidth>
            <InputLabel id="gender-label">Gênero</InputLabel>
            <Select
              labelId="gender-label"
              value={filters.gender}
              onChange={(e) => onFilterChange("gender", e.target.value)}
              label="Gênero"
            >
              {GENDER_OPTIONS.map((option) => (
                <StyledMenuItem key={option.value} value={option.value}>
                  {option.label}
                </StyledMenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <ClearButton fullWidth onClick={onClearFilters}>
            Limpar Filtros
          </ClearButton>
        </Grid>
      </Grid>
    );
  }
);

CharacterFilter.displayName = "CharacterFilter";

export default CharacterFilter;

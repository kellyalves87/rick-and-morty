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
import { memo } from "react";
import {
  CharacterFilters,
  STATUS_OPTIONS,
  SPECIES_OPTIONS,
  GENDER_OPTIONS,
} from "../../types/character";

interface CharacterFilterProps {
  filters: CharacterFilters;
  onFilterChange: (key: keyof CharacterFilters, value: string) => void;
  onClearFilters: () => void;
}

const FiltersPanel = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.lg};

  padding: ${({ theme }) => theme.metrics.spacing.lg};

  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.lg};
  box-shadow: ${({ theme }) => theme.metrics.shadows.md};
  backdrop-filter: blur(10px);

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.md}) {
    padding: ${({ theme }) => theme.metrics.spacing.md};
  }
`;

const FiltersHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.metrics.spacing.md};

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Eyebrow = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.muted};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const StyledTextField = styled(TextField)`
  width: 100%;

  .MuiOutlinedInput-root {
    height: 48px;
    background: ${({ theme }) => theme.colors.background.surfaceStrong};
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: ${({ theme }) => theme.metrics.radius.md};
    transition:
      border-color ${({ theme }) => theme.metrics.transitions.normal},
      box-shadow ${({ theme }) => theme.metrics.transitions.normal},
      background ${({ theme }) => theme.metrics.transitions.normal};

    input {
      color: ${({ theme }) => theme.colors.text.primary};
      padding: 12px 14px;

      &::placeholder {
        color: ${({ theme }) => theme.colors.text.muted};
        opacity: 1;
      }
    }

    fieldset {
      border: 1px solid ${({ theme }) => theme.colors.border.soft};
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.border.strong};
    }

    &.Mui-focused {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.state.focus};

      fieldset {
        border-color: ${({ theme }) => theme.colors.accent.primary};
      }
    }
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.text.secondary};

    &.Mui-focused {
      color: ${({ theme }) => theme.colors.accent.primary};
    }
  }
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;

  .MuiOutlinedInput-root {
    height: 48px;
    background: ${({ theme }) => theme.colors.background.surfaceStrong};
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: ${({ theme }) => theme.metrics.radius.md};
    transition:
      border-color ${({ theme }) => theme.metrics.transitions.normal},
      box-shadow ${({ theme }) => theme.metrics.transitions.normal},
      background ${({ theme }) => theme.metrics.transitions.normal};

    fieldset {
      border: 1px solid ${({ theme }) => theme.colors.border.soft};
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.border.strong};
    }

    &.Mui-focused {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.state.focus};

      fieldset {
        border-color: ${({ theme }) => theme.colors.accent.primary};
      }
    }
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.text.secondary};

    &.Mui-focused {
      color: ${({ theme }) => theme.colors.accent.primary};
    }
  }

  .MuiSelect-select {
    display: flex;
    align-items: center;
    min-height: unset;
    padding: 12px 14px;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const StyledMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.surfaceStrong};

  &:hover {
    background: ${({ theme }) => theme.colors.state.hover};
  }

  &.Mui-selected {
    background: ${({ theme }) => theme.colors.accent.soft};

    &:hover {
      background: ${({ theme }) => theme.colors.state.hover};
    }
  }
`;

const ClearButton = styled(Button)`
  && {
    height: 48px;
    padding: 0 ${({ theme }) => theme.metrics.spacing.lg};
    border-radius: ${({ theme }) => theme.metrics.radius.md};
    border: 1px solid ${({ theme }) => theme.colors.border.soft};
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    text-transform: none;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    box-shadow: none;
    transition:
      background ${({ theme }) => theme.metrics.transitions.normal},
      border-color ${({ theme }) => theme.metrics.transitions.normal},
      transform ${({ theme }) => theme.metrics.transitions.normal};

    &:hover {
      background: ${({ theme }) => theme.colors.state.hover};
      border-color: ${({ theme }) => theme.colors.border.strong};
      transform: translateY(-1px);
      box-shadow: none;
    }
  }
`;

const CharacterFilter = memo(
  ({ filters, onFilterChange, onClearFilters }: CharacterFilterProps) => {
    return (
      <FiltersPanel>
        <FiltersHeader>
          <HeaderText>
            <Eyebrow>Search & Filters</Eyebrow>
            <Title>Encontre personagens entre dimensões</Title>
          </HeaderText>

          <ClearButton onClick={onClearFilters}>Limpar filtros</ClearButton>
        </FiltersHeader>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
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
              <InputLabel id="species-label">Espécies</InputLabel>
              <Select
                labelId="species-label"
                value={filters.species}
                onChange={(e) => onFilterChange("species", e.target.value)}
                label="Espécies"
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
        </Grid>
      </FiltersPanel>
    );
  },
);

CharacterFilter.displayName = "CharacterFilter";

export default CharacterFilter;

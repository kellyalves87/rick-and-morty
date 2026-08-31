import { useState, useCallback, useMemo, useEffect } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import styled from "styled-components";
import { debounce } from "lodash";

import { useCharacters } from "../../hooks/useCharacters";
import CharacterCard from "../CharacterCard";
import CharacterFilter from "./CharacterFilter";
import { CharacterFilters } from "../../types/character";
import PageHeader from "../common/PageHeader";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.xl};
  width: 100%;
`;

const GridWrapper = styled.div`
  width: 100%;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.metrics.spacing.sm};

  min-height: 280px;
  padding: ${({ theme }) => theme.metrics.spacing.xl};

  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.lg};
  background: ${({ theme }) => theme.colors.background.surface};
  box-shadow: ${({ theme }) => theme.metrics.shadows.md};
  text-align: center;
`;

const EmptyTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const EmptyText = styled.p`
  max-width: 480px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

const ErrorState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  padding: ${({ theme }) => theme.metrics.spacing.lg};

  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.lg};
  background: ${({ theme }) => theme.colors.background.surface};
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.status.dead};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  text-align: center;
`;

const PaginationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.metrics.spacing.md};
  flex-wrap: wrap;
`;

const PageIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 48px;
  padding: 0 ${({ theme }) => theme.metrics.spacing.md};

  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.md};
  background: ${({ theme }) => theme.colors.background.surface};
  color: ${({ theme }) => theme.colors.text.primary};

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const PaginationButton = styled.button`
  height: 48px;
  padding: 0 ${({ theme }) => theme.metrics.spacing.lg};

  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.md};
  background: ${({ theme }) => theme.components.button.primary.background};
  color: ${({ theme }) => theme.components.button.primary.color};

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  transition:
    transform ${({ theme }) => theme.metrics.transitions.normal},
    opacity ${({ theme }) => theme.metrics.transitions.normal},
    background ${({ theme }) => theme.metrics.transitions.normal};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: ${({ theme }) =>
      theme.components.button.primary.hoverBackground};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const SkeletonCard = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.lg};
  background: ${({ theme }) => theme.colors.background.surface};
  padding: ${({ theme }) => theme.metrics.spacing.md};
  box-shadow: ${({ theme }) => theme.metrics.shadows.md};
`;

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<CharacterFilters>({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  const { data, isLoading, isError, error } = useCharacters(page, filters);

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

  useEffect(() => {
    return () => {
      debouncedFilterChange.cancel();
    };
  }, [debouncedFilterChange]);

  const handleClearFilters = useCallback(() => {
    setFilters({
      name: "",
      status: "",
      species: "",
      gender: "",
    });
    setPage(1);
  }, []);

  const characters = data?.results ?? [];

  if (isError) {
    return (
      <ErrorState>
        <ErrorText>
          Error: {error?.message || "Failed to load characters"}
        </ErrorText>
      </ErrorState>
    );
  }

  return (
    <Wrapper>
      <PageHeader
        eyebrow="Multiverse Database"
        title="Personagens"
        description="Explore personagens de diferentes dimensões com filtros dinâmicos e uma interface sci-fi moderna."
      />

      <CharacterFilter
        filters={filters}
        onFilterChange={debouncedFilterChange}
        onClearFilters={handleClearFilters}
      />

      {isLoading ? (
        <GridWrapper>
          <Grid container spacing={3}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                <SkeletonCard>
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={220}
                    sx={{ borderRadius: "12px" }}
                  />
                  <Box mt={2}>
                    <Skeleton variant="text" height={32} width="70%" />
                    <Skeleton variant="text" height={24} width="50%" />
                    <Skeleton variant="text" height={24} width="40%" />
                    <Skeleton variant="text" height={24} width="80%" />
                  </Box>
                </SkeletonCard>
              </Grid>
            ))}
          </Grid>
        </GridWrapper>
      ) : characters.length > 0 ? (
        <>
          <GridWrapper>
            <Grid container spacing={3}>
              {characters.map((character) => (
                <Grid item xs={12} sm={6} md={4} xl={3} key={character.id}>
                  <CharacterCard character={character} />
                </Grid>
              ))}
            </Grid>
          </GridWrapper>

          <PaginationWrapper aria-label="Characters pagination">
            <PaginationButton
              type="button"
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={!data?.info.prev}
            >
              Previous
            </PaginationButton>

            <PageIndicator>Page {page}</PageIndicator>

            <PaginationButton
              type="button"
              onClick={() => setPage((old) => old + 1)}
              disabled={!data?.info.next}
            >
              Next
            </PaginationButton>
          </PaginationWrapper>
        </>
      ) : (
        <EmptyState>
          <EmptyTitle>No characters found</EmptyTitle>
          <EmptyText>
            Try adjusting the filters or clearing the current search to explore
            more characters from the multiverse.
          </EmptyText>
        </EmptyState>
      )}
    </Wrapper>
  );
};

export default CharacterList;

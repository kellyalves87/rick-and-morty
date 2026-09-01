import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL = "https://rickandmortyapi.com/api/character";
const STALE_TIME_MS = 5000;

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

interface CharactersData {
  info: {
    next: string | null;
    prev: string | null;
    pages: number;
    count: number;
  };
  results: Character[];
}

interface CharacterFilters {
  name: string;
  status: string;
  species: string;
  gender: string;
}

const fetchCharacters = async (
  page: number,
  filters: CharacterFilters,
): Promise<CharactersData> => {
  try {
    const { name, status, species, gender } = filters;

    const { data } = await axios.get<CharactersData>(API_BASE_URL, {
      params: {
        page,
        ...(name && { name }),
        ...(status && { status }),
        ...(species && { species }),
        ...(gender && { gender }),
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return {
          info: {
            next: null,
            prev: null,
            pages: 0,
            count: 0,
          },
          results: [],
        };
      }

      throw new Error(
        error.response?.data?.error || "Failed to fetch characters",
      );
    }

    throw error;
  }
};

export const useCharacters = (page: number, filters: CharacterFilters) => {
  return useQuery<CharactersData, Error>({
    queryKey: ["characters", page, filters],
    queryFn: () => fetchCharacters(page, filters),
    staleTime: STALE_TIME_MS,
    retry: 3,
  });
};

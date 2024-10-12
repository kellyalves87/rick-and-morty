import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
  };
  results: Character[];
}

const fetchCharacters = async (
  page: number,
  filters: any
): Promise<CharactersData> => {
  const { name, status, species, gender } = filters;
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character`,
    {
      params: { page, name, status, species, gender },
    }
  );
  return data;
};

export const useCharacters = (
  page: number,
  filters: { name: string; status: string; species: string; gender: string }
) => {
  const [previousData, setPreviousData] = useState<CharactersData | null>(null);

  const query = useQuery<CharactersData, Error>({
    queryKey: ["characters", page, filters],
    queryFn: () => fetchCharacters(page, filters),
    staleTime: 5000,
  });

  useEffect(() => {
    if (query.data) {
      setPreviousData(query.data);
    }
  }, [query.data]);

  return {
    ...query,
    previousData,
  };
};

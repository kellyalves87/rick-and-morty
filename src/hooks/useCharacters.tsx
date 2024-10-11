import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Definição dos tipos para a resposta da API
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

interface CharactersData {
  info: {
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

// Função de busca dos personagens com base na página
const fetchCharacters = async (page: number): Promise<CharactersData> => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  return data;
};

// Hook customizado para buscar personagens, aceitando o número da página
export const useCharacters = (page: number) => {
  const [previousData, setPreviousData] = useState<CharactersData | null>(null);

  // Utiliza o `useQuery` para buscar os dados da página atual
  const query = useQuery<CharactersData, Error>({
    queryKey: ["characters", page],
    queryFn: () => fetchCharacters(page),
    staleTime: 5000,
  });

  // Armazena os dados anteriores manualmente
  useEffect(() => {
    if (query.data) {
      setPreviousData(query.data);
    }
  }, [query.data]);

  return {
    ...query, // Retorna todas as propriedades do `useQuery`
    previousData, // Inclui os dados anteriores para serem usados no carregamento
  };
};

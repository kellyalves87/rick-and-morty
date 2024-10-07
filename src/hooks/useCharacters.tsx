import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCharacters = async (page: number, filters: any) => {
  const { name, status } = filters;

  let url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  if (name) url += `&name=${name}`;
  if (status) url += `&status=${status}`;
  // Adicione mais lógicas para location e episode se necessário.

  const { data } = await axios.get(url);
  return data;
};

export const useCharacters = (page: number, filters: any) => {
  return useQuery({
    queryKey: ["characters", page, filters],
    queryFn: () => fetchCharacters(page, filters),
    staleTime: 5000, // Dados permanecem frescos por 5 segundos
    placeholderData: () => ({ results: [], info: {} }),
  });
};

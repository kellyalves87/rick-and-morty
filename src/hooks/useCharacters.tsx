import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCharacters = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return data.results;
};

export const useCharacters = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
    staleTime: 5000, // Cache dos personagens por 5 segundos
  });
};

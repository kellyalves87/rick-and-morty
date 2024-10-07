import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchLocations = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/location');
  return data.results;
};

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'], // queryKey faz parte do objeto de opções
    queryFn: fetchLocations, // queryFn é a função que faz o fetch
    staleTime: 5000,         // Mantém os dados "frescos" por 5 segundos
  });
};

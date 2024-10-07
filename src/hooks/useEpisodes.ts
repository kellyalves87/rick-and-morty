import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchEpisodes = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/episode');
  return data.results;
};

export const useEpisodes = () => {
  return useQuery({
    queryKey: ['episodes'], // queryKey agora é parte do objeto de configuração
    queryFn: fetchEpisodes, // queryFn define a função de fetch
    staleTime: 5000,        // Você pode ajustar conforme necessário
  });
};

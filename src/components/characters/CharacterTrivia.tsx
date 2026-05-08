import styled from "styled-components";

interface TriviaItem {
  id: number;
  name: string;
  facts: string[];
}

const triviaData: TriviaItem[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    facts: [
      "Sua frase 'Wubba Lubba dub dub' significa 'Estou em grande dor, por favor me ajude' na língua dos Birdperson",
      "É considerado o ser mais inteligente do universo",
      "Seu portal gun pode acessar dimensões infinitas",
      "Tem um complexo relacionamento com a família, especialmente com Beth",
      "É viciado em Mega Seeds e tem uma obsessão por molho Szechuan do McDonald's",
    ],
  },
  {
    id: 2,
    name: "Morty Smith",
    facts: [
      "Suas ondas cerebrais complementam as de Rick, tornando-os invisíveis para inimigos",
      "Existem versões infinitas dele em diferentes dimensões",
      "Apesar de suas ansiedades, frequentemente demonstra coragem notável",
      "Desenvolve uma personalidade mais assertiva ao longo das temporadas",
      "Tem um relacionamento complexo com Jessica, sua paixão do colégio",
    ],
  },
  {
    id: 3,
    name: "Summer Smith",
    facts: [
      "É surpreendentemente adaptável a situações bizarras",
      "Em algumas dimensões, ela se torna uma guerreira feroz",
      "Frequentemente serve como a voz da razão nas aventuras",
      "Desenvolve habilidades de combate impressionantes ao longo da série",
      "Tem uma relação próxima com Rick, às vezes mais que Morty",
    ],
  },
  {
    id: 4,
    name: "Beth Smith",
    facts: [
      "É uma cirurgiã de cavalos altamente qualificada",
      "Tem problemas de abandono devido à ausência de Rick em sua infância",
      "Em algumas realidades, escolhe deixar sua família para explorar o universo",
      "Possui inteligência similar à de Rick, mas seguiu um caminho diferente",
      "Sua versão clone/real questiona constantemente sua própria identidade",
    ],
  },
  {
    id: 5,
    name: "Jerry Smith",
    facts: [
      "É considerado a versão mais incompetente de Jerry em todas as dimensões",
      "Tem um talento inesperado para campanhas publicitárias",
      "Desenvolveu um relacionamento improvável com um alienígena chamado Sleepy Gary",
      "Sua simplicidade às vezes o torna imune a ameaças complexas",
      "É surpreendentemente bom em fazer balões de origami",
    ],
  },
  {
    id: 6,
    name: "Mr. Meeseeks",
    facts: [
      "Existe apenas para cumprir uma única tarefa",
      "A existência prolongada causa dor e insanidade",
      "Não pode morrer até completar seu objetivo",
      "Tem uma natureza altamente cooperativa com outros Meeseeks",
      "Sua frase característica é 'Olha só eu!'",
    ],
  },
];

const TriviaContainer = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.sm}) {
    padding-top: 0;
  }
`;

const TriviaTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 3rem;
  text-align: center;
  margin: 1rem 0 2rem;

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.sm}) {
    font-size: 2rem;
    margin: 0.5rem 0 1.5rem;
  }
  font-family: "get_schwifty", sans-serif;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.text.primary}80;
  letter-spacing: 2px;
`;

const TriviaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TriviaCard = styled.div`
  background: ${({ theme }) => theme.colors.background.surface};
  border-radius: 15px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.text.primary}30;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.text.primary}10 0%,
      transparent 100%
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px ${({ theme }) => theme.colors.text.primary}30;
    border-color: ${({ theme }) => theme.colors.text.primary}50;
  }
`;

const CharacterName = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: "get_schwifty", sans-serif;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme.colors.text.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.text.primary};
  }
`;

const FactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FactItem = styled.li`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.95rem;
  line-height: 1.5;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.text.primary};
    border-radius: 50%;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.text.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const CharacterTrivia = () => {
  return (
    <TriviaContainer>
      <TriviaTitle>Curiosidades dos Personagens</TriviaTitle>
      <TriviaGrid>
        {triviaData.map((character) => (
          <TriviaCard key={character.id}>
            <CharacterName>{character.name}</CharacterName>
            <FactList>
              {character.facts.map((fact, index) => (
                <FactItem key={index}>{fact}</FactItem>
              ))}
            </FactList>
          </TriviaCard>
        ))}
      </TriviaGrid>
    </TriviaContainer>
  );
};

export default CharacterTrivia;

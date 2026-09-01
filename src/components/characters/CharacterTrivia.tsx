import styled from "styled-components";
import PageHeader from "../common/PageHeader";

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
  {
    id: 7,
    name: "Birdperson",
    facts: [
      "É um dos poucos personagens que realmente compreende a complexidade emocional de Rick",
      "Sua espécie possui uma cultura própria e uma forma de comunicação profundamente filosófica",
      "Já lutou ao lado de Rick em diferentes momentos importantes do passado",
      "Foi transformado em Phoenixperson antes de recuperar parte de sua antiga identidade",
      "É responsável por uma das revelações mais tristes sobre o verdadeiro significado de 'Wubba Lubba dub dub'",
    ],
  },
  {
    id: 8,
    name: "Squanchy",
    facts: [
      "Usa a palavra 'squanch' em vários contextos, mudando completamente o significado conforme a situação",
      "Apesar do jeito relaxado e cômico, é um aliado fiel de Rick em momentos críticos",
      "Consegue assumir uma forma muito mais agressiva e poderosa durante batalhas",
      "Sua personalidade mistura humor, caos e lealdade de um jeito bem marcante",
      "É um dos personagens secundários mais memoráveis do universo da série",
    ],
  },
];

const TriviaContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.xl};
  width: 100%;
`;

const TriviaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.metrics.spacing.lg};
`;

const TriviaCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.md};

  min-height: 100%;
  padding: ${({ theme }) => theme.metrics.spacing.lg};

  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.soft};
  border-radius: ${({ theme }) => theme.metrics.radius.lg};
  box-shadow: ${({ theme }) => theme.metrics.shadows.md};
  backdrop-filter: blur(10px);

  transition:
    transform ${({ theme }) => theme.metrics.transitions.normal},
    border-color ${({ theme }) => theme.metrics.transitions.normal},
    box-shadow ${({ theme }) => theme.metrics.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.border.strong};
    box-shadow: ${({ theme }) => theme.metrics.shadows.glow};
  }
`;

const CharacterName = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FactsLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.muted};
`;

const FactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.md};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FactItem = styled.li`
  position: relative;
  padding-left: 18px;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.accent.primary}55;
  }
`;

const CharacterTrivia = () => {
  return (
    <TriviaContainer>
      <PageHeader
        eyebrow="Character Insights"
        title="Curiosidades"
        description="Descubra fatos curiosos e detalhes marcantes sobre alguns dos personagens mais icônicos de Rick and Morty."
      />

      <TriviaGrid>
        {triviaData.map((character) => (
          <TriviaCard key={character.id}>
            <FactsLabel>Character file</FactsLabel>
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

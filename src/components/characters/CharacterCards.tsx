import { Grid } from "@mui/material";
import { Character } from "../../types/character";
import CharacterCard from "../CharacterCard";
import { memo } from "react";

interface CharacterCardsProps {
  characters: Character[];
}

const CharacterCards = memo(({ characters }: CharacterCardsProps) => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {characters.map((character) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
});

CharacterCards.displayName = "CharacterCards";

export default CharacterCards;

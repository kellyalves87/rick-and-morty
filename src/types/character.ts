export interface Character {
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

export interface CharacterFilters {
  name: string;
  status: string;
  species: string;
  gender: string;
}

export const STATUS_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
] as const;

export const SPECIES_OPTIONS = [
  { value: "", label: "Todas" },
  { value: "human", label: "Human" },
  { value: "alien", label: "Alien" },
  { value: "robot", label: "Robot" },
] as const;

export const GENDER_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "genderless", label: "Genderless" },
  { value: "unknown", label: "Unknown" },
] as const;

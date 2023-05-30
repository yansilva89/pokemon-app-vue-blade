export type RootState = {
  version: string
}

export interface PokemonState {
  pokemonList: any[]
  pokemonData: Record<string, any>;
  pokemonBreedDetails: Record<string, any>;
  isLoading: Boolean
}

import axios from 'axios';

export const getPokemonList = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
    return response.data;
  } catch (error) {
    console.error('Erro ao requisitar lista de Pokemons.', error);
    throw error;
  }
};

export const getPokemonInfo = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao requisitar informação do Pokemon.', error);
    throw error;
  }
};

export const getPersonageData = async (id: number) => { 
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
    return response.data;
  } catch (error) {
    console.error('Erro ao requisitar dados de Pokemon.', error);
    throw error;
  }
}

export const getBreedDetails = async (id: number) => { 
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`) 
    return response.data;
  } catch (error) {
    console.error('Erro ao requisitar dados de Pokemon.', error);
    throw error;
  }
}
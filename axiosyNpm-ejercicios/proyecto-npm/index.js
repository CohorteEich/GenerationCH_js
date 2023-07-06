const axios = require("axios");
// es para importar a axios a nuestro script

// api a conectar https://reqres.in/api/users
/*  */

async function fetchPokemonData() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      const pokemonList = response.data.results;
      console.log(pokemonList);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchPokemonData();
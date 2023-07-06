
//const axios = require("axios");

/* export  */const fetchPokemonData= async()=>{
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      const pokemonList = response.data.results;
      
      const pokemonListElement = document.getElementById('pokemon-list');
    
      
      for (const pokemon of pokemonList) {
        const pokemonData = await axios.get(pokemon.url);
        const pokemonName = pokemonData.data.name;
        const pokemonImage = pokemonData.data.sprites.front_default;
        const pokemonTypes = pokemonData.data.types.map(type => type.type.name).join(', ');
        
        const card = document.createElement('div');

        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
          <div class="card">
            <img src="${pokemonImage}" class="card-img-top" alt="${pokemonName}">
            <div class="card-body">
              <h5 class="card-title">${pokemonName}</h5>
              <p class="card-text"><strong>Tipos de poderes:</strong> ${pokemonTypes}</p>
            </div>
          </div>
        `;

        pokemonListElement.appendChild(card);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
fetchPokemonData();

/*   console.log("hola mundo"); */
// funcion para consultar los datos por consola
/* function obtenerNombresPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(response => response.json())
      .then(data => {
        console.log("Lista de Pokémon:");
        const nombres = data.results.map(pokemon => pokemon.name);
        nombres.forEach(nombre => {
          console.log(nombre);
        });
      })
      .catch(error => console.error("Error al obtener los datos de la API:", error));
  }
  
  obtenerNombresPokemon();
/* PETICION POR CONSOLA */ 

/* ____________________________________________________________ */ 


/* PETICION INYECTANDO NOMBRE E IMAGEN EN LISTA OPCION 1  */

// Función para obtener nombres de Pokémon y mostrarlos en una lista HTML
function obtenerNombresYPokemones() {
    // Realizar la solicitud HTTP utilizando fetch a la API de Pokémon
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")//Limita a 10 pokemon por ahora
      .then(response => response.json()) // Convertir la respuesta en formato JSON
      .then(data => {
        console.log("Lista de Pokémon:");
        const nombres = data.results.map(pokemon => pokemon.name); // Obtener los nombres de los Pokémon
  
        // Obtener referencia a la lista HTML MEDIANTE DOM
        const lista = document.getElementById("pokemon-lista");
  
        // Recorrer los nombres de los Pokémon
        nombres.forEach(nombre => {
          // Crear un elemento <li> para cada Pokémon
          const li = document.createElement("li");
          li.textContent = nombre; // Asignar el nombre del Pokémon al contenido del elemento <li>
  
          // Crear un elemento <img> para la imagen del Pokémon
          const img = document.createElement("img");
          const numeroPokemon = nombres.indexOf(nombre) + 1; // Obtener el número del Pokémon en base a su posición
          img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroPokemon}.png`; // Establecer la URL de la imagen del Pokémon
  
          // Añadir el elemento <img> como hijo del elemento <li>
          li.appendChild(img);
  
          // Añadir el elemento <li> como hijo de la lista HTML
          lista.appendChild(li);
        });
      })
      .catch(error => console.error("Error al obtener los datos de la API:", error));
  }
  
  // Llamar a la función para obtener nombres y Pokémon
  obtenerNombresYPokemones();
  



/*____________________________________________________________________________________________*/

/* 
// Función para obtener nombres de Pokémon y mostrarlos en una lista HTML
//OPCION 2 
function obtenerNombresPokemon() {
  // Realizar la solicitud HTTP utilizando fetch a la API de Pokémon
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then(response => response.json()) // Convertir la respuesta en formato JSON
    .then(data => {
      console.log("Lista de Pokémon:");

      // Obtener referencia a la lista HTML
      const lista = document.getElementById("pokemon-lista");

      // Recorrer los resultados de la API
      data.results.forEach(pokemon => {
        const nombre = pokemon.name; // Obtener el nombre del Pokémon

        // Crear un elemento <li> para cada Pokémon
        const li = document.createElement("li");
        li.textContent = nombre; // Asignar el nombre del Pokémon al contenido del elemento <li>

        // Añadir el elemento <li> como hijo de la lista HTML
        lista.appendChild(li);
      });
    })
    .catch(error => console.error("Error al obtener los datos de la API:", error));
}

// Llamar a la función para obtener nombres de Pokémon
obtenerNombresPokemon();
 */
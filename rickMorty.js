// rickMorty.js

// Example JavaScript code for Rick and Morty website
console.log("Hello from Rick and Morty JavaScript!");

// Definir la URL base de la API de Rick and Morty
const baseUrl = 'https://rickandmortyapi.com/api/';

// Función para realizar una solicitud HTTP a un endpoint específico y mostrar los datos
async function fetchData(endpoint) {
    try {
        // Construir la URL completa combinando la URL base y el endpoint especificado
        const url = baseUrl + endpoint;

        // Realizar la solicitud HTTP utilizando fetch
        const response = await fetch(url);

        // Verificar si la solicitud fue exitosa (código de respuesta HTTP 200)
        if (response.ok) {
            // Convertir la respuesta a formato JSON
            const data = await response.json();

            // Mostrar los datos en la consola
            console.log(`Datos obtenidos de ${url}:`, data);
        } else {
            // Si la respuesta no es exitosa, lanzar un error
            throw new Error(`Error al obtener los datos de ${url}`);
        }
    } catch (error) {
        // Capturar y manejar cualquier error ocurrido durante la solicitud
        console.error('Error:', error.message);
    }
}

// Ejemplo de uso: Obtener información sobre personajes
fetchData('character/');

// Ejemplo de uso: Obtener información sobre episodios
fetchData('episode/');

// Ejemplo de uso: Obtener información sobre ubicaciones
fetchData('location/');

// rickMorty.js

// URL de la API de Rick and Morty para obtener información de personajes
const apiUrl = 'https://rickandmortyapi.com/api/character/';

// Función para obtener datos de la API y mostrarlos en la página
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            const characters = data.results;
            const characterList = document.getElementById('characterList');

            characters.forEach(character => {
                // Crear elementos HTML para mostrar la información del personaje
                const col = document.createElement('div');
                col.classList.add('col-md-4', 'mb-4');

                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.classList.add('card-img-top');
                img.src = character.image;

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const name = document.createElement('h5');
                name.classList.add('card-title');
                name.textContent = character.name;

                const species = document.createElement('p');
                species.classList.add('card-text');
                species.textContent = `Species: ${character.species}`;

                const status = document.createElement('p');
                status.classList.add('card-text');
                status.textContent = `Status: ${character.status}`;

                // Adjuntar elementos al DOM
                cardBody.appendChild(name);
                cardBody.appendChild(species);
                cardBody.appendChild(status);
                card.appendChild(img);
                card.appendChild(cardBody);
                col.appendChild(card);
                characterList.appendChild(col);
            });
        } else {
            throw new Error('Error al obtener los datos de la API');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Llamar a la función fetchData cuando se cargue la página
fetchData();

// rickMorty.js


// Función para obtener datos de la API y mostrarlos en la página
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            const characters = data.results;
            const characterList = document.getElementById('characterList');

            characters.forEach(character => {
                // Crear una tarjeta para cada personaje
                const card = document.createElement('div');
                card.classList.add('col-md-4', 'mb-4');

                const cardContent = `
                    <div class="card">
                        <img src="${character.image}" class="card-img-top" alt="${character.name}">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">Status: ${character.status}</p>
                            <p class="card-text">Species: ${character.species}</p>
                        </div>
                    </div>
                `;
                card.innerHTML = cardContent;
                characterList.appendChild(card);
            });
        } else {
            throw new Error('Error al obtener los datos de la API');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Llamar a la función fetchData cuando se cargue la página
fetchData();

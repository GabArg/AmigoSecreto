// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Agregar el nombre al array
        amigos.push(nombre);
        
        // Limpiar el campo de texto
        nombreInput.value = "";
        
        // Mostrar la lista actualizada de amigos
        mostrarListaAmigos();
    }
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos elementos

    // Iterar sobre el array y crear los elementos de la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
    } else {
        // Seleccionar un nombre aleatorio del array
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        
        // Mostrar el resultado
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li><strong>El amigo secreto es:</strong> ${amigoSecreto}</li>`;
    }
}

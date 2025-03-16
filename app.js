// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
    if (!nombreAmigo) {
        alert("Por favor, ingrese un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; //Limpiar la lista.

    amigo.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("Por favor, ingrese al menos un nombre");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigo.length);
    let amigoSecreto = amigo[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; //Limpiar el resultado previo.

    let li = document.createElement("li");
    li.textContent = "Tu amigo secreto es: " + amigoSecreto;
    resultado.appendChild(li);
}
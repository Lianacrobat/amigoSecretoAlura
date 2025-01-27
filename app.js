// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// crear lista de amigos
let sorteoAmigos = [];

function agregarAmigo() {
  let amigo = document.getElementById('amigo').value;
  while (amigo != '')
    if (amigo == '') {
      alert('Debes ingresar un nombre');
    }
    else {
      document.getElementById('listaAmigos').innerHTML += `<li>${amigo}</li>`;
      sorteoAmigos.push(amigo);
      amigo = '';
      limpiarInput();
    }
}

// Limpiar Input
function limpiarInput() {
  document.getElementById('amigo').value = '';
}

function sortearAmigo() {
  let sorteo = Math.floor(Math.random() * sorteoAmigos.length);
  document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${sorteoAmigos[sorteo]}`;
}

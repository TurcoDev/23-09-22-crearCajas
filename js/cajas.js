
function eventosBotones() {
  const botonAgregar = document.getElementById("boton-agregar");
  botonAgregar.addEventListener('click', agregarCajas);
  const botonResetear = document.getElementById("boton-resetear");
  botonResetear.addEventListener('click', resetearCajas);
}

eventosBotones();

let contador = 1;
function agregarCajas() {
  const contenedor = document.getElementById("contenedor");
  console.log(contenedor);

  // contenedor.innerHTML = contenedor.innerHTML + `<div class="cajaHija"></div>`;
  contenedor.innerHTML += `<div class="cajaHija">${contador}</div>`;
  contador++; // contador + 1;
}

function resetearCajas() {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = '';
  contador = 1;
}

// Segunda version de agregado de cajas creando los elementos
function agregarCajas2() {
  const contenedor = document.getElementById("contenedor");
  console.log(contenedor);

  const nuevaCaja = document.createElement('div');
  nuevaCaja.classList.add('cajaHija');
  nuevaCaja.innerText = contador;
  contenedor.appendChild(nuevaCaja);
  
  contador++; // contador + 1;
}










// agregarCajas();





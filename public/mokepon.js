const sectionOcultarReinicio = document.getElementById("reinicio");
const sectionOcultar = document.getElementById("Seleccionar-Ataque");

const botonMascota = document.getElementById("boton-mascota");
const reiniciarJuego = document.getElementById("reinicio");

sectionOcultarReinicio.style.display = "none";
const sectionOcultarSeleccion = document.getElementById("Seleccionar-Mascota");

const spanJugador = document.getElementById("mascota-jugador");
const spanRival = document.getElementById("mascota-rival");

const spanRivalvida = document.getElementById("vida-rival");
const spanJugadovida = document.getElementById("vida-jugador");

const sectionMensajes = document.getElementById("Resultado");
const Jugador = document.getElementById("Jugador");
const Rival = document.getElementById("Rival");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contenedorAtaques = document.getElementById("contenedor-ataques");

const sectionVerMapa = document.getElementById("VerMapa");
const mapa = document.getElementById("mapa");

let jugadorId = null;
let enemigoId = null;
let mokepones = [];
let mokeponesEnemigos = [];
let ataqueJugador = [];
let ataqueRival = [];
let botones = [];
let opcionDemokepones;
let inputTortugom;
let inputFueguitom;
let inputPezcom;
let inputTortucle;
let inputLavaQua;
let inputDraconux;
let mascotaJugador;
let mascotaJugadorObjeto;
let botonFuego;
let botonTierra;
let botonAgua;
let ataquesMokepom;
let ataquesMokepomEnemigo;
let indexAtaqueJugador;
let indexAtaqueRival;
let victoriasJugador = 0;
let victoriasRival = 0;

let vidaJugador = 3;
let vidaRival = 3;
let marco = mapa.getContext("2d");
let mapaBackground = new Image();
mapaBackground.src = "./assets/mokemap.png";
let intervalo;
let alturaMapa;
let anchoMapa = innerWidth - 20;
const maxAnchuraMap = 1000;
if (anchoMapa > maxAnchuraMap) {
  anchoMapa = maxAnchuraMap - 20;
}

alturaMapa = (anchoMapa * 500) / 1000;

mapa.width = anchoMapa;
mapa.height = alturaMapa;

class Mokepom {
  constructor(nombre, foto, vida, mapaFoto, id = null) {
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.ancho = 50;
    this.alto = 50;
    this.x = aleatorio(0, mapa.width - this.ancho);
    this.y = aleatorio(0, mapa.height - this.alto);
    this.mapaFoto = new Image();
    this.mapaFoto.src = mapaFoto;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  VisualizarMokepom() {
    marco.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}
//mascotas mokepom
let tortugom = new Mokepom(
  "Tortugom",
  "./assets/57910997dd0895a56e8b4575.webp",
  5,
  "./assets/blastoiceicono.jpg"
);
let fueguitom = new Mokepom(
  "Fueguitom",
  "./assets/mokepons_mokepon_ratigueya_attack.png",
  5,
  "./assets/ratigueya.png"
);
let pezcom = new Mokepom(
  "Pezcom",
  "./assets/mokepons_mokepon_hipodoge_attack.png",
  5,
  "./assets/hipodoge.png"
);
let tortucle = new Mokepom(
  "Tortucle",
  "./assets/mokepons_mokepon_capipepo_attack.png",
  5,
  "./assets/capipepo.png"
);
let lavaqua = new Mokepom(
  "LavaQua",
  "./assets/237-2378142_starter-pokmon-pokemones-creados-por-fans.png",
  5,
  "./assets/lavaqua.png"
);
let draconux = new Mokepom(
  "Draconux",
  "./assets/pokemon-fuecoco.webp",
  5,
  "./assets/draconuxicon.png"
);
const tortugomAtaques = [
  { nombre: "Agua", id: "agua" },
  { nombre: "Agua", id: "agua" },
  { nombre: "Agua", id: "agua" },
  { nombre: "Fuego", id: "fuego" },
  { nombre: "Tierra", id: "tierra" },
];
tortugom.ataques.push(...tortugomAtaques);

const fueguitomAtaques = [
  { nombre: "Fuego", id: "fuego" },
  { nombre: "Fuego", id: "fuego" },
  { nombre: "Fuego", id: "fuego" },
  { nombre: "Tierra", id: "tierra" },
  { nombre: "Agua", id: "agua" },
];
fueguitom.ataques.push(...fueguitomAtaques);

const tortucleAtaques = [
  { nombre: "Tierra", id: "tierra" },
  { nombre: "Tierra", id: "tierra" },
  { nombre: "Tierra", id: "tierra" },
  { nombre: "Fuego", id: "fuego" },
  { nombre: "Agua", id: "agua" },
];
tortucle.ataques.push(...tortucleAtaques);

const lavaquaAtaques = [
  { nombre: "Agua", id: "agua" },
  { nombre: "Agua", id: "agua" },
  { nombre: "Agua", id: "agua" },
  { nombre: "Tierra", id: "tierra" },
  { nombre: "Fuego", id: "fuego" },
];
lavaqua.ataques.push(...lavaquaAtaques);

const draconuxAtaques = [
  { nombre: "Agua", id: "agua" },
  { nombre: "Agua", id: "agua" },
  { nombre: "Agua", id: "agua" },
  { nombre: "Fuego", id: "fuego" },
  { nombre: "Tierra", id: "tierra" },
];
draconux.ataques.push(...draconuxAtaques);

const pezcomAtaques = [
  { nombre: "Agua", id: "agua" },
  { nombre: "Agua", id: "agua" },
  { nombre: "Agua", id: "agua" },
  { nombre: "Tierra", id: "tierra" },
  { nombre: "Agua", id: "agua" },
];
pezcom.ataques.push(...pezcomAtaques);
mokepones.push(tortugom, fueguitom, tortucle, lavaqua, draconux, pezcom);

function iniciarJuego() {
  mokepones.forEach((mokepon) => {
    opcionDemokepones = `
        <input type="radio" name="mokepons" id=${mokepon.nombre} />

        <label class="seleccionMokepom" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
                    
                </label>        
        `;

    contenedorTarjetas.innerHTML += opcionDemokepones;

    inputTortugom = document.getElementById("Tortugom");
    inputFueguitom = document.getElementById("Fueguitom");
    inputTortucle = document.getElementById("Tortucle");
    inputLavaQua = document.getElementById("LavaQua");
    inputDraconux = document.getElementById("Draconux");
    inputPezcom = document.getElementById("Pezcom");
  });

  sectionOcultar.style.display = "none";
  sectionVerMapa.style.display = "none";
  botonMascota.addEventListener("click", seleccionarMascota);
  reiniciarJuego.addEventListener("click", botonReinicio);
  unirseAlJuego();
}

function unirseAlJuego() {
  fetch("http://192.168.0.105:8080/unirse").then(function (res) {
    if (res.ok) {
      res.text().then(function (respuesta) {
        console.log(respuesta);
        jugadorId = respuesta;
      });
    }
  });
}

function seleccionarMascota() {
  sectionOcultarSeleccion.style.display = "none";

  if (inputTortugom.checked) {
    spanJugador.innerHTML = inputTortugom.id;
    mascotaJugador = inputTortugom.id;
  } else if (inputFueguitom.checked) {
    spanJugador.innerHTML = inputFueguitom.id;
    mascotaJugador = inputFueguitom.id;
  } else if (inputTortucle.checked) {
    spanJugador.innerHTML = inputTortucle.id;
    mascotaJugador = inputTortucle.id;
  } else if (inputLavaQua.checked) {
    spanJugador.innerHTML = inputLavaQua.id;
    mascotaJugador = inputLavaQua.id;
  } else if (inputDraconux.checked) {
    spanJugador.innerHTML = inputDraconux.id;
    mascotaJugador = inputDraconux.id;
  } else if (inputPezcom.checked) {
    spanJugador.innerHTML = inputPezcom.id;
    mascotaJugador = inputPezcom.id;
  } else {
    alert("Usted no selecciono ningun mokepom.");
    botonReinicio();
  }
  seleccionarMokepon(mascotaJugador);
  extraerAtaques(mascotaJugador);
  sectionVerMapa.style.display = "flex";
  iniciarMapa();
}
// ``
function seleccionarMokepon(mascotaJugador) {
  fetch(`http://192.168.0.105:8080/mokepon/${jugadorId}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mokepon: mascotaJugador,
    }),
  });
}

function extraerAtaques(mascotaJugador) {
  let ataques;

  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }

  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepom = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>`;

    contenedorAtaques.innerHTML += ataquesMokepom;
  });
  botonFuego = document.getElementById("fuego");
  botonTierra = document.getElementById("tierra");
  botonAgua = document.getElementById("agua");
  botones = document.querySelectorAll(".BAtaque");
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "Fuego") {
        ataqueJugador.push("fuego");
        boton.style.background = "#112F58";
        boton.disabled = true;
      } else if (e.target.textContent === "Agua") {
        ataqueJugador.push("agua");
        boton.style.background = "#112F58";
        boton.disabled = true;
      } else if (e.target.textContent === "Tierra") {
        ataqueJugador.push("tierra");
        boton.style.background = "#112F58";
        boton.disabled = true;
      }
      if (ataqueJugador.length === 5) {
        enviarAtaques();
      } else {
        console.log("faltan ataques");
      }
    });
  });
}

function enviarAtaques() {
  fetch(`http://192.168.0.105:8080/mokepon/${jugadorId}/ataques`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ataques: ataqueJugador,
    }),
  });
  intervalo = setInterval(obtenerAtaques, 50);
}

function obtenerAtaques() {
  fetch(`http://192.168.0.105:8080/mokepon/${enemigoId}/ataques`).then(
    function (res) {
      if (res.ok) {
        res.json().then(function ({ ataques }) {
          if (ataques.length === 5) {
            ataqueRival = ataques;
            combate();
          }
        });
      }
    }
  );
}

function seleccionarMascotaEnemigo(enemigo) {
  //let aleatorios = aleatorio(0, mokepones.length - 1);

  spanRival.innerHTML = enemigo.nombre;
  ataquesMokepomEnemigo = enemigo.ataques;
  secuenciaAtaque();
}

function ataqueRivalAleatorio() {
  let ataqueAleatorio = aleatorio(0, ataquesMokepomEnemigo.length - 1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueRival.push("Fuego");
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueRival.push("Tierra");
  } else {
    ataqueRival.push("Agua");
  }
  iniciarPelea();
}

function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}

function ambosJugadores(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];

  indexAtaqueRival = ataqueRival[enemigo];
}

function combate() {
  clearInterval(intervalo);
  //  Fuego , Agua , Tierra
  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] == ataqueRival[index]) {
      ambosJugadores(index, index);
      crearMensaje("Empate");
    } else if (
      ataqueJugador[index] === "Agua" &&
      ataqueRival[index] === "Fuego"
    ) {
      ambosJugadores(index, index);
      crearMensaje("Ganaste");
      victoriasJugador = victoriasJugador + 1;
      spanJugadovida.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] == "Tierra" &&
      ataqueRival[index] == "Agua"
    ) {
      ambosJugadores(index, index);
      crearMensaje("Ganaste");
      victoriasJugador = victoriasJugador + 1;
      spanJugadovida.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] == "Fuego" &&
      ataqueRival[index] == "Tierra"
    ) {
      ambosJugadores(index, index);
      crearMensaje("Ganaste");
      victoriasJugador = victoriasJugador + 1;
      spanJugadovida.innerHTML = victoriasJugador;
    } else {
      ambosJugadores(index, index);
      crearMensaje("perdiste");
      victoriasRival = victoriasRival + 1;
      spanRivalvida.innerHTML = victoriasRival;
    }
  }

  Ganador();
}

function crearMensaje(resultado) {
  let parrafoJugador = document.createElement("p");
  let parrafoRival = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  parrafoJugador.innerHTML = indexAtaqueJugador;
  parrafoRival.innerHTML = indexAtaqueRival;

  Jugador.appendChild(parrafoJugador);
  Rival.appendChild(parrafoRival);
}
function crearMensajeFinal(resultadoFinal) {
  sectionOcultarReinicio.style.display = "block";

  sectionMensajes.innerHTML = resultadoFinal;
}

function Ganador() {
  if (victoriasJugador == victoriasRival) {
    alert("EMPATE! :)");
    crearMensajeFinal("Tenemos un empate !");
  } else if (victoriasJugador > victoriasRival) {
    alert("Enhorabuena Haz ganado :D");
    crearMensajeFinal("Felicitaciones haz Ganado. =D");
  } else {
    alert("Haz sido derrotado :(");
    crearMensajeFinal("Usted ha sido Derrotado. :(");
  }
}

function botonReinicio() {
  location.reload();
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function visualMapa() {
  if (
    mascotaJugadorObjeto !== null &&
    typeof mascotaJugadorObjeto !== "undefined"
  ) {
    mascotaJugadorObjeto.x =
      mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y =
      mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    marco.clearRect(0, 0, mapa.width, mapa.height);
    marco.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);

    if (typeof mascotaJugadorObjeto.VisualizarMokepom === "function") {
      mascotaJugadorObjeto.VisualizarMokepom();
    } else {
      console.log("no tiene el metodo visualizarMokepom");
    }

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y);
    mokeponesEnemigos.forEach(function (mokepon) {
      if (mokepon != undefined) {
        mokepon.VisualizarMokepom();
        colision(mokepon);
      } else {
        console.log("error al intentar pintar enemigos");
      }
    });
  } else {
    console.log("mascotajugadorobjeto es null");
  }
}
function enviarPosicion(x, y) {
  fetch(`http://192.168.0.105:8080/mokepon/${jugadorId}/posicion`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      x,
      y,
    }),
  }).then(function (res) {
    if (res.ok) {
      res.json().then(function ({ enemigos }) {
        console.log(enemigos);

        mokeponesEnemigos = enemigos.map(function (enemigo) {
          let mokeponEnemigo = null;

          if (enemigo.mokepon != undefined) {
            const mokeponNombre = enemigo.mokepon.nombre || "";

            if (mokeponNombre === "Tortugom") {
              mokeponEnemigo = new Mokepom(
                "Tortugom",
                "./assets/57910997dd0895a56e8b4575.webp",
                5,
                "./assets/blastoiceicono.jpg",
                enemigo.id
              );
            } else if (mokeponNombre === "Fueguitom") {
              mokeponEnemigo = new Mokepom(
                "Fueguitom",
                "./assets/mokepons_mokepon_ratigueya_attack.png",
                5,
                "./assets/ratigueya.png",
                enemigo.id
              );
            } else if (mokeponNombre === "Pezcom") {
              mokeponEnemigo = new Mokepom(
                "Pezcom",
                "./assets/mokepons_mokepon_hipodoge_attack.png",
                5,
                "./assets/hipodoge.png",
                enemigo.id
              );
            } else if (mokeponNombre === "Tortucle") {
              mokeponEnemigo = new Mokepom(
                "Tortucle",
                "./assets/mokepons_mokepon_capipepo_attack.png",
                5,
                "./assets/capipepo.png",
                enemigo.id
              );
            } else if (mokeponNombre === "LavaQua") {
              mokeponEnemigo = new Mokepom(
                "LavaQua",
                "./assets/237-2378142_starter-pokmon-pokemones-creados-por-fans.png",
                5,
                "./assets/lavaqua.png",
                enemigo.id
              );
            } else if (mokeponNombre === "Draconux") {
              mokeponEnemigo = new Mokepom(
                "Draconux",
                "./assets/pokemon-fuecoco.webp",
                5,
                "./assets/draconuxicon.png",
                enemigo.id
              );
            }

            mokeponEnemigo.x = enemigo.x;
            mokeponEnemigo.y = enemigo.y;
            return mokeponEnemigo;
          }
        });
      });
    }
  });
}
function moverMokepomDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}
function moverMokepomAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}
function moverMokepomArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
}
function moverMokepomIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}
function detenermovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}
function PresionasteTecla(event) {
  switch (event.key) {
    case "ArrowUp":
      moverMokepomArriba();
      break;

    case "ArrowRight":
      moverMokepomDerecha();
      break;
    case "ArrowDown":
      moverMokepomAbajo();
      break;
    case "ArrowLeft":
      moverMokepomIzquierda();
      break;
    default:
      break;
  }
}
function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMokepom(mascotaJugador);
  intervalo = setInterval(visualMapa, 30);

  window.addEventListener("keydown", PresionasteTecla);
  window.addEventListener("keyup", detenermovimiento);
}

function obtenerObjetoMokepom() {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}

function colision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const izquierdaEnemigo = enemigo.x;
  const derechaEnemigo = enemigo.x + enemigo.ancho;

  const arribaMascota = mascotaJugadorObjeto.y;
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
  const izquierdaMascota = mascotaJugadorObjeto.x;
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;

  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  }
  if (enemigo.x == undefined || enemigo.y == undefined) {
    return;
  }
  detenermovimiento();
  console.log("se detecto colision");
  enemigoId = enemigo.id;
  clearInterval(intervalo);
  sectionOcultar.style.display = "flex";
  sectionVerMapa.style.display = "none";
  seleccionarMascotaEnemigo(enemigo);
  alert("En combate con " + enemigo.nombre + "!");
}
window.addEventListener("load", iniciarJuego);

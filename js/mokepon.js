const sectionOcultarReinicio = document.getElementById('reinicio')
const sectionOcultar = document.getElementById('Seleccionar-Ataque')
const botonMascota = document.getElementById('boton-mascota')
const reiniciarJuego = document.getElementById('reinicio')


const sectionOcultarSeleccion = document.getElementById('Seleccionar-Mascota')

const spanJugador = document.getElementById('mascota-jugador')

const spanRival = document.getElementById('mascota-rival')

const spanRivalvida = document.getElementById('vida-rival')
const spanJugadovida = document.getElementById('vida-jugador')

const sectionMensajes = document.getElementById('Resultado')
const Jugador = document.getElementById('Jugador')
const Rival = document.getElementById('Rival')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let ataqueJugador = []
let ataqueRival = []
let opcionDemokepones
let inputTortugom 
let inputFueguitom 
let inputPezcom 
let inputTortucle 
let inputLavaQua 
let inputDraconux 
let mascotaJugador
let ataquesMokepom
let botonFuego
let botonTierra 
let botonAgua
let ataquesMokepomEnemigo 
let indexAtaqueJugador
let indexAtaqueRival
let victoriasJugador  = 0
let victoriasRival    = 0
let botones = []
let vidaJugador = 3
let vidaRival = 3



class Mokepom{

    constructor(nombre,foto,vida){

        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }

}

let tortugom = new Mokepom('Tortugom',"./assets/57910997dd0895a56e8b4575.webp",5)
let fueguitom = new Mokepom('Fueguitom',"./assets/mokepons_mokepon_ratigueya_attack.png",5)
let pezcom = new Mokepom('Pezcom','./assets/mokepons_mokepon_hipodoge_attack.png',5)
let tortucle = new Mokepom('Tortucle','./assets/mokepons_mokepon_capipepo_attack.png',5)
let lavaQua = new Mokepom('LavaQua','./assets/237-2378142_starter-pokmon-pokemones-creados-por-fans.png',5)
let draconux = new Mokepom('Draconux','s./assets/pokemon-fuecoco.webp',5)

    tortugom.ataques.push(

        {nombre:'Agua',id:'agua'},
        {nombre:'Agua',id:'agua'},
        {nombre:'Agua',id:'agua'},
        {nombre:'fuego',id:'fuego'},
        {nombre:'tierra',id:'tierra'}
    )
    fueguitom.ataques.push(

        {nombre:'Fuego',id:'fuego'},
        {nombre:'Fuego',id:'fuego'},
        {nombre:'Fuego',id:'fuego'},
        {nombre:'tierra',id:'tierra'},
        {nombre:'agua',id:'agua'}
    )
    tortucle.ataques.push(

        {nombre:'Tierra',id:'tierra'},
        {nombre:'Tierra',id:'tierra'},
        {nombre:'Tierra',id:'tierra'},
        {nombre:'fuego',id:'fuego'},
        {nombre:'agua',id:'agua'}
    )    
    lavaQua.ataques.push(

        {nombre:'Agua',id:'agua'},
        {nombre:'Agua',id:'agua'},
        {nombre:'Agua',id:'agua'},
        {nombre:'tierra',id:'tierra'},
        {nombre:'fuego',id:'fuego'}
    )
    draconux.ataques.push(

        {nombre:'Agua',id:'agua'},
        {nombre:'Agua',id:'agua'},
        {nombre:'Agua',id:'agua'},
        {nombre:'fuego',id:'fuego'},
        {nombre:'tierra',id:'tierra'}
    )
    pezcom.ataques.push(

        {nombre:'Agua',id:'agua'},
        {nombre:'Agua',id:'agua'},
        {nombre:'Agua',id:'agua'},
        {nombre:'tierra',id:'tierra'},
        {nombre:'fuego',id:'fuego'}
    )

        mokepones.push(tortugom,fueguitom,tortucle,lavaQua,draconux,pezcom)

function iniciarJuego(){

    
    sectionOcultarReinicio.style.display = 'none'
    
    mokepones.forEach((mokepon)=>{
        opcionDemokepones =`
        <label class="seleccionMokepom" for="${mokepon.nombre}>${mokepon.nombre}
                    <img src=${mokepon.foto} alt=${mokepon.nombre}>
                    
                </label>
                <input type="radio" name="mokepons" id=${mokepon.nombre}> 
        `
     inputTortugom = document.getElementById('Tortugom')
     inputFueguitom = document.getElementById('Fueguitom')
     inputPezcom = document.getElementById('Pezcom')
     inputTortucle = document.getElementById('Tortucle')
     inputLavaQua = document.getElementById('LavaQua')
     inputDraconux = document.getElementById('Draconux')



        contenedorTarjetas.innerHTML += opcionDemokepones

     

    })

    sectionOcultar.style.display = 'none'
    botonMascota.addEventListener('click', seleccionarMascota)
    reiniciarJuego.addEventListener('click', botonReinicio)
}


function seleccionarMascota(){

    sectionOcultarSeleccion.style.display = 'none'
    sectionOcultar.style.display = 'flex'
    
    if(inputTortugom.checked){
        spanJugador.innerHTML =  inputTortugom.id
        mascotaJugador = inputTortugom.id
        
    
    }else if(inputFueguitom.checked)  {
        spanJugador.innerHTML =  inputFueguitom.id
        mascotaJugador = inputFueguitom.id
       
    
    }else if(inputPezcom.checked){
        spanJugador.innerHTML =  inputPezcom.id
        mascotaJugador = inputPezcom.id

    }else if(inputTortucle.checked){
        spanJugador.innerHTML =  inputTortucle.id
        mascotaJugador = inputTortucle.id
      

    }else if (inputLavaQua.checked){
        spanJugador.innerHTML =  inputLavaQua.id
        mascotaJugador = inputLavaQua.id
     

    }else if(inputDraconux.checked){
        spanJugador.innerHTML =  inputDraconux.id
        mascotaJugador = inputDraconux.id
    

    }else{

        alert("Usted no selecciono ningun mokepom.")
        botonReinicio()
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()

}

function extraerAtaques(mascotaJugador){

    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
        
    }
    MostrarAtaques(ataques)
    
}

function MostrarAtaques(ataques){

    ataques.forEach((ataque) =>{
        ataquesMokepom = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML+= ataquesMokepom
    })

     botonFuego = document.getElementById('fuego')
     botonTierra = document.getElementById('tierra')
     botonAgua = document.getElementById('agua')
     botones = document.querySelectorAll('.Bataque')
     
     botonFuego.addEventListener('click',ataqueFuego)
     botonTierra.addEventListener('click',ataqueTierra)
     botonAgua.addEventListener('click',ataqueAgua)
}

function secuenciaAtaque(){

    botones.forEach((boton) =>{
        boton.addEventListener('click',(e)=>{
            if(e.target.textContent === 'Fuego' ){
                ataqueJugador.push('FUEGO')
                boton.style.background = "#112F58"
            }else if(e.target.textContent === 'Agua'){
                ataqueJugador.push('AGUA')
                boton.style.background = "#112F58"
            }else if(e.target.textContent === 'Tierra'){
                ataqueJugador.push('TIERRA')
                boton.style.background = "#112F58"
            }
            ataqueRivalAleatorio()
        })
        
    })
    
}


function ataqueRivalAleatorio(){

    let ataqueAleatorio = aleatorio(0,ataquesMokepomEnemigo.length-1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1 ){
        
        ataqueRival.push('Fuego')

    }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){

        ataqueRival.push('Tierra')

    }else {
        ataqueRival.push('Agua')
    }
    
    iniciarPelea()
}

    function iniciarPelea(){

        if(ataqueJugador === 5){
            combate()
        }


    }
    function crearMensaje(resultado){

    let parrafoJugador = document.createElement('p')
    let parrafoRival = document.createElement('p')

    sectionMensajes.innerHTML =   resultado
    parrafoJugador.innerHTML = indexAtaqueJugador
    parrafoRival.innerHTML =   indexAtaqueRival
    
    
    Jugador.appendChild(parrafoJugador)
    Rival.appendChild(parrafoRival)

    // let parrafo = document.createElement("p")
    // parrafo.innerHTML = "Tu mascota ataco con:  "+ataqueJugador+", la mascota de tu enemigo ataco con: "+ataqueRival+ " ->"+ resultado 
    
}
    function crearMensajeFinal(resultadoFinal){

    
    sectionOcultarReinicio.style.display = 'block'

    

    sectionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled= true

    
    botonTierra.disabled = true

    
    botonAgua.disabled = true
}
    function ambosJugadores(jugador, enemigo){

        indexAtaqueJugador = ataqueJugador[jugador]

        indexAtaqueRival = ataqueRival[enemigo]

    }

    function combate(){
//  Fuego , Agua , Tierra
        for (let index = 0; index < ataqueJugador.length; index++) {

            if(ataqueJugador[index] == ataqueRival[index]){

                ambosJugadores(index, index)
                crearMensaje('Empate')
                victoriasJugador = victoriasJugador + 1
                spanJugadovida.innerHTML = victoriasJugador

            }else if(ataqueJugador[index] === 'Agua' &&  ataqueRival[index] === 'Fuego'){
                ambosJugadores(index, index)
                crearMensaje('Ganaste')
                victoriasJugador = victoriasJugador + 1
                
                spanJugadovida.innerHTML = victoriasJugador

            }else if(ataqueJugador[index] =='Tierra' && ataqueRival[index] =='Agua'){
                ambosJugadores(index, index)
                crearMensaje('Ganaste')
                victoriasJugador = victoriasJugador + 1
                spanJugadovida.innerHTML = victoriasJugador

                
            }else if(ataqueJugador[index] =='Fuego' && ataqueRival[index] =='Tierra'){
                ambosJugadores(index, index)
                crearMensaje('Ganaste')
                victoriasJugador = victoriasJugador + 1
                spanJugadovida.innerHTML = victoriasJugador

                
            }else{
                ambosJugadores(index, index)
                crearMensaje('perdiste')
                victoriasRival = victoriasRival + 1
                spanRivalvida.innerHTML = victoriasRival

            }
            
        }

    Ganador()

}

    function Ganador(){
    
        if(victoriasJugador == victoriasRival){

            alert('EMPATE! :)')
            crearMensajeFinal('Tenemos un empate !')
        }else if(victoriasJugador > victoriasRival){
            alert('Enhorabuena Haz ganado :D')  
            crearMensajeFinal('Felicitaciones haz Ganado. =D')
        }else{
            alert('Haz sido derrotado :(')  
            crearMensajeFinal('Usted ha sido Derrotado. :(')
        }

        

}



    function seleccionarMascotaEnemigo(){

        let aleatorios = aleatorio(0,mokepones.length-1)
        
        spanRival.innerHTML = mokepones[aleatorios].nombre
        ataquesMokepomEnemigo = mokepones[aleatorios].ataques
        secuenciaAtaque()
}
    function botonReinicio(){

     location.reload()

}
    function aleatorio(min,max){
                    
        return Math.floor(Math.random()*(max-min+1)+min)

}

window.addEventListener('load',iniciarJuego)




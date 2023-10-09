const agregarJugadores = () => {
    let jugadores = document.getElementsByClassName("jugadores")[0];
    let jugadorUno = document.createElement("section");
    let jugadorDos = document.createElement("section");
    let contenedorTituloBotonUno=document.createElement("div")
    let contenedorTituloBotonDos=document.createElement("div")
    let tituloUno=document.createElement("h1")
    let tituloDos=document.createElement("h1")
    let botonUno=document.createElement("button")
    let botonDos=document.createElement("button")

    tituloUno.textContent="Jugador # 1"
    tituloDos.textContent="Jugador # 2"
    botonUno.textContent="Agregar"
    botonDos.textContent="Agregar"

    jugadorUno.classList.add("jugador");
    jugadorDos.classList.add("jugador");
    contenedorTituloBotonUno.classList.add("contenedor-js");
    contenedorTituloBotonDos.classList.add("contenedor-js");

    jugadores.appendChild(jugadorUno); 
    jugadores.appendChild(jugadorDos);
    jugadorUno.appendChild(contenedorTituloBotonUno);
    jugadorDos.appendChild(contenedorTituloBotonDos);
    contenedorTituloBotonUno.appendChild(tituloUno);
    contenedorTituloBotonUno.appendChild(botonUno);
    contenedorTituloBotonDos.appendChild(tituloDos);
    contenedorTituloBotonDos.appendChild(botonDos);

    botonUno.addEventListener("click", ()=>{
        let numeroDePokemon=generarNumeroAleatorio(1,34);
        let pokemon1=document.createElement("img");
        pokemon1.classList.add("pokemon");
        pokemon1.src= "./assets/img/"+numeroDePokemon+".png";
        jugadorUno.appendChild(pokemon1);
    })

    botonDos.addEventListener("click", ()=>{
        let numeroDePokemon=generarNumeroAleatorio(1,34);
        let pokemon2=document.createElement("img");
        pokemon2.classList.add("pokemon")
        pokemon2.src= "./assets/img/"+numeroDePokemon+".png";
        jugadorDos.appendChild(pokemon2);
    })

};

function generarNumeroAleatorio(min,max){
    const NumeroAleatorio=Math.random();
    const numeroEnRango=Math.floor(NumeroAleatorio*(max - min + 1))+min;
    return numeroEnRango;
}





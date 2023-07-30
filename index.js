let hora = document.getElementById("hora");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let amOpm = document.getElementById("amYpm")
function formatoDosDigitos(numero) {

    if (numero < 10) {
        return `0${numero}`
    }
    else { return numero }

}
function actualizarHora() {
    const fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let minutosActual = fechaActual.getMinutes();
    let segundosActual = fechaActual.getSeconds();

    hora.innerHTML = horaActual
    minutos.innerHTML = minutosActual
    segundos.innerHTML = segundosActual

    if (horaActual > 12) {
        amOpm.innerHTML = "p.m."
    }
    else { amOpm.innerHTML = "a.m." }
    hora.innerHTML = formatoDosDigitos(horaActual);
    minutos.innerHTML = formatoDosDigitos(minutosActual);
    segundos.innerHTML = formatoDosDigitos(segundosActual);
}


actualizarHora();

setInterval(actualizarHora, 1000);




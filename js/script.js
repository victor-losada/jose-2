function Guardar() {
let valorp1, valorp2, valorp3

valorp1= document.getElementById("p1").value
localStorage.setItem("p1", valorp1)
window.location="respuesta.html"

valorp2= document.getElementById("p2").value
localStorage.setItem("p2", valorp2)
window.location="respuesta.html"

valorp3= document.getElementById("p3").value
localStorage.setItem("p3", valorp3)
window.location="respuesta.html"

}
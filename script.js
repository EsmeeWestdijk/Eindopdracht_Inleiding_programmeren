console.log("hallo wereld")



let glazuurBlauw = document.querySelector("#glazuurBlauw")
let glazuurOranje = document.querySelector("#glazuurOranje")
let glazuurPaars = document.querySelector("#glazuurPaars")

let glazuurBlauwMenu = document.querySelector("#blauwMenu")
let glazuurOranjeMenu = document.querySelector("#oranjeMenu")
let glazuurPaarsMenu = document.querySelector("#paarsMenu")

glazuurBlauwMenu.addEventListener("click", () => {
    glazuurBlauw.classList.toggle("show")

})

glazuurOranjeMenu.addEventListener("click", () => {
    glazuurOranje.classList.toggle("show")
})

glazuurPaarsMenu.addEventListener("click", () => {
    glazuurPaars.classList.toggle("show")
})

let sprinkelsOverlay = document.querySelector("#sprinkelsOverlay")
let chocoladeOverlay = document.querySelector("#chocoladeOverlay")
let kaarsjesOverlay = document.querySelector("#kaarsjesTop")

let chocoladeMenu = document.querySelector("#chocoladeMenu")
let sprinkelsMenu = document.querySelector("#sprinkelsMenu")
let kaarsjesMenu = document.querySelector("#kaarsjesMenu")

chocoladeMenu.addEventListener("click", () => {
    chocoladeOverlay.classList.toggle("show")

})

sprinkelsMenu.addEventListener("click", () => {
    sprinkelsOverlay.classList.toggle("show")
})

kaarsjesMenu.addEventListener("click", () => {
    kaarsjesOverlay.classList.toggle("show")
})



let elementH1 = document.querySelector("h1")

let button = document.querySelector("button")

function veranderTitel() {
    elementH1.textContent = "Gefeliciteerd, je taart is klaar!"
}

button.addEventListener("click", veranderTitel)

let confettiKlaar = document.querySelector("#confetti")


button.addEventListener("click", () => {
    confettiKlaar.classList.toggle("show")
})

/*button.addEventListener("click", () => {
    if (
        glazuurBlauw.classList.contains("show") ||
        glazuurOranje.classList.contains("show") ||
        glazuurPaars.classList.contains("show") ||
        chocoladeOverlay.classList.contains("show") ||
        sprinkelsOverlay.classList.contains("show") ||
        kaarsjesOverlay.classList.contains("show") 
    ){
       veranderTitel
    } else {
        console.log("probeer nog wat toe te voegen"); 
    }
})*/


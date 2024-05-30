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

let button = document.querySelector("#yeey")

let confettiKlaar = document.querySelector("#confetti")

/* bron audio: https://www.youtube.com/watch?v=uGsRDqPEPtI*/
let audioElement = document.querySelector("#audio")


/*--Samen met Lieke--*/
button.addEventListener("click", () => {
    if (
        glazuurBlauw.classList.contains("show") ||
        glazuurOranje.classList.contains("show") ||
        glazuurPaars.classList.contains("show") ||
        chocoladeOverlay.classList.contains("show") ||
        sprinkelsOverlay.classList.contains("show") ||
        kaarsjesOverlay.classList.contains("show")
    ) {
        confettiKlaar.classList.toggle("show")
        audioElement.play();
        elementH1.textContent = "Gefeliciteerd, je taart is klaar!"

        setTimeout(() => {
            elementH1.textContent = "";
            audioElement.pause();
            audioElement.currentTime = 0;
            confettiKlaar.classList.toggle("show")
        }, 20000);


    } else {
        elementH1.textContent = "Probeer nog wat toe te voegen aan de taart"
    }
})

/* bron onderzoek audio: 
   Chatgpt promt: hoe kan ik een audio toevoegen aan mijn javascript?*/

/*bron onderzoek audio:
  Chatgpt promt: hoe stop ik de audio na 30 sec + mijn code?*/


/*--samen met Bente--*/

const veranderBakkerij = document.querySelector("#bakkerij")
const veranderWoonkamer = document.querySelector("#woonkamer")
const veranderKeuken = document.querySelector("#keuken")

/*https://bakkerijmaris.be/*/
veranderBakkerij.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(image/achtergrond_bakkerij.jpeg)"
});

/*https://www.woonenzo.nl/complete-woonkamers/complete-woonkamer-high-rock-met-barkast*/
veranderWoonkamer.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(image/achtergrond_woonkamer.jpeg)"
});

/*https://www.kitchen4all.nl/keuken-inspiratie/*/
veranderKeuken.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(image/achtergrond_keuken.jpeg)"
}); 


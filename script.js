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


button.addEventListener("click", () => {
    if (
        glazuurBlauw.classList.contains("show") ||
        glazuurOranje.classList.contains("show") ||
        glazuurPaars.classList.contains("show") ||
        chocoladeOverlay.classList.contains("show") ||
        sprinkelsOverlay.classList.contains("show") ||
        kaarsjesOverlay.classList.contains("show") 
    ){
       elementH1.textContent = "Gefeliciteerd, je taart is klaar!"
       confettiKlaar.classList.toggle("show")
       audioElement.play();

       setTimeout(() => {
        audioElement.pause();
        audioElement.currentTime = 0; // Terugspoelen naar het begin
    }, 10000);

    } else {
        elementH1.textContent = "Probeer nog wat toe te voegen aan de taart"
    }
})

let audioElement = document.querySelector("#audio")


/* bron audio: https://www.youtube.com/watch?v=uGsRDqPEPtI*/

/* bron onderzoek audio: 
   Chatgpt promt: hoe kan ik een audio toevoegen aan mijn javascript?
   Antwoord: Je moet een <audio> element in je HTML-bestand toevoegen. Dit element bevat de audiobron die je wilt afspelen.
   audioElement.play toevoegen in Javascript.*/

/*bron onderzoek audio:
  Chatgpt promt: hoe stop ik de audio na 30 sec + mijn code?
  Antwoord: // Stop de audio na 30 seconden (30000 milliseconden)
                setTimeout(() => {
                    audioElement.pause();
                    audioElement.currentTime = 0; // Terugspoelen naar het begin
                }, 30000);
*/ 


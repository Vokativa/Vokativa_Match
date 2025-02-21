
let matchedPairs = 0;
const emoji=["\u{1F30D}","\u{1F432}","\u{1F47D}","\u{1F47B}","\u{1F480}","\u{1F4A3}"
]
let cards=[...emoji,...emoji]

//utili sort y mathrandom en cards
cards = cards.sort(()=>Math.random()-0.5)
//crear contenerdor, div id con script //// Crear el contenedor del juego
let container = document.createElement("div")
container.id="container"
document.body.appendChild(container)
let flippedCards = [];


//cards con for eacht, dentro crear div, clase card y hideen
// Crear las cartas y agregarlas al contenedor
cards.forEach((symbol, index) => {
    let card = document.createElement('div');
    card.classList.add('card', 'hidden');
    card.dataset.symbol = symbol;
    card.dataset.index = index;
    //agregar ???, text conter
    card.innerText = '?';
    container.appendChild(card);
    card.addEventListener("click", () => flipCard(card));
});
//cards datasimbol idcon card
//Agregar evento click a cada carta
function flipCard(card) {
    if (flippedCards.length < 2 && card.innerText === '?') {
        card.innerText = card.dataset.symbol;
        card.classList.add("match");  
        card.style.backgroundColor = "white"; // Aparece en blanco al voltear
        flippedCards.push(card);
    }

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
       
    }
}
function checkMatch() {
    let [card1, card2] = flippedCards;

    if (card1.dataset.symbol === card2.dataset.symbol) {
        // Si coinciden, se quedan verdes
        card1.style.backgroundColor = "green";
        card2.style.backgroundColor = "green";
        matchedPairs++;
    } else {
        //  Si NO coinciden, se ponen rojas y luego vuelven a ocultarse
        card1.style.backgroundColor = "red";
        card2.style.backgroundColor = "red";

        setTimeout(() => {
            card1.style.backgroundColor = "brown"; // Regresa al color original 
            card2.style.backgroundColor = "brown";
            card1.innerText = '?';
            card2.innerText = '?';
        }, 1000);
    }
    
    flippedCards = [];

    if (matchedPairs === emoji.length) {
        setTimeout(() => {
        document.getElementById("message").innerText = "¡Felicidades! Ganaste.";
            document.getElementById("restart-btn").style.display = "block";
        }, 500);
    }

}

//  Función para reiniciar el juego
function restartGame() {
    location.reload(); 
}

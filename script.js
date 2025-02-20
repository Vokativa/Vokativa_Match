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
let matchedPairs = 0;

//cards con for eacht, dentro crear div, clase card y hideen
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
        
        flippedCards.push(card);
    }

    if (flippedCards.length === 2) {
       
    }
}








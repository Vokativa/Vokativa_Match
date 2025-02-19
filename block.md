//utili sort y mathrandom en cards
cards = cards.sort(()=>Math.random()-0.5)
//crear contenerdor, div id con script
let container = document.createElement("div")
container.id="container"
document.body.appendChild(container)

//cards con for eacht, dentro crear div, clase card y hideen
cards.forEach((symbol, index) => {
    let card = document.createElement('div');
    card.classList.add('card', 'hidden');
    card.dataset.symbol = symbol;
    card.dataset.index = index;
    card.innerText = '?';
    container.appendChild(card);
});
//cards datasimbol idcon card
//Agregar evento click a cada carta

//agregar ???, text conter
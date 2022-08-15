let elem = document.getElementById("root");
let creatBtn = document.getElementById("create");
let printBtn = document.getElementById("print");
let types = ["&#9829", "&#9827", "&#9830", "&#9824"];
let deck = [];
let count = 0;

class CardDeck {
  constructor(num, type, cardClass) {
    this.num = num;
    this.type = type;
    this.cardClass = cardClass;
  }
  renderCarde() {
    elem.innerHTML += `<div class="card ${this.cardClass}" onclick="flip()">
        <div class ="up">
        ${this.num} ${this.type}
        </div>
        <div class="sign"> ${this.type} </div>
        <div class ="down">
        ${this.num} ${this.type}
        </div>
        </div>
        `;
  }
}

printBtn.addEventListener("click", () => {
  count++;
  printBtn.innerHTML = `Print card No. ${count}`;
  let i = Math.floor(Math.random() * 4);
  let card = new CardDeck(Math.floor(Math.random() * 13) + 1, types[i]);

  if (!deck.includes(card)) {
    deck.push(card);
  }

  if (i === 0 || i === 2) {
    card.cardClass = "red";
  }

  if (count === 52) {
    printBtn.disabled = true;
    printBtn.innerHTML = "No more cards!";
  }

  card.renderCarde();
});

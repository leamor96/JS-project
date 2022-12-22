import { Card,Deck } from "./cardsBuilder.js";

let deck: Deck = new Deck();
deck.shuffle();
const p1Deck = document.getElementById("p1Deck") as HTMLImageElement;
const p2Deck = document.getElementById("p2Deck") as HTMLImageElement;
const m1 = document.getElementById("m1") as HTMLImageElement;
const m2 = document.getElementById("m2") as HTMLImageElement;
const mainDeck = document.getElementById("mainDeck") as HTMLImageElement;
const win = document.getElementById("win") as HTMLElement;
const turn = document.getElementById("turn") as HTMLElement;
const war = document.getElementById("war") as HTMLElement;

let countTurn: number = 0;
let cardsP1: Card[] = [];
let cardsP2: Card[] = [];

let temp: Card[] = [];
mainDeck.addEventListener("click", onClickCard);
m1.addEventListener("click", onClickCard);
m2.addEventListener("click", onClickCard);


function onClickCard() {
  war.innerHTML = "";
  countTurn++;
  let cardOut: Card |undefined = undefined;

  if (deck.cards.length>0){
    cardOut = deck.cards.pop();
  }else{
    //hide main deck
    mainDeck.classList.add("hide-card");
    mainDeck.classList.remove("show-card");
    m1.classList.remove("hide-card");
    m1.classList.add("show-card");
    m2.classList.remove("hide-card");
    m2.classList.add("show-card");

    if (countTurn % 2 != 0) {
      cardOut = cardsP1.pop();
      if(cardsP1.length==0){
        alert('player 2 won');
         return;
      }
    } else {
      cardOut = cardsP2.pop();
      if (cardsP2.length == 0) {
        alert("player 1 won");
         return;
      }
    }
  }
    if (countTurn % 2 == 0) {
      p1Deck.src = ("./images/" + cardOut?.image) as string;
      p1Deck.classList.remove("hide-card");
      p1Deck.classList.add("show-card");
      turn.innerHTML="Right turn";
    } else {
      p2Deck.src = ("./images/" + cardOut?.image) as string;
      p2Deck.classList.remove("hide-card");
      p2Deck.classList.add("show-card");
       turn.innerHTML="Left turn";
    }
  temp.push(cardOut as Card);

  if (temp.length == 2) {
    let cardSecond: Card = temp.pop() as Card;
    let cardFirst: Card = temp.pop() as Card;

    while (cardSecond.isEqual(cardFirst)) {
    console.log("war");
    war.innerHTML = "I'ts a War";

      let arrWar: Card[] = [];
      for (let i: number = 0; i < 6; i++) {
        if (deck.cards.length > 0) {
          arrWar.push(deck.cards.pop() as Card);
        } else {
          //hide main deck
          mainDeck.classList.add("hide-card");
          mainDeck.classList.remove("show-card");
          m1.classList.remove("hide-card");
          m1.classList.add("show-card");
          m2.classList.remove("hide-card");
          m2.classList.add("show-card");

          if (i < 3) {
            arrWar.push(cardsP1.pop() as Card);
            if (cardsP1.length == 0) {
              alert("player 2 won");
               war.innerHTML = "";
              return;
            }
          } else {
            arrWar.push(cardsP2.pop() as Card);
            if (cardsP2.length == 0) {
              alert("player 1 won");
               war.innerHTML = "";
               return;
            }
          }
        }
      }
      cardSecond = arrWar[5];
      cardFirst = arrWar[2];
      if (cardFirst.isEqual(cardSecond) == false) {
        if (cardSecond.isWin(cardFirst)) {
          for (let i: number = 0; i < arrWar.length; i++) {
            cardsP2.push(arrWar.pop() as Card);
          }
          setTimeout(() => {
            win.innerText = "player 2 win";
          }, 1000);
        } else {
          for (let i: number = 0; i < arrWar.length; i++) {
            cardsP1.push(arrWar.pop() as Card);
          }
          setTimeout(() => {
            win.innerText = "player 1 win";
          }, 1000);
        }
      }
      console.log("p1");
      console.log(cardsP1);
      console.log("p2");
      console.log(cardsP2);
    }
    if (cardSecond.isWin(cardFirst)) {
      cardsP2.push(cardSecond);
      cardsP2.push(cardFirst);
      setTimeout(() => {
        win.innerText = "player 2 win";
      }, 1000);
    } else {
      cardsP1.push(cardSecond);
      cardsP1.push(cardFirst);
      setTimeout(() => {
        win.innerText = "player 1 win";
      }, 1000);
    }
    console.log("p1 cards: ");
    console.log(cardsP1);
    console.log("p2 cards: ");
    console.log(cardsP2);
  } else {
    win.innerText = "";
  }
}

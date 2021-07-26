/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const VALUES = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const SUITS = ["♠", "♥", "♦", "♣"];

const CARDS_NUMBER = document.querySelector("#numberOfCards");
const DRAW = document.querySelector("#drawCards");
const SECTION_TO_DRAW = document.querySelector("#drawCardsContainer");

window.onload = function() {
  //write your code here
  DRAW.addEventListener("click", event => {
    getCards(event);
  });
};

const getCards = event => {
  event.preventDefault();
  for (let index = 0; index < CARDS_NUMBER.value; index++) {
    drawCard();
  }
};

const drawCard = () => {
  let card = {
    suits: SUITS[getRandom(SUITS)],
    values: VALUES[getRandom(VALUES)]
  };
  let drawCard = document.createElement("div");
  drawCard.classList.add("card");

  let firstSuitContainer = document.createElement("div");
  let firstSuit = document.createTextNode(card.suit);
  firstSuitContainer.appendChild(firstSuit);
  firstSuitContainer.classList.add("align-start");
  drawCard.appendChild(firstSuitContainer);

  let valueContainer = document.createElement("div");
  let value = document.createTextNode(card.value);
  valueContainer.appendChild(value);
  drawCard.appendChild(valueContainer);

  let secondSuitContainer = document.createElement("div");
  let secondSuit = document.createTextNode(card.suit);
  secondSuitContainer.appendChild(secondSuit);
  secondSuitContainer.classList.add("align-end");
  drawCard.appendChild(secondSuitContainer);

  if (card.suit == "♥" || card.suit == "♦") {
    firstSuitContainer.classList.add("red");
    secondSuitContainer.classList.add("red");
  } else {
    firstSuitContainer.classList.add("black");
    secondSuitContainer.classList.add("black");
  }

  SECTION_TO_DRAW.appendChild(drawCard);
  return card;
};

const getRandom = list => {
  return Math.floor(Math.random() * list.length);
};

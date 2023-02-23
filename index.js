// Flash Card Project

//DOM Variables
const flashCardForm = document.getElementById("flashCardForm");
const flashCardTitle = document.getElementById("flashCardTitle");
const flashCardDesc = document.getElementById("flashCardDesc");
const flashCardSubmitBtn = document.getElementById("flashCardSubmitBtn");
const DOMflashCards = document.getElementById("flashCards")

function getFlashCardData() {
  const flashCardTitleVal = flashCardTitle.value;
  const flashCardDescVal = flashCardDesc.value;

  flashCardTitle.value = "";
  flashCardDesc.value = ""

  const DOMflashCard = document.createElement('li');
  DOMflashCard.classList.add("flash-card")
  DOMflashCard.innerHTML = `
  <p class = "flash-card-title">${flashCardTitleVal}</p>
  <p class = "flash-card-desc">${flashCardDescVal}</p>
  `
  DOMflashCards.appendChild(DOMflashCard);
  
}

flashCardForm.addEventListener("submit", getFlashCardData);
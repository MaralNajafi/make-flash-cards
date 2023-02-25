// Flash Card Project

//DOM Variables
const flashCardForm = document.getElementById("flashCardForm");
const flashCardTitle = document.getElementById("flashCardTitle");
const flashCardDesc = document.getElementById("flashCardDesc");
const flashCardSubmitBtn = document.getElementById("flashCardSubmitBtn");
const DOMflashCards = document.getElementById("flashCards");

let flashCardsList = [];
let flashCardId = 0;

function emptyFrom() {
  flashCardTitle.value = "";
  flashCardDesc.value = "";
}

function focusForm() {
  flashCardTitle.focus();
}

function makeFlashCards(e) {
  e.preventDefault();
  flashCardId++;
  const flashCardTitleVal = flashCardTitle.value;
  const flashCardDescVal = flashCardDesc.value;

  let flashCardObj = {
    title: flashCardTitleVal,
    description: flashCardDescVal,
    id: flashCardId,
  };

  flashCardsList.push(flashCardObj);
  let flashCard = flashCardsList.map((flashCard) => {
    return(
      `<li class="flash-card">
      <div class = "flash-card-header">
        <h3 class="flash-card-title">${flashCard.title}</h3>
        <p>${flashCard.description}</p>
      </div>
      <div class="deleteTrashIcon" onClick="deleteFlashCards(${flashCard.id})">
        <svg fill="#fff" width="20" height="20">
          <use xlink:href="#deleteTrash" />
        </svg>
      </div>
    </li>
  `
    )
  });

  DOMflashCards.innerHTML = flashCard;
  emptyFrom();
  focusForm();
}


function deleteFlashCards(flashCardID) {
  const flashCardToDelete = flashCardsList.findIndex(flashCard => flashCard.id === flashCardID);

  flashCardsList.splice(flashCardToDelete,1);

  // I DO NOT like this part of my code, there must be another way!
  let flashCard = flashCardsList.map((flashCard) => {
    return(
      `<li class="flash-card">
      <div class = "flash-card-header">
        <h3 class="flash-card-title">${flashCard.title}</h3>
        <p>${flashCard.description}</p>
      </div>
      <div class="deleteTrashIcon" onClick="deleteFlashCards(${flashCard.id})">
        <svg fill="#fff" width="20" height="20">
          <use xlink:href="#deleteTrash" />
        </svg>
      </div>
    </li>
  `
    )
  });

  DOMflashCards.innerHTML = flashCard;

}

flashCardForm.addEventListener("submit", makeFlashCards);

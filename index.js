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

function updateDOMwithFlashCards() {
  let flashCard = flashCardsList.map((flashCard) => {
    return(
      `<li class="flash-card flex-col">
        <div class = "flash-card-header flex-row">
          <h3 class="flash-card-title">${flashCard.title}</h3>
          <button class="deleteTrashIcon" onClick="deleteFlashCards(${flashCard.id})">
            <svg fill="#fff" width="20" height="20">
              <use xlink:href="#deleteTrash" />
            </svg>
          </button>
        </div>
        <div class= "flash-card-body">
          <p>${flashCard.description}</p>
        </div>
      </li>`
    )
  });

  DOMflashCards.innerHTML = flashCard;
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
  updateDOMwithFlashCards();
  emptyFrom();
  focusForm();
}


function deleteFlashCards(flashCardID) {
  const flashCardToDelete = flashCardsList.findIndex(flashCard => flashCard.id === flashCardID);

  flashCardsList.splice(flashCardToDelete,1);

  updateDOMwithFlashCards();

}

flashCardForm.addEventListener("submit", makeFlashCards);

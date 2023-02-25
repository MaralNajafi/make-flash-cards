// Flash Card Project

//DOM Variables
const flashCardForm = document.getElementById("flashCardForm");
const flashCardTitle = document.getElementById("flashCardTitle");
const flashCardDesc = document.getElementById("flashCardDesc");
const flashCardSubmitBtn = document.getElementById("flashCardSubmitBtn");
const DOMflashCards = document.getElementById("flashCards");

let flashCardsList = [];
let flashCardId = 0;

const emptyForm = () => {
  flashCardTitle.value = "";
  flashCardDesc.value = "";
};

const addEventListenersToAllDeleteButtons = () => {
  const newDeleteTrashIcon = document.querySelectorAll(".deleteTrashIcon");
  Array.from(newDeleteTrashIcon).map((deleteNode) => {
    deleteNode.addEventListener("click", handleClickOnDeleteButton);
  });
};

const handleClickOnDeleteButton = (e) => {
  const buttonId = Number(e.target.closest("button").dataset.id);
  const flashCardToDelete = flashCardsList.findIndex(
    (flashCard) => flashCard.id === buttonId
  );

  flashCardsList.splice(flashCardToDelete, 1);
  updateDOMwithFlashCards();
  emptyForm();
  addEventListenersToAllDeleteButtons();
};

const updateDOMwithFlashCards = () => {
  let flashCards = flashCardsList.map((flashCard) => {
    return `<li class="flash-card">
        <div class = "flash-card-header">
          <h3 class="flash-card-title">${flashCard.title}</h3>
          <p>${flashCard.description}</p>
        </div>
        <button class="deleteTrashIcon" data-id="${flashCard.id}">
          <svg fill="#fff" width="20" height="20">
            <use xlink:href="#deleteTrash" />
          </svg>
        </button>
      </li>
    `;
  });

  DOMflashCards.innerHTML = flashCards;
};

function addANewCard(e) {
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
  emptyForm();
  addEventListenersToAllDeleteButtons();
}

flashCardForm.addEventListener("submit", addANewCard);

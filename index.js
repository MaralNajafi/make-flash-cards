// Flash Card Project

//DOM Variables
const flashCardForm = document.getElementById("flashCardForm");
const flashCardTitle = document.getElementById("flashCardTitle");
const flashCardDesc = document.getElementById("flashCardDesc");
const flashCardSubmitBtn = document.getElementById("flashCardSubmitBtn");
const DOMflashCards = document.getElementById("flashCards");

let flashCardsList = [];
let flashCardId = 0;

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
      <div>
        <h3 class="flash-card-title">${flashCard.title}</h3>
        <p>${flashCard.description}</p>
      </div>
      <div class="trashIcon">
        <svg fill="#fff" width="20" height="20">
          <use xlink:href="#deleteTrash" />
        </svg>
      </div>
    </li>
  `
    )
  });

  DOMflashCards.innerHTML = flashCard;
  flashCardTitle.value = "";
  flashCardDesc.value = "";
}

flashCardForm.addEventListener("submit", makeFlashCards);

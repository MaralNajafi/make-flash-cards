// Flash Card Project

//DOM Variables
const flashCardForm = document.getElementById("flashCardForm");
const flashCardTitle = document.getElementById("flashCardTitle");
const flashCardDesc = document.getElementById("flashCardDesc");
const flashCardSubmitBtn = document.getElementById("flashCardSubmitBtn");
const DOMflashCards = document.getElementById("flashCards");

const flashCardsList = [];

function getFlashCardData(e) {
  e.preventDefault();
  const flashCardTitleVal = flashCardTitle.value;
  const flashCardDescVal = flashCardDesc.value;

  flashCardTitle.value = "";
  flashCardDesc.value = ""

  const DOMflashCard = document.createElement('li');
  DOMflashCard.classList.add("flash-card")
  DOMflashCard.innerHTML = `
  <div>
    <p class = "flash-card-title">${flashCardTitleVal}</p>
    <p class = "flash-card-desc">${flashCardDescVal}</p>
  </div>
  <div class ="deleteIcon">
    <svg style="width: 24px; height: 24px; fill: #fff"><use xlink:href="#deleteTrash"></use></svg>
  </div>
  `
  DOMflashCards.appendChild(DOMflashCard);
  flashCardsList.push(DOMflashCard);
  const deleteIcons = document.querySelectorAll(".deleteIcon");
  deleteIcons.forEach(deleteIcon =>{
    

  })
}



flashCardForm.addEventListener("submit", getFlashCardData);
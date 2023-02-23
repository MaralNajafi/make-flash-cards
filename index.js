// Flash Card Project

//DOM Variables
const flashCardForm = document.getElementById("flashCardForm");
const flashCardTitle = document.getElementById("flashCardTitle");
const flashCardDesc = document.getElementById("flashCardDesc");
const flashCardSubmitBtn = document.getElementById("flashCardSubmitBtn");

let flashCardDataArray = []

function getFlashCardData() {
  const flashCardTitleVal = flashCardTitle.value;
  const flashCardDescVal = flashCardDesc.value;

  flashCardDataArray.push(
    {
        title: flashCardTitleVal,
        description: flashCardDescVal,
    }
  )

  flashCardTitle.value = "";
  flashCardDesc.value = ""

  let flashCards = flashCardDataArray.map(flashCard => {
    
  })
}

flashCardForm.addEventListener("submit", getFlashCardData);
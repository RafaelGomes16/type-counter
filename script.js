const textareaEl = document.querySelector(".textarea");
const charactersNumbersEl = document.querySelector(".stat__number--characters");
const wordsNumbersEl = document.querySelector(".stat__number--words");
const twitterNumbersEl = document.querySelector(".stat__number--twitter");
const facebookNumbersEl = document.querySelector(".stat__number--facebook");

function inputHandler() {
  //validation
  if (textareaEl.value.includes("<script>")) {
    alert("You can't use <script> in your text !");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  //number of characters
  let numberOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }
  const numberOfCharacters = textareaEl.value.length;
  const twitterNumberCharactersLeft = 280 - numberOfCharacters;
  const facebookNumberCharactersLeft = 2200 - numberOfCharacters;

  //visual indicator for twitter chars
  if (twitterNumberCharactersLeft < 0) {
    twitterNumbersEl.classList.add("stat__number--limit");
  } else {
    twitterNumbersEl.classList.remove("stat__number--limit");
  }

  //visual indicator for facebook chars
  if (facebookNumberCharactersLeft < 0) {
    facebookNumbersEl.classList.add("stat__number--limit");
  } else {
    facebookNumbersEl.classList.remove("stat__number--limit");
  }

  //set new numbers
  charactersNumbersEl.textContent = numberOfCharacters;
  wordsNumbersEl.textContent = numberOfWords;
  twitterNumbersEl.textContent = twitterNumberCharactersLeft;
  facebookNumbersEl.textContent = facebookNumberCharactersLeft;
}

textareaEl.addEventListener("input", inputHandler);

const myBtn = document.getElementById("quote-btn");
const myQuote = document.getElementById("myquote");
const myAuthor = document.getElementById("author-name");

const copyBtn = document.getElementById("copy");
const volumeBtn = document.getElementById("volume");

const quoteContainer = document.getElementById("quote-container");
const myLoader = document.getElementById("loader");

// quote container should visible - loader should be hide
function hideLoaderfun() {
  myLoader.hidden = true;
  quoteContainer.hidden = false;
}

// Loader should be visible - quote container should be hidden
function hideContainerfun() {
  myLoader.hidden = false;
  quoteContainer.hidden = true;
}

hideLoaderfun();

myBtn.addEventListener("click", async function () {
  hideContainerfun();

  const response = await fetch("https://api.quotable.io/random");

  // convert JSON to JS object
  let quotes = await response.json();
  myQuote.innerText = quotes.content;
  myAuthor.innerText = quotes.author;

  hideLoaderfun();
});

copyBtn.addEventListener("click", function () {
  //logic for copy button function
  navigator.clipboard.writeText(myQuote.innerText);
});

volumeBtn.addEventListener("click", function () {
  //logic to read out the quote

  let readOut = new SpeechSynthesisUtterance(myQuote.innerText);
  speechSynthesis.speak(readOut);
});

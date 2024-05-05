// Constants
const result = document.getElementById("result");
const locatorInput = document.getElementById("locatorInput");
// const inputLCase = locatorInput.value.toLowerCase();

// Event Listeners
locatorInput.addEventListener("input", showResults);
document.addEventListener("DOMContentLoaded", function () {
  showResults();
  fetchLists();
});

// Show Results
function showResults() {
  if (locatorInput.value.length < 3) {
    result.innerHTML = `<p class="res-bad">Too Short</p>`;
  } else if (
    locatorInput.value === "www" ||
    locatorInput.value === "WWW" ||
    locatorInput.value === "Www" ||
    locatorInput.value === "wWw" ||
    locatorInput.value === "wwW" ||
    locatorInput.value === "WWw" ||
    locatorInput.value === "WwW" ||
    locatorInput.value === "wWW"
  ) {
    result.innerHTML = `<p class="res-good">This is an acronym for the World Wide Web</p>`;
  } else if (locatorInput.value.endsWith(".com")) {
	result.innerHTML = `<p class="res-good">Good URL</p><p>Short for: company</p>`;
  } else {
	result.innerHTML = `No Input`;
  }
}

function fetchLists() {
  fetch(
    "https://gist.githubusercontent.com/derlin/421d2bb55018a1538271227ff6b1299d/raw/3a131d47ca322a1d001f1f79333d924672194f36/country-codes-tlds.json"
  ).then((response) => response.json());
}

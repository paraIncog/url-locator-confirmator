let countryTLDs = [];

// Constants
const result = document.getElementById("result");
const locatorInput = document.getElementById("locatorInput");

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  fetchLists().then(() => {
    locatorInput.addEventListener("input", showResults);
  });
  showResults();
});

function fetchLists() {
  return fetch(
    "https://gist.githubusercontent.com/derlin/421d2bb55018a1538271227ff6b1299d/raw/3a131d47ca322a1d001f1f79333d924672194f36/country-codes-tlds.json"
  )
    .then((response) => response.json())
    .then((data) => {
      countryTLDs = data; // Store the fetched data globally
    });
}

// Show Results
function showResults() {
  const input = locatorInput.value.toLowerCase(); // Process input in lowercase
  if (input.length < 3) {
    result.innerHTML = `<p class="res-bad">Too Short</p>`;
  } else if (input === 'www') {
	result.innerHTML = `<p class="res-good">This is the acronym for the World Wide Web</p>`
  } else {
    let matchedCountry = countryTLDs.find((country) =>
      country.tlds.some((tld) => input.endsWith(tld))
    );
    if (matchedCountry) {
      result.innerHTML = `<p class="res-good">Country</p>${matchedCountry.country}`;
    } else {
      result.innerHTML = `<p class="res-bad">No matching country found for the TLD</p>`;
    }
  }
}

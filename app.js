
// Constants
const result = document.getElementById('result');
const locatorInput = document.getElementById('locatorInput');

// Event Listeners
locatorInput.addEventListener('input', showResults);
document.addEventListener('DOMContentLoaded', function() {
	showResults()
})

// Show Results
function showResults() {
	if (locatorInput.value.length > 0 && locatorInput.value.length < 3) {
		result.innerHTML = `<p class="res-bad">Too Short</p>`;
	} else if (locatorInput.value.length > 0) {
		result.innerHTML = `<p class="res-good">Good Input</p>`;
	} else {
		result.innerHTML = `<p>No Input Detected</p>`
	}
}
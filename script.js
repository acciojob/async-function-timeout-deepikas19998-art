// Select DOM elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Helper function to wait for given milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to display message after delay
async function displayMessage() {
  const message = textInput.value.trim();
  const delay = Number(delayInput.value);

  // Validate inputs
  if (!message || isNaN(delay) || delay < 0) {
    return; // do nothing if invalid input
  }

  // Keep output empty until the delay passes
  output.textContent = '';

  // Wait for specified delay
  await wait(delay);

  // Then display message
  output.textContent = message;
}

// Add click event listener
button.addEventListener('click', displayMessage);

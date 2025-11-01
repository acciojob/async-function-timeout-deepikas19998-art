// Select the DOM elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Function to create a delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Asynchronous function to handle the delay and display message
async function displayMessage() {
  const message = textInput.value.trim();
  const delay = Number(delayInput.value);

  // Validation
  if (!message) {
    output.textContent = "⚠️ Please enter a message.";
    return;
  }
  if (isNaN(delay) || delay < 0) {
    output.textContent = "⚠️ Please enter a valid delay (in milliseconds).";
    return;
  }

  // Clear previous output
  output.textContent = "Waiting...";

  // Wait for the specified delay
  await wait(delay);

  // Display the message after the delay
  output.textContent = message;
}

// Add click event listener to the button
button.addEventListener('click', displayMessage);


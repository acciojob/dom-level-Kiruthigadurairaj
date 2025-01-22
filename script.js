//your JS code here. If required.
// Select the element with id "level"
const targetElement = document.getElementById("level");
let level = 0; // Initialize the level counter
let currentElement = targetElement;

// Traverse up the DOM tree until the root element is reached
while (currentElement) {
    level++; // Increment level for each parent
    currentElement = currentElement.parentElement;
}


alert(`The level of the element is: ${level}`);

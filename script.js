// script.js

// Function to change the main heading after a delay
function changeHeading() {
  const mainHeading = document.querySelector('h1');
  if (mainHeading) {
    setTimeout(() => {
      mainHeading.textContent = "All About Our Feline Friends!";
      console.log("Heading text changed!");
    }, 3000); // Change after 3 seconds
  }
}

// Function to add a class to the "things cats love" list
function highlightCatLoves() {
  const catLoveList = document.querySelector('ul');
  if (catLoveList) {
    catLoveList.classList.add('highlight-list');
    console.log("Class 'highlight-list' added to cat love list.");
  }
}

// Run functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log("Page loaded successfully!");
  changeHeading();
  highlightCatLoves();

  // Example of adding an event listener to the "Things that cats hate" heading
  const hateHeading = document.querySelector('h2:last-of-type'); // Selects the last h2
  if (hateHeading) {
    hateHeading.addEventListener('click', () => {
      alert("You clicked on 'things that cats hate'!");
    });
  }
});

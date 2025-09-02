
// Dark Mode

// When I click the button, it will turn the page dark or back to normal.
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark"); // add/remove "dark" style
});
// Counter
// This keeps track of a number and changes it when I press the buttons.
let count = 0;
const countEl = document.getElementById("count");

// Increase number
document.getElementById("increase").addEventListener("click", function() {
  count++;
  countEl.textContent = count; // show the new number
});

// Decrease number
document.getElementById("decrease").addEventListener("click", function() {
  count--;
  countEl.textContent = count; // show the new number
});


// FAQ (QUESTION AND ANSWER)
// When I click the question, the answer shows or hides.
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

// Hide the answer at the start
answer.style.display = "none";

// Show or hide answer when I click
question.addEventListener("click", function() {
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
});

// Dropdown Menu
// Click the button to show or hide the menu items.
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Start hidden
dropdownMenu.style.display = "none";

// Toggle menu when button is clicked
dropdownBtn.addEventListener("click", function() {
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});

// Tabs
// Each tab button will show its content and hide the others.
const tabButtons = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");

// Hide everything except the first tab content
tabContents.forEach((tab, index) => {
  if (index !== 0) {
    tab.style.display = "none";
  }
});

// When I click a tab button, show its content
tabButtons.forEach(button => {
  button.addEventListener("click", function() {
    const tabId = this.getAttribute("data-tab");

    // Hide all tab contents
    tabContents.forEach(tab => {
      tab.style.display = "none";
    });

    // Show only the one I clicked
    document.getElementById(tabId).style.display = "block";
  });
});
// FORM VALIDATION
// Before the form submits, check if everything is correct.
// If not, show an error. If yes, show success.
const form = document.getElementById("signupForm");
const errorMsg = document.getElementById("error");
const successMsg = document.getElementById("success");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop the page from reloading
  errorMsg.textContent = "";
  successMsg.textContent = "";

  // Get what the user typed
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check the inputs
  if (name === "") {
    errorMsg.textContent = "Please enter your name";
  } else if (email.indexOf("@") === -1) {
    errorMsg.textContent = "Please enter a valid email";
  } else if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters";
  } else {
    successMsg.textContent = "Form submitted!";
    form.reset(); // clear the form
  }
});


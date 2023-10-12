// Check if the user has a preferred mode stored in local storage
const prefersDarkMode = localStorage.getItem('darkMode') === 'true';

// Function to enable or disable dark mode
function toggleDarkMode() {
  const body = document.body;
  const jumbotron = document.querySelector('.jumbotron');
  const cards = document.querySelectorAll('.card');

  body.classList.toggle('dark-mode');
  jumbotron.classList.toggle('dark-mode');
  
  // Loop through cards and toggle dark mode
  cards.forEach((card) => {
    card.classList.toggle('dark-mode');
  });

  // Update the user's preference in local storage
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Initialize dark mode based on user preference
if (prefersDarkMode) {
  toggleDarkMode();
}

// Event listener for the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
}


// Get modal and buttons
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const signupForm = document.getElementById('signup-form');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Form submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for signing up! We will contact you soon.');
  modal.style.display = 'none';
});

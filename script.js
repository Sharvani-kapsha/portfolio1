// Toggle Dark/Light Mode
const toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll Functions
function scrollLeft(containerId) {
    const container = document.getElementById(containerId);
    container.scrollBy({
        top: 0,
        left: -200, // Adjust scroll distance as needed
        behavior: 'smooth'
    });
}

function scrollRight(containerId) {
    const container = document.getElementById(containerId);
    container.scrollBy({
        top: 0,
        left: 200, // Adjust scroll distance as needed
        behavior: 'smooth'
    });
}

// Menu Toggle
function myMenuFunction() {
    const navMenu = document.getElementById('myNavMenu');
    navMenu.classList.toggle('active');
}

// Typed Text Animation (Typing Effect)
const typedText = document.querySelector('.typedText');
const textArray = ['graphic designer', 'web developer', 'data science enthusiast'];
let index = 0;
let currentText = '';
let isDeleting = false;
let speed = 100; // Typing speed (ms)
let deleteSpeed = 50; // Deleting speed (ms)
let pauseTime = 2000; // Time to pause before starting to delete

// Function to handle typing effect
function type() {
    const currentPhrase = textArray[index];

    if (isDeleting) {
        currentText = currentPhrase.substring(0, currentText.length - 1);
    } else {
        currentText = currentPhrase.substring(0, currentText.length + 1);
    }

    typedText.textContent = currentText;

    // If the current text is completely typed, stop typing for a moment, then delete it
    if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => {
            isDeleting = true;
            speed = deleteSpeed; // Speed up when deleting
        }, pauseTime); // Wait 2 seconds before starting to delete

    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        index = (index + 1) % textArray.length; // Loop through textArray
        speed = 100; // Reset speed to normal typing speed
    }

    // Repeat the typing and deleting process
    setTimeout(type, speed);
}

// Initialize typing effect when page loads
window.onload = type;

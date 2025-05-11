document.addEventListener('DOMContentLoaded', () => {
    const anatomyCard = document.getElementById('anatomy-card');
    const revealButton = document.getElementById('reveal-button');
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    // --- 1. Store and Retrieve User Preferences using localStorage (Theme Preference) ---
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.className = savedTheme; // Apply saved theme to body
        } else {
            body.className = 'light-theme'; // Default theme
        }
    };

    const toggleTheme = () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme'); // Save to localStorage
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme'); // Save to localStorage
        }
    };

    // Apply theme on initial load
    applySavedTheme();

    // Event listener for theme toggle button
    themeToggleButton.addEventListener('click', toggleTheme);


    // --- 2. Implement an animation triggered by user actions (Card Flip) ---
    // This uses the CSS transition defined in style.css
    const flipCard = () => {
        anatomyCard.classList.toggle('is-flipped');
    };

    // Event listener for the reveal button
    revealButton.addEventListener('click', () => {
        flipCard();

        // --- 3. Apply JavaScript to trigger CSS animation (Pulse effect on button) ---
        // Add the animation class
        revealButton.classList.add('animate-pulse');

        // Important: Remove the class after the animation completes
        // so it can be re-triggered on subsequent clicks.
        revealButton.addEventListener('animationend', () => {
            revealButton.classList.remove('animate-pulse');
        }, { once: true }); // { once: true } ensures the event listener is removed after firing once
    });

    // Placeholder for "Next Card" functionality if you want to expand
    const nextCardButton = document.getElementById('next-card-button');
    nextCardButton.addEventListener('click', () => {
        alert("Next card functionality would load new content here!");
        // You would typically fetch new data and update the card's front and back.
        // For simplicity, we'll just reset the current card if it's flipped.
        if (anatomyCard.classList.contains('is-flipped')) {
            anatomyCard.classList.remove('is-flipped');
        }
        // Potentially update the card content:
        // document.querySelector('.card-front h2').textContent = "New Term";
        // document.querySelector('.card-back p').textContent = "New definition.";
    });

});
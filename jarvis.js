const output = document.getElementById('output');
let recognition;

function startRecognition() {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-IN';
    recognition.continuous = false; // Set to false to automatically detect end of a phrase

    recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    output.textContent = transcript; // Clear previous phrase and set new text
    };

// Restart recognition after phrase ends
    recognition.onend = function() {
        recognition.start();
        };

// Start recognition automatically
    recognition.start();
}

// Initialize speech recognition when the page loads
window.onload = startRecognition;

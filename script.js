let score = 0;
let speed = 1000; // Time in milliseconds for the button to move
let button = document.getElementById("clickButton");
let gameArea = document.getElementById("gameArea");
let scoreDisplay = document.getElementById("score");

// Function to move the button randomly
function moveButton() {
    const maxX = gameArea.offsetWidth - button.offsetWidth;
    const maxY = gameArea.offsetHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// Event listener for button click
button.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = "Score: " + score;

    // Increase speed every 5 points
    if (score % 5 === 0) {
        speed -= 300; // Make the button move faster
        if (speed < 400) speed = 400; // Minimum speed
    }

    moveButton();
});

// Initial button position and movement
moveButton();
setInterval(moveButton, speed);

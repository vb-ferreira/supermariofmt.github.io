// JUMP CONTROL

// Select mario image
const mario = document.querySelector(".mario");

// Function to add a class .jump to the mario image
const jump = () => {
    mario.classList.add("jump");
    
    // Remove the class after jump
    setTimeout(() => {
        mario.classList.remove("jump")
    }, 500);
}

// Jump after any key is pressed
document.addEventListener("keydown", jump);

// GAME OVER?

// Select pipe image
const pipe = document.querySelector(".pipe");
// Select cloud img
const cloud = document.querySelector(".cloud");

const loop = setInterval(() => {
    
    // Get pipe position
    const pipePosition = pipe.offsetLeft;
    // Get mario position (the "+" convert to number)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    // Get cloud position
    const cloudPosition = cloud.offsetLeft;
    
    // Game Over
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 95) {
        // Stop pipe animation 
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        
        // Stop mario animation 
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;
        
        // Stop cloud animation 
        cloud.style.animation = "none";
        cloud.style.left = `${cloudPosition}px`;
        
        // Change mario image
        mario.src = "./img/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";
        
        // Stop the loop
        clearInterval(loop);
        // Stop the counter
        clearInterval(scoreCounter);
        // Display game over image
        document.getElementById("gameOver").style.display = "block";
    }
    
}, 10);

// SCORE

// Function to update the counter
function updateCounter() {
    // Get the current time
    let currentTime = new Date().getTime();

    // Calculate the elapsed time
    let elapsedTime = Math.floor((currentTime - startTime) / 2000);

    // Update the counter element
    counterElement.innerText = `Score: ${elapsedTime}`;
}

// Get the counter element
let counterElement = document.getElementById("counter");

// Variable to store the start time
let startTime = new Date().getTime();

// Initial update
updateCounter();

// Set up an interval to update the counter every 2 seconds
// setInterval(updateCounter, 2000);
const scoreCounter = setInterval(updateCounter, 2000);

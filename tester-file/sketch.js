// Game Constants
function setup() {
  createCanvas(boardWidth, boardHeight);
  
}
const boardWidth = 10;
const boardHeight = 10;

// Initial Snake State
let snake = [
  { x: 5, y: 5 }, // head of the snake
  { x: 4, y: 5 }, // first body segment
  { x: 3, y: 5 }  // second body segment
];

let snakeDirection = 'right'; // Initial direction (right)
let food = { x: 7, y: 3 };   // Food position

// Function to move the snake
function moveSnake() {
  let newHead = { ...snake[0] };

  // Update the new head's position based on the direction
  if (snakeDirection === 'right') {
    newHead.x += 1;
  } 
  else if (snakeDirection === 'left') {
    newHead.x -= 1;
  } 
  else if (snakeDirection === 'up') {
    newHead.y -= 1;
  } 
  else if (snakeDirection === 'down') {
    newHead.y += 1;
  }

  // Check if snake collides with walls
  if (newHead.x < 0 || newHead.x >= boardWidth || newHead.y < 0 || newHead.y >= boardHeight) {
    gameOver();
    return;
  }

  // Check if snake collides with itself
  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
      gameOver();
      return;
    }
  }

  // Add new head to snake array
  snake.unshift(newHead);

  // Check if the snake eats the food
  if (newHead.x === food.x && newHead.y === food.y) {
    // Snake eats food, add new food to random position
    food = { x: Math.floor(Math.random() * boardWidth), y: Math.floor(Math.random() * boardHeight) };
  } 
  else {
    // Remove the last segment (snake doesn't grow unless it eats food)
    snake.pop();
  }
}

// Function to handle game over
function gameOver() {
  console.log("Game Over!");
  clearInterval(gameInterval); // Stop the game loop
}

// Render the game board in the console
function renderBoard() {
  let gameBoard = Array.from({ length: boardHeight }, () => Array(boardWidth).fill(' '));

  // Place snake on board
  for (let segment of snake) {
    gameBoard[segment.y][segment.x] = 'S';
  }

  // Place food on board
  gameBoard[food.y][food.x] = 'F';

  // Display the board
  console.clear();
  gameBoard.forEach(row => console.log(row.join(' | ')));
}

// User input for controlling snake direction
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && snakeDirection !== 'down') {
    snakeDirection = 'up';
  } 
  else if (event.key === 'ArrowDown' && snakeDirection !== 'up') {
    snakeDirection = 'down';
  } 
  else if (event.key === 'ArrowLeft' && snakeDirection !== 'right') {
    snakeDirection = 'left';
  } 
  else if (event.key === 'ArrowRight' && snakeDirection !== 'left') {
    snakeDirection = 'right';
  }
});

// Game loop (every 200ms)
let gameInterval = setInterval(() => {
  moveSnake();
  renderBoard();
}, 200);
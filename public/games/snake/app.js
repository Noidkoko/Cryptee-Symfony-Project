const GAME_SIZE = 600
const SQUARE_SIZE = 40
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')

const snake = new Snake(SQUARE_SIZE)
const food = new Food()
let frameRate = 1

let currentDirection = 'right'
const snakeHead = new Image()
snakeHead.src = 'assets/snake/snakeHead.png'
const snakeBody = new Image()
snakeBody.src = 'assets/snake/snakeBody.png'
const snakeTail = new Image()
snakeTail.src = 'assets/snake/snake.png'


function detectKeyPressed() {
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowLeft':
                currentDirection = 'left';
                break;
            case 'ArrowRight':
                currentDirection = 'right';
                break;
            case 'ArrowUp':
                currentDirection = 'up';
                break;
            case 'ArrowDown':
                currentDirection = 'down';
                break;
        }
    })
}

function update() {
    snake.update()
    food.draw()
    if (snake.alive) {
        setTimeout(update, 150 * frameRate)
    }
}
  

function start() {
    detectKeyPressed()
    snake.addBlock(snake.x + snake.blockSize, snake.y + snake.blockSize, false)
    snake.addBlock(snake.x + snake.blockSize, snake.y + snake.blockSize, false)
    update()
}


start()
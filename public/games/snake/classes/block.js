class Block {
    constructor(x, y, size, isHead) {
        this.x = x
        this.y = y
        this.oldX = x
        this.oldY = y
        this.size = size
        this.isHead = isHead
    }

    teleportIfOutOfMap() {
        const maxSize = GAME_SIZE / this.size
        if (this.x < 0) {
            snake.alive = false
        } else if (this.x > maxSize) {
            snake.alive = false
        }
        if (this.y < 0) {
            snake.alive = false
        } else if (this.y > maxSize) {
            snake.alive = false
        }
    }

    setPosition(x, y) {
        this.oldX = this.x
        this.oldY = this.y
        this.x = x
        this.y = y
    }

    draw() {
        if (this.isHead) {
            ctx.drawImage(snakeHead, this.x * this.size, this.y * this.size, this.size, this.size)
        }
        else {
            if (snake.blocks[snake.blocks.length]) {
                ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size)
            } else {
            ctx.drawImage(snakeBody, this.x * this.size, this.y * this.size, this.size, this.size)
            }
        }

        
    }
    }
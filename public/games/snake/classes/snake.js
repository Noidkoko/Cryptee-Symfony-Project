class Snake {
    constructor() {
        this.x = 0
        this.y = 0
        this.blockSize = SQUARE_SIZE
        this.blocks = []
        this.addBlock(this.x, this.y, true)
        this.alive = true
    }
    addBlock(x, y, isHead) {
        const block = new Block(x, y, this.blockSize, isHead)
        this.blocks.push(block)
    }

    moveHead() {
        const head = this.blocks[0]
        head.oldX = head.x
        head.oldY = head.y
        switch (currentDirection) {
            case 'left':
                head.x--;
                break;
            case 'right':
                head.x++;
                break;
            case 'up':
                head.y--;
                break;
            case 'down':
                head.y++;
                break;
            default:
                break;
        }
        head.teleportIfOutOfMap()
    }

    setNewBlockPosition() {
        let {x, y} = this.blocks[this.blocks.length - 1]
        switch (currentDirection) {
            case 'left':
                x++
                break;
            case 'right':
                x--
                break;
            case 'up':
                y++
                break;
            case 'down':
                y--
                break;
            default:
                break;
        }
        return {x, y}
    }
    eat() {
        const head = this.blocks[0]
        if (head.x === food.x && head.y === food.y) {
            frameRate -= 0.02
            food.setRandomPosition()
            const {x, y} = this.setNewBlockPosition()
            this.addBlock(x, y, false)
        }
    }

    blockTouchHead(block) {
        const head = this.blocks[0]
        const headX = head.x
        const headY = head.y

    return (headX === block.x && headY === block.y)
    }

    update() {
        ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE)
        this.moveHead()
        this.eat()
        for (const [index, block] of this.blocks.entries()) {
            if (index > 0) {
                const {oldX, oldY} = this.blocks[index - 1]
                block.setPosition(oldX, oldY)
                if (this.blockTouchHead(block)) {
                    this.alive = false
                }
            }
            block.draw()
        }



    }
}
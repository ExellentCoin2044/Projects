let gridW = 20;
let time = 0;

let snake;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
}

function draw() {
    background(51);

    snake.update();
    snake.show();

    time++;
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.move(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.move(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.move(-1, 0)
    } else if (keyCode === RIGHT_ARROW) {
        snake.move(1, 0);
    }
}
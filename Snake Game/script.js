// game constants & variables
let direction = {x:0,y:0};
let foodsound = new Audio('food.mp3');
let gameoversound = new Audio('gameover.mp3');
let movesound = new Audio('move.mp3');
let musicsound = new Audio('music.mp3');
let speed = 2;
let lastpainttime = 0;
let snakearr = [
    {x:13,y:15}
]


// Game FUnctions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime-lastpainttime)/1000 < 1/speed){
        return;
    }
    lastpainttime = ctime;
    gameEngine();
}


function gameEngine(){
    // part 1:updating the snake array & food


    // part 2:Display the snake and food 
    board.innerHTML ="";
    snakearr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })
}

















// main logic starts here
window.requestAnimationFrame(main);
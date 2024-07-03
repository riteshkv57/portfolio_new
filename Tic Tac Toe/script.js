console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn ="X"
let isgameover=false;

// function to change the turn 
const changeturn = ()=>{
    return turn === "X"? "0" :"X"
}
 
// function to check a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 10, 5, 0],    // Row 1
        [3, 4, 5, 10, 15, 0],   // Row 2
        [6, 7, 8, 10, 25, 0],   // Row 3
        [0, 3, 6, 5, 15, 90],   // Column 1
        [1, 4, 7, 15, 15, 90],  // Column 2
        [2, 5, 8, 25, 15, 90],  // Column 3
        [0, 4, 8, 15, 15, 45],  // Diagonal 1
        [2, 4, 6, 15, 15, 135]  // Diagonal 2
    ];

    wins.forEach(e => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px";
            music.play();
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
};

// Game logic
// music.play();
let boxes =  document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn =changeturn();
            audioturn.play();
            checkwin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
              
        }
    })
})

const drawLine = (start, end) => {
    const line = document.querySelector('.line');
    const startX = boxes[start].offsetLeft + boxes[start].offsetWidth / 2;
    const startY = boxes[start].offsetTop + boxes[start].offsetHeight / 2;
    const endX = boxes[end].offsetLeft + boxes[end].offsetWidth / 2;
    const endY = boxes[end].offsetTop + boxes[end].offsetHeight / 2;
    const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;

    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;
    line.style.transformOrigin = '0 0';
};

var icon=document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
}

function refreshPage() {
    location.reload();
}




const obstacleImg = document.querySelector("#obstacle img");

const obstacles = [
    "assets/tree.png",
    "assets/rock.png",
    "assets/chip.png"
];
let player =
document.getElementById("player");


let scoreText =
document.getElementById("score");


let score = 0;


// Jump function

document.addEventListener(
"keydown",
function(event){


if(event.code==="Space"){


if(!player.classList.contains("jump")){


player.classList.add("jump");


setTimeout(()=>{


player.classList.remove("jump");


},600);


}


}


});



// Score counter

setInterval(()=>{


score++;


scoreText.innerHTML =
"Score: " + score;


},1000);
const obstacle = document.getElementById("obstacle");

obstacle.addEventListener("animationiteration", () => {
    let randomIndex = Math.floor(Math.random() * obstacles.length);
    obstacleImg.src = obstacles[randomIndex];
});
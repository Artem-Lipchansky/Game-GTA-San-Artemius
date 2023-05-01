
//======================================IMPORT-FROM-PLAYER-FILE==============================//

import { Player } from "./player.js";
import { Projectile } from "./projectile.js";


const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;


//======================================GAME-START==========================================//

let player;
let Projectiles = [];

startGame();

function startGame(){
    init();
    animate();
}

function init(){
    const movementLimits = {
    minX: 0,
    maxX: canvas.width,
    minY: 0,
    maxY: canvas.height,
};


player = new Player(canvas.width/2, canvas.height/2, context, movementLimits);
addEventListener(click,Projectile);
}

function createProjectile(event) {
    Projectiles.push(
        new Projectile(
            player.x,
            player.y,
            event.clientX,
            event.clientY,
            context
        )

    );
}





//======================================================ANIMATE============================================//



function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    projectiles.forEaach(projectile => projectile.update());

    player.update();

} 
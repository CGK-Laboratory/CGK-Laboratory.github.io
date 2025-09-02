{document.addEventListener('DOMContentLoaded', function() {
const canvas = document.getElementById('wormCanvas')
if (canvas === null) {
    return; 
  }
const ctx = canvas.getContext('2d');
const gridSize = 8;
const cellSize = canvas.width / gridSize;

let worm = [
    {x: 4, y: 4},
    {x: 4, y: 5},
    {x: 4, y: 6},
    {x: 4, y: 7}
];

let mousePos = {x: 0, y: 0};
let frameCount = 0;
let isWormHit = false;
let hitTimer = 0;

function drawSnake() {
    worm.forEach((segment, index) => {
        ctx.fillStyle = isWormHit ? 'red' : (index === 0 ? 'blue' : (index === 2 ? 'green' : 'darkgreen'));
        if (index === 0 || (segment.x !== worm[0].x || segment.y !== worm[0].y)) {
            ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
        }

    });

    if (isWormHit) {
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Ouch!', canvas.width/2 + cellSize / 2, canvas.width/2 + cellSize / 2);
    }
}

function moveSnake() {
    const head = worm[0];
  
    let newHead = {...head};
    do{
    newHead = {...head}
    if (Math.random() < 0.5) {
        switch (Math.floor(Math.random()*4)) {
        case 0: newHead.y<gridSize - 1 ? newHead.y++ :newHead.y--; break;
        case 1: newHead.x<gridSize - 1 ? newHead.x++ :newHead.x--; break;
        case 2: newHead.y>0 ? newHead.y-- :newHead.y++;  break;
        default: newHead.x>0 ? newHead.x-- :newHead.x++;
        }

    } else {
        const dx = head.x - Math.floor(mousePos.x / cellSize);
        const dy = head.y - Math.floor(mousePos.y / cellSize);
        if (Math.abs(dx) < Math.abs(dy)) {
            newHead.x += Math.sign(dx);
            newHead.x = Math.max(0, Math.min(gridSize - 1, newHead.x));
        } else {
            newHead.y += Math.sign(dy);
            newHead.y = Math.max(0, Math.min(gridSize - 1, newHead.y));
        }

        
    }}
    while ((newHead.x  === worm[1].x) && (newHead.y  === worm[1].y) || (newHead.x  === head.x) && (newHead.y  === head.y) );

    worm.unshift(newHead);
    worm.pop();
    
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    frameCount++;
    if (frameCount % 10 === 0) {
        moveSnake();
    }
    
    drawSnake();

    if (isWormHit) {
        hitTimer++;
        if (hitTimer > 30) { // Aproximadamente 0.5 segundos a 60 FPS
            isWormHit = false;
            hitTimer = 0;
        }
    }

    requestAnimationFrame(updateGame);
}
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mousePos = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
});

canvas.addEventListener('click', (event) => {
    
    const rect = canvas.getBoundingClientRect();
    const clickX = Math.floor((event.clientX - rect.left) / cellSize);
    const clickY = Math.floor((event.clientY - rect.top) / cellSize);
    
    if (worm.some(segment => segment.x === clickX && segment.y === clickY)) {
        isWormHit = true;
        hitTimer = 0;
    }
});

updateGame();
})}
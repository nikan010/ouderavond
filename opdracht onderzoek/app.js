// Eerst definiëren we enkele variabelen
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
 
// Variabelen voor de positie en snelheid van de cirkel
let x = 50; // startpositie X
let y = 50; // startpositie Y
let dx = 0; // snelheid X
let dy = 0; // snelheid Y
let radius = 20; // radius van de cirkel

//tweede bal
let x2 = 100;
let y2 = 100;
let dx2 = 0;
let dy2 = 0;
let radius2 = 15; // radius iets kleiner
let speed = 5; //snelheid van de tweede bal

let score = 0;
let cyclus = 25
let tellercylcus = 0;

function scoreInScherm() {
    ctx.font = "10px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(String(score), 10,10);
}

//funcite om de bal te laten bewegen.
function startmoving()
{
    dx = 2; //de snelheid is 2
    dy = 2;
    dx2 = 2;
    dy2 = 2;
}
 document.getElementById('startbutton').addEventListener('click', startmoving);
 //deze code boven mij is om de bal te laten starten  

 document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        x2 -= speed;
        if (x2 < 0) {
            x2 = canvas.width-radius2;
        }
    } else if (event.key === 'ArrowRight') {
        x2 += speed;
        if (x2>canvas.width-radius2) {x2 = 0 ;}
    } 
    if (event.key === 'ArrowUp') {
        y2 -= speed;
        if (y2 < radius2) { y2 = radius2; }
        } else if (event.key === 'ArrowDown') {
            y2 += speed;
            if (y2 > canvas.height-radius2) {
                y2 = canvas.height-radius2;
            }
        }
 });

// De functie om de cirkel te tekenen
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// De functie2 om de cirkel te tekenen
function drawCircle2() {
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, Math.PI * 2, true);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}
 
// De update functie die elke frame wordt uitgevoerd
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEFEFE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 
    drawCircle();
    drawCircle2();
 
    // Verander de positie van de cirkel
    x += dx;
    y += dy;
 
    // Laat de cirkel stuiteren wanneer hij de randen van het canvas raakt
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

      // Verander de positie van de cirkel2
      x2 += dx2;
      y2 += dy2;
   
      // Laat de cirkel stuiteren wanneer hij de randen van het canvas raakt
      if (x2 + dx2 > canvas.width - radius || x2 + dx2 < radius) {
          dx2 = -dx2;
      }
      if (y2 + dy2 > canvas.height - radius || y2 + dy2 < radius) {
          dy2 = -dy2;
      }

      if (x == x2 && y == y2) { alert ("ik heb goed nieuw u gaat dood"); }
 
    requestAnimationFrame(update); // Roep update weer aan voor de volgende frame
}
 
// Start de animatieloop
update();
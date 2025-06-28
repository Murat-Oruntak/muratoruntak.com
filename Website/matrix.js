// Matrix Rain Effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Set canvas size
function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = "01";
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = new Array(columns).fill(1);

// Use blue/cyan tones for the matrix effect
const matrixColor = ["#00ffff", "#268bd2", "#39d9ff"];

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = matrixColor[Math.floor(Math.random() * matrixColor.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

let intervalId = setInterval(draw, 33);

window.addEventListener('resize', () => {
  columns = Math.floor(canvas.width / fontSize);
  drops = new Array(columns).fill(1);
});

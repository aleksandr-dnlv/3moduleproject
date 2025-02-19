const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let currentStyle = 'none'; 

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;


const brushImages = {
  aist: new Image(),
  bear: new Image(),
  bober: new Image(),
};

brushImages.aist.src = 'images/76.png';
brushImages.bear.src = 'images/75.png';
brushImages.bober.src = 'images/77.png';

Promise.all([
  new Promise((resolve) => { brushImages.aist.onload = resolve; }),
  new Promise((resolve) => { brushImages.bear.onload = resolve; }),
  new Promise((resolve) => { brushImages.bober.onload = resolve; }),
])

function setDrawingStyle(style) {
  currentStyle = style;
}

document.querySelectorAll('.canvas-style').forEach(style => {
  style.addEventListener('click', () => {
    setDrawingStyle(style.getAttribute('data-style'));
  });
});
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  draw(e); 
}

function stopDrawing() {
  isDrawing = false;
}

function draw(e) {
  if (!isDrawing || !currentStyle) return;
  const brush = brushImages[currentStyle];
  const x = e.offsetX;
  const y = e.offsetY;
  ctx.drawImage(brush, x - brush.width / 2, y - brush.height / 2);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('mouseup', stopDrawing);



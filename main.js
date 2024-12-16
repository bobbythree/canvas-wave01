const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const wave = {
  y: canvas.height / 2,
  length: 0.02,
  frequency: 0.008,
  amplitude: 100 
}

let increment = wave.frequency;

function drawWave() {
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = '';
  ctx.shadowBlur = 0;
  ctx.strokeStyle = 'black'   
  ctx.beginPath();
  ctx.moveTo(0, wave.y);
  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, wave.y + Math.sin(i * increment) * wave.amplitude * Math.sin(increment));
  }
  ctx.stroke();    
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawWave();
  increment += wave.frequency;
  requestAnimationFrame(animate);
}
animate();





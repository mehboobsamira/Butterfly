const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.color = color;
    this.vx = Math.random()*2-1;
    this.vy = Math.random()*2-1;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// TREE
function drawTree() {
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("LOVE", canvas.width/2 - 40, canvas.height/2);
}

// HEART
function drawHeart() {
  ctx.fillStyle = "red";
  for(let t=0; t<Math.PI*2; t+=0.01){
    let x = 16*Math.pow(Math.sin(t),3);
    let y = -(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));
    ctx.fillRect(canvas.width/2 + x*10, canvas.height/2 + y*10,2,2);
  }
}

// NAME
function showName() {
  document.getElementById("text").innerText = "Samira";
  document.getElementById("text").style.opacity = 1;
}

// PHOTO
function showPhoto() {
  document.getElementById("photo").style.display = "block";
}

// RAIN
function rain() {
  for(let i=0;i<200;i++){
    particles.push(new Particle(Math.random()*canvas.width, 0, "blue"));
  }
}

// LIGHTNING
function lightning() {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  setTimeout(()=>ctx.clearRect(0,0,canvas.width,canvas.height),100);
}

// GIFT + BUTTERFLY
function gift() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(canvas.width/2-30, canvas.height/2-30,60,60);

  setTimeout(()=>{
    let butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.style.left = canvas.width/2 + "px";
    butterfly.style.top = canvas.height/2 + "px";
    document.body.appendChild(butterfly);

    setTimeout(()=>{
      document.getElementById("text").innerText = "I Love You 😗";
    },5000);

  },2000);
}

// Timeline
setTimeout(drawTree, 1000);
setTimeout(drawHeart, 15000);
setTimeout(showName, 17000);
setTimeout(showPhoto, 32000);
setTimeout(rain, 42000);
setTimeout(lightning, 45000);
setTimeout(gift, 48000);

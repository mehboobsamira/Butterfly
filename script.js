const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

// Particle class
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.color = color;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
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

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}
animate();


// STEP 1: LOVE text
function drawTree() {
  ctx.fillStyle = "white";
  ctx.font = "40px Arial";
  ctx.fillText("LOVE", canvas.width / 2 - 60, canvas.height / 2);
}

// STEP 2: HEART particles
function drawHeart() {
  for (let t = 0; t < Math.PI * 2; t += 0.01) {
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = -(13 * Math.cos(t)
      - 5 * Math.cos(2 * t)
      - 2 * Math.cos(3 * t)
      - Math.cos(4 * t));

    particles.push(new Particle(
      canvas.width / 2 + x * 10,
      canvas.height / 2 + y * 10,
      "red"
    ));
  }
}

// STEP 3: Show name
function showName() {
  const name = document.getElementById("nameText");
  name.innerText = "Samira";
  name.style.opacity = 1;
}

// STEP 4: Show photo
function showPhoto() {
  document.getElementById("photo").style.display = "block";
}

// STEP 5: Rain effect
function rain() {
  setInterval(() => {
    particles.push(new Particle(
      Math.random() * canvas.width,
      0,
      "blue"
    ));
  }, 50);
}

// STEP 6: Lightning
function lightning() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 100);
}

// STEP 7: Butterfly + final text
function butterfly() {
  const b = document.getElementById("butterfly");
  b.style.display = "block";

  let x = canvas.width / 2;
  let y = canvas.height / 2;

  const fly = setInterval(() => {
    x += 3;
    y -= 2;

    b.style.left = x + "px";
    b.style.top = y + "px";
  }, 30);

  setTimeout(() => {
    clearInterval(fly);
    document.getElementById("nameText").innerText = "I Love You 😗";
  }, 5000);
}


// TIMELINE (sequence)
setTimeout(drawTree, 1000);
setTimeout(drawHeart, 15000);
setTimeout(showName, 17000);
setTimeout(showPhoto, 32000);
setTimeout(rain, 42000);
setTimeout(lightning, 45000);
setTimeout(butterfly, 48000);

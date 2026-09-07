// Countdown to the birthday
const targetDate = new Date("September 12, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("countdown-message");

function pad(num) {
  return String(num).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    messageEl.textContent = "🎉 Happy 50th Birthday, Chunesh! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
  messageEl.textContent = "Get ready to celebrate!";
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Lightweight confetti/sparkle background
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const colors = ["#d4af6a", "#f3d9a4", "#ffffff", "#a97c38"];

function createParticles(count) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.6,
      speed: Math.random() * 0.4 + 0.1,
      drift: Math.random() * 0.6 - 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.6 + 0.2,
    });
  }
}
createParticles(90);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();

    p.y += p.speed;
    p.x += p.drift;

    if (p.y > canvas.height) {
      p.y = -5;
      p.x = Math.random() * canvas.width;
    }
    if (p.x > canvas.width) p.x = 0;
    if (p.x < 0) p.x = canvas.width;
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}
animate();

// Birthday wish form — submits to Formspree, no page reload
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const wishForm = document.getElementById("wish-form");
const wishStatus = document.getElementById("wish-status");

wishForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
    wishStatus.textContent = "Wish form isn't connected yet — check back soon!";
    wishStatus.className = "wish-status error";
    return;
  }

  const submitButton = wishForm.querySelector(".wish-submit");
  submitButton.disabled = true;
  wishStatus.textContent = "Sending your wish...";
  wishStatus.className = "wish-status";

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(wishForm),
    });

    if (response.ok) {
      wishStatus.textContent = "Thank you! Your wish has been sent. 🎉";
      wishStatus.className = "wish-status success";
      wishForm.reset();
    } else {
      wishStatus.textContent = "Something went wrong. Please try again.";
      wishStatus.className = "wish-status error";
    }
  } catch (err) {
    wishStatus.textContent = "Network error. Please try again.";
    wishStatus.className = "wish-status error";
  } finally {
    submitButton.disabled = false;
  }
});

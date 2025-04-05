const startDate = new Date("2025-03-14T23:30:00"); // data que começaram o namoro

function updateTimer() {
  const now = new Date();
  let diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remDays = days % 30;

  document.getElementById("timer").innerText = 
    `${years} anos, ${months} meses, ${remDays} dias, ` +
    `${hours} horas, ${minutes} minutos e ${seconds} segundos ❤️`;
}

setInterval(updateTimer, 1000);
updateTimer();

// corações animados
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = `${16 + Math.random() * 16}px`;

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 500);

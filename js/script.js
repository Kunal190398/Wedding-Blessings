/* ============================= */
/* BACKGROUND MUSIC */
/* ============================= */
const music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
    isPlaying = !isPlaying;
}

/* ============================= */
/* SCROLL REVEAL */
/* ============================= */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const pos = section.getBoundingClientRect().top;
        if (pos < window.innerHeight - 120) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });

    document.getElementById("topBtn").style.display =
        window.scrollY > 300 ? "block" : "none";
});

/* ============================= */
/* FULL SCREEN HEART ANIMATION */
/* ============================= */
const heartContainer = document.getElementById("heart-container");
const heartIcons = ["💖", "💕", "💗", "💓", "💞", "❤️"];

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];

    // RANDOM POSITION (FULL WIDTH)
    heart.style.left = Math.random() * 100 + "vw";

    // RANDOM SIZE
    const size = Math.random() * 25 + 15;
    heart.style.fontSize = size + "px";

    // RANDOM SPEED
    const duration = Math.random() * 6 + 6;
    heart.style.animationDuration = duration + "s";

    heartContainer.appendChild(heart);

    // REMOVE AFTER ANIMATION
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

/* 💖 HEART DENSITY CONTROL */
setInterval(createHeart, 120);  // ← VERY IMPORTANT

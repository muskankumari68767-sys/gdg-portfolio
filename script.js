/* ============================
   Smooth Scroll for Internal Links
============================ */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ============================
   Active Navbar on Scroll
============================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

/* ============================
   Fade In Animation on Scroll
============================ */
const fadeElements = document.querySelectorAll(".fade");

const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

/* ============================
   Hero Image Tilt Effect
============================ */
const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
    heroImage.addEventListener("mousemove", e => {
        const { offsetX, offsetY } = e;
        const { offsetWidth, offsetHeight } = heroImage;

        const x = ((offsetX / offsetWidth) - 0.5) * 10;
        const y = ((offsetY / offsetHeight) - 0.5) * 10;

        heroImage.style.transform =
            `rotateX(${ -y }deg) rotateY(${ x }deg) scale(1.05)`;
    });

    heroImage.addEventListener("mouseleave", () => {
        heroImage.style.transform =
            "rotateX(0) rotateY(0) scale(1)";
    });
}

/* ============================
   Typing Animation
============================ */
const text = " A passionate Web Developer & B.Tech CSE student 📍";
let index = 0;
const speed = 120;

function typeEffect() {
    const typingEl = document.getElementById("typing");
    if (!typingEl) return;

    if (index < text.length) {
        typingEl.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();

/* ============================
   SKILLS: Count-Up + Progress Bar
============================ */
document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(card => {
        const bar = card.querySelector(".progress span");
        const count = card.querySelector(".count");

        if (!bar || !count) return;

        const target = parseInt(bar.getAttribute("data-percent"), 10);
        let current = 0;

        bar.style.width = "0%";

        const timer = setInterval(() => {
            current++;
            bar.style.width = current + "%";
            count.textContent = current;

            if (current >= target) clearInterval(timer);
        }, 15);
    });
});

/* ============================
   3D TILT EFFECT (Skill Cards)
============================ */
document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -15;
        const rotateY = ((x / rect.width) - 0.5) * 15;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "rotateX(0) rotateY(0) scale(1)";
    });
});
/* ============================
   3D AI CAROUSEL POSITIONING
============================ */

const carouselItems = document.querySelectorAll(".carousel-item");
const totalItems = carouselItems.length;
const angle = 360 / totalItems;

carouselItems.forEach((item, index) => {
    item.style.transform =
        `rotateY(${index * angle}deg) translateZ(350px)`;
});
/* =========================
   STATS COUNT UP
========================= */
const counters = document.querySelectorAll('.count');

const startCount = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const increment = target / 80;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats");
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        startCount();
    }
});
/* =========================
   RANDOM FLOATING EFFECT
========================= */
document.querySelectorAll(".floating-icons span").forEach(icon => {
    icon.style.left = Math.random() * 100 + "%";
});

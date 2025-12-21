/* ============================
   Smooth Scroll for Navbar
============================ */
console.log("JS is working ✅");

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');

        if (targetId.startsWith("#")) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
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
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
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
   Image Hover Tilt Effect
============================ */
const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
    heroImage.addEventListener("mousemove", e => {
        const { offsetX, offsetY } = e;
        const { offsetWidth, offsetHeight } = heroImage;

        const x = ((offsetX / offsetWidth) - 0.5) * 10;
        const y = ((offsetY / offsetHeight) - 0.5) * 10;

        heroImage.style.transform = `rotateX(${ -y }deg) rotateY(${ x }deg) scale(1.05)`;
    });

    heroImage.addEventListener("mouseleave", () => {
        heroImage.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
}
/* ============================
   Typing Animation
============================ */
const text =" A passionate Web Developer & B.Tech CSE student 📍";
let index = 0;
const speed = 120;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

typeEffect();

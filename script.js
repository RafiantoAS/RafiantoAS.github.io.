// ====================================
// ACTIVE NAVBAR LINK
// ====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ====================================
// SCROLL REVEAL
// ====================================

const revealElements = document.querySelectorAll(
  ".project-card, .skill-box, .service-card, .certificate-card, .achievement-card, .profile-card, .focus-card",
);

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ====================================
// NAVBAR SCROLL EFFECT
// ====================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ====================================
// BACK TO TOP
// ====================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ====================================
// TYPING EFFECT
// ====================================

const textElement = document.getElementById("typing-text");

const roles = [
  "Frontend Developer",
  "Web Developer",
  "UI Designer",
  "Information Systems Student",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    textElement.textContent = currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    textElement.textContent = currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ====================================
// SCROLL PROGRESS
// ====================================

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width = progress + "%";
});

// ====================================
// COUNTER ANIMATION
// ====================================

const counters = document.querySelectorAll(".stat-card h3");

counters.forEach((counter) => {
  const target = parseInt(counter.innerText);

  if (isNaN(target)) return;

  const updateCounter = () => {
    let count = Number(counter.getAttribute("data-count")) || 0;

    const increment = target / 40;

    if (count < target) {
      count += increment;

      counter.innerText = Math.ceil(count);

      counter.setAttribute("data-count", count);

      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});

// ====================================
// DARK / LIGHT MODE
// ====================================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");

  themeToggle.innerHTML = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");

    themeToggle.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "dark");

    themeToggle.innerHTML = "🌙";
  }
});

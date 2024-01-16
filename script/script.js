// Navbar
const toggleBtn = document.getElementById("toggleBtn");
const navLinks = document.querySelector(".nav-links");
const navbar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  if (navLinks.classList.contains("show")) {
    navbar.classList.add("solid");
  } else if (navbar.classList.contains("transparent")) {
    navbar.classList.remove("solid");
  }
});

function closeMenu() {
  navLinks.classList.remove("show");
}

const navAnchors = document.querySelectorAll(".nav-links a");
navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", closeMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("solid");
      navbar.classList.remove("transparent");
    } else {
      navbar.classList.remove("solid");
      navbar.classList.add("transparent");
    }
  });
});

// Menu Button
function changeActive(element) {
  // Remove 'active' class from all elements
  const allElements = document.querySelectorAll(".btn-menu");
  allElements.forEach((el) => el.classList.remove("active"));

  // Add 'active' class to the clicked element
  element.classList.add("active");
}

// Contact
function focusInput(inputId) {
  const labelElement = document.querySelector(`.${inputId}`);
  labelElement.style.top = "10px";
  labelElement.style.fontSize = "0.8rem";
  labelElement.style.color = "rgb(119, 119, 119)";
}

function blurInput(inputId) {
  const inputElement = document.getElementById(inputId);
  const labelElement = document.querySelector(`.${inputId}`);

  if (inputElement.value.trim() === "") {
    labelElement.style.top = "20px";
    labelElement.style.fontSize = "1.1rem";
    labelElement.style.color = "rgb(23, 23, 23)";
  }
}

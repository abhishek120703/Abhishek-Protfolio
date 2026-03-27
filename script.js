document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  // Scroll animation
  const sections = document.querySelectorAll(".fade");

  const reveal = () => {
    sections.forEach(sec => {
      if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
        sec.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();

  // 🔥 POPUP FIX
  document.querySelectorAll(".cert-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();

      const img = this.getAttribute("data-img");

      const modal = document.getElementById("certModal");
      const modalImg = document.getElementById("modalImg");

      modal.classList.add("show");
      modalImg.src = img;
    });
  });

});

// CLOSE
function closeModal(){
  document.getElementById("certModal").classList.remove("show");
}

// CLICK OUTSIDE
window.addEventListener("click", function(e){
  const modal = document.getElementById("certModal");
  if(e.target === modal){
    modal.classList.remove("show");
  }
});

const words = ["Passionate Student", "Developer", "Problem Solver", "Machine Learning Enthusiast"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typed-text").textContent = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  const icon = toggleBtn.querySelector("i");

  if (body.classList.contains("light")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

/* Load saved theme */
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.add("light");
    toggleBtn.querySelector("i").classList.replace("fa-moon", "fa-sun");
  }
});


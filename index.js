const toTopBtn = document.getElementById("btn-to-top");
const navBar = document.querySelector(".nav-bar");
const scrollToTop = () => {
  navBar.scrollIntoView({
    behavior: "smooth",
  });
};

toTopBtn.addEventListener("click", scrollToTop);

let options = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 0.2, 0.61, 1.0],
};

const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.6) {
        toTopBtn.style.display = "none";
      } else {
        toTopBtn.style.display = "block";
      }
    }
  });
};

const observer = new IntersectionObserver(intersectionCallback, options);
observer.observe(navBar);

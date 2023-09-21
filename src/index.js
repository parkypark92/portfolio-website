import "./style.css";

const navBar = document.querySelector("nav");
const introMessage = document.querySelector(".intro-message");
const projectsSection = document.querySelector(".projects-section");
const aboutSection = document.querySelector(".about-section");
const contactSection = document.querySelector(".contact-section");
const aboutButton = document.querySelector(".about-button");
const projectsButton = document.querySelector(".projects-button");
const contactButton = document.querySelector(".contact-button");

function scrollTo(section) {
  section.scrollIntoView({ behavior: "smooth" });
}

aboutButton.addEventListener("click", () => {
  scrollTo(aboutSection);
});

projectsButton.addEventListener("click", () => {
  scrollTo(projectsSection);
});

contactButton.addEventListener("click", () => {
  scrollTo(contactSection);
});

function changeNavOpacity() {
  const messagePosition = introMessage.getBoundingClientRect().top;
  if (messagePosition <= 0) {
    navBar.classList.remove("invisible");
    introMessage.classList.add("invisible");
  } else {
    navBar.classList.add("invisible");
    introMessage.classList.remove("invisible");
  }
}

window.addEventListener("scroll", changeNavOpacity);

import "./style.css";

const projectsSection = document.querySelector(".projects-section");
const aboutSection = document.querySelector(".about-section");
const contactSection = document.querySelector(".contact-section");
const aboutButton = document.querySelector(".about-button");
const projectsButton = document.querySelector(".projects-button");
const contactButton = document.querySelector(".contact-button");

aboutButton.addEventListener("click", () => {
  scrollTo(aboutSection);
});

projectsButton.addEventListener("click", () => {
  scrollTo(projectsSection);
});

contactButton.addEventListener("click", () => {
  scrollTo(contactSection);
});

function scrollTo(section) {
  section.scrollIntoView({ behavior: "smooth" });
}

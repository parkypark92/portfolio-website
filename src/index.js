import "./style.css";

const mainBody = document.querySelector("body");
const navBar = document.querySelector("nav");
const introMessage = document.querySelector(".intro-message");
const projectsSection = document.querySelector(".projects-section");
const aboutSection = document.querySelector(".about-section");
const contactSection = document.querySelector(".contact-section");
const sections = [projectsSection, aboutSection, contactSection];
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
    mainBody.classList.remove("bright-background");
  } else {
    navBar.classList.add("invisible");
    introMessage.classList.remove("invisible");
    mainBody.classList.add("bright-background");
  }
}

function navHighlight() {
  const scrollY = window.scrollY;
  for (let current of sections) {
    const sectionId = current.getAttribute("id");
    const sectionPosition = current.offsetTop - 300;
    const sectionHeight = current.offsetHeight;
    if (
      scrollY > sectionPosition &&
      scrollY <= sectionPosition + sectionHeight
    ) {
      document
        .querySelector(`.${sectionId}-button`)
        .classList.add("highlighted");
    } else {
      document
        .querySelector(`.${sectionId}-button`)
        .classList.remove("highlighted");
    }
  }
}

window.addEventListener("scroll", changeNavOpacity);
window.addEventListener("scroll", navHighlight);

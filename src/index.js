import "./style.css";

const navBar = document.querySelector("nav");
const introMessage = document.querySelector(".intro-message");
const projectsSection = document.querySelector(".projects-section");
const aboutSection = document.querySelector(".about-section");
const contactSection = document.querySelector(".contact-section");
const sections = [projectsSection, aboutSection, contactSection];
const aboutButton = document.querySelector(".about-button");
const projectsButton = document.querySelector(".projects-button");
const contactButton = document.querySelector(".contact-button");
const bigAboutButton = document.querySelector(".big-about");
const bigProjectsButton = document.querySelector(".big-projects");
const bigContactButton = document.querySelector(".big-contact");

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

bigAboutButton.addEventListener("click", () => {
  scrollTo(aboutSection);
});

bigAboutButton.addEventListener("mouseover", (e) => {
  descaleText(e.currentTarget);
});

bigAboutButton.addEventListener("mouseout", (e) => {
  rescaleText(e.currentTarget);
});

bigProjectsButton.addEventListener("click", () => {
  scrollTo(projectsSection);
});

bigProjectsButton.addEventListener("mouseover", (e) => {
  descaleText(e.currentTarget);
});

bigProjectsButton.addEventListener("mouseout", (e) => {
  rescaleText(e.currentTarget);
});

bigContactButton.addEventListener("click", () => {
  scrollTo(contactSection);
});

bigContactButton.addEventListener("mouseover", (e) => {
  descaleText(e.currentTarget);
});

bigContactButton.addEventListener("mouseout", (e) => {
  rescaleText(e.currentTarget);
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

function descaleText(button) {
  button.querySelector("p").classList.add("descale-text");
}

function rescaleText(button) {
  button.querySelector("p").classList.remove("descale-text");
}

window.addEventListener("scroll", changeNavOpacity);
window.addEventListener("scroll", navHighlight);

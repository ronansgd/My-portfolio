// header nav links toggle
const navToggle = document.getElementById("navbar-toggle");
const navList = document.getElementById("navbar-list");

function expandNavBar() {
  if (getComputedStyle(navToggle).display === "block") {
    navToggle.classList.remove("collapsed");
    navList.classList.remove("collapsed");
  }
}

function collapseNavBar() {
  // can collapse only if visible toggle
  if (getComputedStyle(navToggle).display === "block") {
    navToggle.classList.add("collapsed");
    navList.classList.add("collapsed");
  }
}

navToggle.addEventListener("click", () => {
  if (navToggle.classList.contains("collapsed")) {
    expandNavBar();
  } else {
    collapseNavBar();
  }
})

// header navigation variables
const navigationLinks = Array.from(
  document.querySelectorAll("[data-nav-link]")).sort(
    (a, b) => {a.id.localeCompare(b.id)}
  );
const articles = Array.from(
  document.querySelectorAll("[data-page]")).sort(
    (a, b) => {a.id.localeCompare(b.id)}
  );

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", () => {
        for (let j= 0; j < navigationLinks.length; j ++) {
            if (i === j) {
              navigationLinks[j].classList.add("active");
              articles[j].classList.add("active");
              window.scrollTo(0, 0);           
            }
            else {
              navigationLinks[j].classList.remove("active");
              articles[j].classList.remove("active");
            }
        }

        collapseNavBar();
  });}

const nameButton = document.getElementById("header-title");
nameButton.addEventListener("click", () => {
  // go back to about
  for (let i = 1; i < navigationLinks.length; i++) {
    navigationLinks[i].classList.remove("active");
    articles[i].classList.remove("active");
  };

  navigationLinks[0].classList.add("active");
  articles[0].classList.add("active");

  window.scrollTo(0, 0); 
  collapseNavBar();
})
// page navigation variables
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
})
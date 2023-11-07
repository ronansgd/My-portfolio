// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const articles = document.querySelectorAll("[data-page]")

for (let i = 0; i < navigationLinks.length; i++) {
    const navPrefix = navigationLinks[i].id.split('-')[0];
    navigationLinks[i].addEventListener("click", () => {
        for (let j= 0; j < navigationLinks.length; j ++) {
            if (articles[j].id.split('-')[0] === navPrefix) {
                articles[j].classList.add("active");
                window.scrollTo(0, 0);           
            }
            else{
                articles[j].classList.remove("active");
            }
            if (j === i) {
              navigationLinks[j].classList.add("active");
            }
            else {
              navigationLinks[j].classList.remove("active");
            }
        }
  });}
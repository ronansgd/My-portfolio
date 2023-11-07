// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const articles = document.querySelectorAll("[data-page]")

for (let i = 0; i < navigationLinks.length; i++) {
    const navPrefix = navigationLinks[i].id.split('-')[0];
    navigationLinks[i].addEventListener("click", () => {
        for (let j= 0; j < navigationLinks.length; j ++) {
            if (articles[j].id.split('-')[0] === navPrefix) {
                navigationLinks[j].classList.add("active")
                articles[j].classList.add("active");
                console.log("hello");
                window.scrollTo(0, 0);           
            }
            else{
                navigationLinks[j].classList.remove("active")
                articles[j].classList.remove("active");
            }
        }
  });}
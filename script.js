var features = document.querySelector(".features"),
 listFeatures = document.querySelector(".list-features"),
 company = document.querySelector(".company"),
 listCompany = document.querySelector(".list-company"),
 close = document.querySelector(".close-sidebar"),
 btnBurger = document.querySelector(".hamburger-menu"),
 navbar = document.querySelector(".navbar");


close.addEventListener("click", () => {
    navbar.classList.toggle("showSidebar");
})
btnBurger.addEventListener("click", () => {
    navbar.classList.toggle("showSidebar");
})

features.addEventListener("click", () => {
    listFeatures.classList.toggle("features__active");
    listFeatures.classList.toggle("mobile__actives");
})
company.addEventListener("click", () => {
    listCompany.classList.toggle("company__active");
    listCompany.classList.toggle("mobile__activesCompany");
})




const navbar = document.getElementById('navbar');
const pseudo_nav = document.getElementById('pseudo-nav');

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 458 || document.documentElement.scrollTop > 458) {
        navbar.style.position = "fixed";
        pseudo_nav.style.display = "flex";
    }
    else {
        navbar.style.position = "unset";
        pseudo_nav.style.display = "none";
    }
});
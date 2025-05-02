const navbar = document.getElementById('navbar');

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        navbar.style.position = "fixed";
    }
    else {
        navbar.style.position = "unset";
    }
});
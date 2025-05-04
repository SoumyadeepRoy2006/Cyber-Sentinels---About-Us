const top_button = document.getElementById('go-top');


window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 || window.scrollY > 500) {
        top_button.classList.add('visible');
    }
    else {
        top_button.classList.remove('visible');
    }
});

function goTop() {
    window.scrollTo({top: 0});
}
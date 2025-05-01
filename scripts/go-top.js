const top_button = document.getElementById('go-top');

top_button.style.display = 'none';

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      top_button.style.display = "unset";
    } else {
      top_button.style.display = "none";
    }
}

function goTop() {
    window.scrollTo({top: 0});
}
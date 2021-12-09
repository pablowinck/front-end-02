const header = document.getElementById("header");
window.onscroll = function () {
  if (window.scrollY > 15) header.classList.add("header-scroll");
  if (window.scrollY <= 15) header.classList.remove("header-scroll");
};

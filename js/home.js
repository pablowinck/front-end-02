const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text = [text1, text2, text3];
let i = 0;
setInterval(() => {
  text[i].classList.remove("active");
  i++;
  if (i > 2) {
    i = 0;
  }
  text[i].classList.add("active");
}, 3000);

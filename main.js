let stars = document.getElementById("stars1");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains");
let mountains4 = document.getElementById("mountains");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil = document.querySelector(".nouvil");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  nouvil.style.fontSize = value + "px";
  if (value >= 67) {
    nouvil.style.fontSize = 67 + "px";
    nouvil.style.position = "fixed";
    if (value >= 436) {
      nouvil.style.display = "none";
    } else {
      nouvil.style.display = "block";
    }
    if (value >= 100) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281, #10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
};

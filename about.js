const aboutbtn = document.getElementById("aboutbtn");
const about = document.getElementById("about");
const finishbtn = document.getElementById("finishbtn");
const aboutbg = document.getElementById("aboutbg");
const name = document.getElementById("name");

function showabt() {
  about.classList.toggle("show");
  aboutbg.classList.toggle("show");
  aboutbtn.style.textDecoration = "underline";
}

function finishabt() {
  about.classList.add("show");
  aboutbg.classList.toggle("show");
  aboutbtn.style.textDecoration = "none";
}

aboutbtn.addEventListener("click", showabt);
finishbtn.addEventListener("click", finishabt);
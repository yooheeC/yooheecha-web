const aboutbtn = document.getElementById("aboutbtn");
const about = document.getElementById("about");
const finishbtn = document.getElementById("finishbtn");

function showabt() {
  about.classList.toggle("show");
}

function finishabt() {
  about.classList.add("show");
}

aboutbtn.addEventListener("click", showabt);
finishbtn.addEventListener("click", finishabt);
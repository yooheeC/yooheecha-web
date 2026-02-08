const aboutbtn = document.getElementById("aboutbtn");
const about = document.getElementById("about");
const finishbtn = document.getElementById("finishbtn");
const nameLink = document.querySelector('.topbar button a');

function showabt() {
  about.classList.toggle("show");
  aboutbtn.style.textDecoration = "underline";
  aboutbtn.style.color = "black";
  nameLink.style.color = "black";
}

function finishabt() {
  about.classList.add("show");
  aboutbtn.style.textDecoration = "none";
  aboutbtn.style.color = "white";
  nameLink.style.color = "white";
}

aboutbtn.addEventListener("click", showabt);
finishbtn.addEventListener("click", finishabt);
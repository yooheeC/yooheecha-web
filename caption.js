const title = document.getElementsByClassName("title");
const titleitalic = document.getElementsByClassName("title-italic");
const caption = document.getElementsByClassName("caption");
const des = document.getElementsByClassName("des");
const more = document.getElementsByClassName("more");


console.log(title[0]);


function showcap() {
  for (let i = 0; i < caption.length; i++) {
    caption[i].addEventListener("click", opendes);

    function opendes() {
      if (des[i].classList.contains("show")) {
        des[i].classList.remove("show");
        caption[i].style.textDecoration = "underline";
        title[i].style.fontStyle = "oblique";
        more[i].innerHTML = "–"
      } else {
        des[i].classList.add("show");
        caption[i].style.textDecoration = "none";
        title[i].style.fontStyle = "normal";
        more[i].innerHTML = "+"
      }
    }
  }
}

showcap();




const title = document.getElementsByClassName("title");
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
                more[i].innerHTML = "–"
              } else {
                des[i].classList.add("show");
                caption[i].style.textDecoration = "none";
                more[i].innerHTML = "+"
              }
        }
    }
}

showcap();

  


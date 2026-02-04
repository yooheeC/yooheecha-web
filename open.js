const shelf = document.getElementsByClassName("open-work-info");
const morebtn = document.getElementsByClassName("more-btn");
const hoverdescription = document.getElementsByClassName("row-description")
const openallbtn = document.getElementById("openall-btn");

const titleitalic = document.getElementsByClassName("title-italic");
const more = document.getElementsByClassName("more");
const row = document.getElementsByClassName("row-worklist");
const year = document.getElementsByClassName("year");


console.log(shelf);
console.log(morebtn);


function openallshelf() {
    for (let i = 0; i < shelf.length; i++) {
        if (shelf[i].classList.contains("hidden")) {
            shelf[i].classList.remove("hidden");
            openallbtn.innerText = "open all";
        } else {
            shelf[i].classList.add("hidden");
            openallbtn.innerText = "close all";
        }
        if (openallbtn.innerText = "close all") {
            shelf[i].classList.add("hidden");
            openallbtn.innerText = "open all";
        } else {
            shelf[i].classList.remove("hidden");
            openallbtn.innerText = "close all";
        }
    }
}


function openshelf() {
    for (let i = 0; i < hoverdescription.length; i++) {
        hoverdescription[i].addEventListener("click", openshelf);

        function openshelf() {
            if (shelf[i].classList.contains("hidden")) {
                shelf[i].classList.remove("hidden");
                morebtn[i].style.textDecoration = "underline";
                hoverdescription[i].style.textDecoration = "underline";
                morebtn[i].innerHTML = "—";
                titleitalic[i].style.fontStyle = "oblique";

                // title[i].style.fontStyle = "oblique";
            } else {
                shelf[i].classList.add("hidden");
                morebtn[i].style.textDecoration = "none";
                hoverdescription[i].style.textDecoration = "none";
                morebtn[i].innerHTML = "+";
                titleitalic[i].style.fontStyle = "normal";
            }
        }
    }
}

function hovershelf() {
    for (let i = 0; i < row.length; i++) {
        row[i].addEventListener("mouseover", hovershelf);

        function hovershelf() {
            titleitalic[i].style.fontStyle = "oblique";
            titleitalic[i].stlye.textDecoration = "underline";
            more[i].style.textDecoration = "underline";
            year[i].style.textDecoration = "underline";
        }
    }
}


hovershelf();
openshelf();
hoverdescription.addEventListener("click", openallshelf);




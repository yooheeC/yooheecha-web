const overviewbtn = document.getElementById("overviewbtn");
const overview = document.getElementById("overview");
const list = document.getElementById("scroll-wrapper");

function showoverview() {
    if (overviewbtn.innerText = "overview") {
        overview.style.display = "flex";
        overviewbtn.style.textDecoration = "underline";
        overviewbtn.innerText = "close";
        list.style.display = "none";
    }

    overviewbtn.addEventListener("click", showoverview);

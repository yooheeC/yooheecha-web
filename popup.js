const popups = document.querySelectorAll(".popup");
const clickimgs = document.querySelectorAll(".link-block");

let currentIndex = 0;

// 모든 팝업 숨기고 하나만 보여주는 함수
function showPopup(index) {
    popups.forEach(p => p.style.display = "none");
    popups[index].style.display = "block";
    currentIndex = index;
}

// 각 이미지 클릭 시 해당 인덱스의 팝업 열기
clickimgs.forEach((img, index) => {
    img.addEventListener("click", () => {
        showPopup(index);
    });
});

// 팝업 내부 버튼들에 대해 이벤트 연결
popups.forEach((popup, index) => {
    const closeBtn = popup.querySelector(".closebtn");
    const nextBtn = popup.querySelector(".nextbtn");
    const prevBtn = popup.querySelector(".prevbtn");

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    nextBtn.addEventListener("click", () => {
        let nextIndex = (index + 1) % popups.length;
        showPopup(nextIndex);
    });

    prevBtn.addEventListener("click", () => {
        let prevIndex = (index - 1 + popups.length) % popups.length;
        showPopup(prevIndex);
    });
});
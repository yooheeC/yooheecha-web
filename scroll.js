const container = document.querySelector('#scroll-wrapper');

document.addEventListener('wheel', (e) => {
    e.preventDefault(); // 기본 스크롤 방지
    container.scrollLeft += e.deltaY; // 세로 스크롤을 가로로 변환
}, { passive: false }); // passive 옵션 false로 설정
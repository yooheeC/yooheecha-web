document.querySelectorAll('.carousel-block').forEach((block) => {
  // 현재 블록 안의 카루셀과 인덱스 표시 요소를 찾습니다.
  const carousel = block.querySelector('.carousel');
  const indexDisplay = block.querySelector('.carousel-index');
  const items = block.querySelectorAll('.carousel-item');
  const total = items.length;

  if (carousel && indexDisplay) {
    // 1. 초기 인덱스 설정 (1 / 전체 개수)
    indexDisplay.innerText = `1 / ${total}`;

    // 2. 카루셀 슬라이드 완료 이벤트 리스너 추가
    carousel.addEventListener('slid.bs.carousel', (event) => {
      // event.to는 0부터 시작하므로 1을 더해 현재 번호를 만듭니다.
      const current = event.to + 1;
      indexDisplay.innerText = `${current} / ${total}`;
    });
  }
});
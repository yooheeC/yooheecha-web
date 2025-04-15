document.addEventListener("DOMContentLoaded", () => {
    // 모든 카루셀 찾기
    const carousels = document.querySelectorAll(".carousel");
  
    carousels.forEach(carousel => {
      const carouselIndex = carousel.querySelector(".carousel-index");
      const items = carousel.querySelectorAll(".carousel-item");
      const total = items.length; // 전체 이미지 개수
  
      // 초기 인덱스 설정
      carouselIndex.textContent = `1 / ${total}`;
  
      // 부트스트랩 슬라이드 이벤트 감지
      carousel.addEventListener("slide.bs.carousel", (event) => {
        const currentIndex = event.to + 1; // 0-based index이므로 +1
        carouselIndex.textContent = `${currentIndex} / ${total}`;
      });
    });
  });
const images = [ "starting/01.jpg", "starting/02.jpg", "starting/03.jpg", "starting/04.jpg", "starting/05.jpg", "starting/06.jpg", "starting/07.jpg", "starting/08.jpg", "starting/09.jpg", "starting/10.jpg", "starting/11.jpg", "starting/12.jpg", "starting/13.jpg", "starting/14.jpg", "starting/15.jpg", "starting/16.jpg", "starting/17.jpg", "starting/18.jpg", "starting/19.jpg", "starting/20.jpg", "starting/21.jpg", "starting/22.jpg", "starting/23.jpg", "starting/24.jpg", "starting/25.jpg", "starting/26.jpg", "starting/27.jpg", "starting/28.jpg", "starting/29.jpg", "starting/30.jpg", "starting/31.jpg", "starting/32.jpg", "starting/33.jpg", "starting/34.jpg", "starting/35.jpg", "starting/36.jpg", "starting/37.jpg", "starting/38.jpg", "starting/39.jpg", "starting/40.jpg", "starting/41.jpg", "starting/42.jpg", "starting/43.jpg", "starting/44.jpg", "starting/45.jpg", "starting/46.jpg", "starting/47.jpg" ]

let currentIndex = 0;
let animationActive = true; 

const fixedDiv = document.querySelector('#backgroundDiv');

const preloadImages = (images) => {
  images.forEach(src => {
      const img = new Image();
      img.src = src;
  });
};

preloadImages(images);

const changeBackground = () => {
    currentIndex = (currentIndex + 1) % images.length;
     const newImage = new Image(); // 새 이미지 객체 생성
     newImage.src = images[currentIndex]; // 새 이미지 로드
  
      // 이미지가 완전히 로드된 후에 배경 변경 (깜빡임 방지)
      newImage.onload = () => {
        fixedDiv.style.backgroundImage = `url(${newImage.src})`;
      };
};



// Start with the first image
document.addEventListener('DOMContentLoaded', changeBackground);

// Change background every 3 seconds
let intervalId = setInterval(changeBackground, 1000);


// Additionally, detect scrolling and stop/resume the interval
let isScrolling;

window.addEventListener('scroll', () => {
  animationActive = false; // Stop animation if scrolling
  clearInterval(intervalId); // Clear the current interval

  // Start a timeout to check when the user stops scrolling
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
      animationActive = true; // Resume animation once scrolling stops
      intervalId = setInterval(changeBackground, 1000); // Restart the interval
  }, 200); // Time in milliseconds (200ms in this case)
});
const images = [ "starting/01.jpg", "starting/02.jpg", 
  "starting/03.png","starting/04.png", "starting/05.JPG", "starting/06.png", "starting/07.png", "starting/08.png", "starting/09.jpg", "starting/10.png", "starting/11.png",
  "starting/12.png", "starting/13.jpg", "starting/14.png", "starting/15.JPG",
  "starting/16.png", "starting/17.png","starting/18.png", "starting/19.png", "starting/20.png", "starting/21.png",
  "starting/22.png","starting/23.jpg", "starting/24.JPG", "starting/25.png", "starting/26.png", "starting/27.png", "starting/28.png",
  "starting/29.JPG", "starting/30.jpg","starting/31.jpg",
  "starting/32.jpg","starting/33.jpg", "starting/34.jpg",
  "starting/35.jpg","starting/36.jpg","starting/34.png","starting/37.jpg", "starting/38.jpg", "starting/39.jpg",
  "starting/40.jpg","starting/41.jpg","starting/42.png", "starting/43.JPG", "starting/44.jpg", "starting/45.jpg","starting/46.png","starting/47.jpg"
];

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
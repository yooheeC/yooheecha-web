const images = [ "starting/0.png", "starting/01.jpg", 
  "starting/1.jpeg","starting/1.jpg", "starting/1.png", "starting/2.jpg", "starting/3.jpg", "starting/4.jpeg", "starting/4.png", "starting/04.png", "starting/5.png",
  "starting/6.jpg", "starting/7.png", "starting/8.png", "starting/9.png",
  "starting/10.jpeg", "starting/11.jpeg","starting/12.png", "starting/14.png", "starting/15.png", "starting/16.png",
  "starting/18.png","starting/19.png", "starting/20.png", "starting/22.jpg", "starting/23.png", "starting/24.png", "starting/25.png",
  "starting/26.jpg", "starting/27.jpg","starting/28.jpg",
  "starting/29.jpg","starting/30.jpeg", "starting/31.jpg",
  "starting/32.jpg","starting/33.png","starting/34.png","starting/35.png", "starting/36.png", "starting/37.png",
  "starting/38.png","starting/39.png","starting/40.png", "starting/41.JPG", "starting/42.jpg", "starting/43.png",
  "starting/44.png", "starting/45.png", "starting/46.png", "starting/47.png", "starting/48.png", "starting/49.jpg", "starting/50.jpg"
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
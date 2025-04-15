const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-image');
const imageContainers = document.querySelectorAll('.image-container');

let currentImageIndex = 0;
let currentContainerIndex = 0;

// Add click listener to all images in all containers
imageContainers.forEach((container, containerIndex) => {
    const images = container.querySelectorAll('img');

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            currentContainerIndex = containerIndex;
            openOverlay(img.src);
        });
    });
});

function openOverlay(src) {
    overlayImage.src = src;
    overlay.style.display = 'flex';
}

overlay.addEventListener('click', (event) => {
    overlay.style.display = 'none';
});

// Handle previous and next navigation
overlay.querySelector('.prev').addEventListener('click', (event) => {
    event.stopPropagation();
    previousImage();
});

overlay.querySelector('.next').addEventListener('click', (event) => {
    event.stopPropagation();
    nextImage();
});

function previousImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imageContainers[currentContainerIndex].querySelectorAll('img').length - 1;
    updateOverlayImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex < imageContainers[currentContainerIndex].querySelectorAll('img').length - 1) ? currentImageIndex + 1 : 0;
    updateOverlayImage();
}

function updateOverlayImage() {
    const images = imageContainers[currentContainerIndex].querySelectorAll('img');
    overlayImage.src = images[currentImageIndex].src;
}


// Swipe navigation for touch devices
let touchStartX = 0;
let touchEndX = 0;

overlay.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

overlay.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipeGesture();
});

function handleSwipeGesture() {
    if (touchStartX > touchEndX + 50) {
        nextImage();
    } else if (touchStartX < touchEndX - 50) {
        previousImage();
    }
}
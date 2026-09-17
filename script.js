
const images = [
    "image1.svg",
    "image2.svg",
    "image3.svg",
    "image4.svg"
];

let currentIndex = 0;

const carouselImage = document.getElementById("carouselImage");

function showImage() {
    carouselImage.src = images[currentIndex];
    carouselImage.alt = "Image " + (currentIndex + 1);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previousImage() {
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;

    showImage();
}

// Automatically change image every 3 seconds
setInterval(nextImage, 3000);

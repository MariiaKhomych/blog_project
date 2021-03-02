const images = [
    'image/aeroport.jpg',
    'image/rest.jpg',
    'image/sand.jpg',
]

let currIdx = 0;

function showCurrentImage() {
    const imageContainer = document.querySelector('.current');
    imageContainer.src = images[currIdx];
}

showCurrentImage();

function nextImage() {
    currIdx++;
    if (currIdx >= images.length) currIdx = 0;
    showCurrentImage();  
}

function prevImage() {
    currIdx--;
    if (currIdx < 0) currIdx = images.length - 1;
    showCurrentImage();
}

document.querySelector('.prev').addEventListener('click', prevImage);
document.querySelector('.next').addEventListener('click', nextImage);
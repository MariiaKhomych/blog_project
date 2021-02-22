const images = [
    'image/dog.jpg',
    'image/fountain.jpg',
    'image/shenbrunn.jpg',
    'image/prince.jpg',
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
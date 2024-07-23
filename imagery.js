const images = [
    "AntichristSuperstar",
    "download",
    "download(1)",
    "download(2)",
    "download(3)",
    "download(4)",
    "download(5)",
    "download(6)",
    "download(7)",
    "holywood",
    "ErikCrahan",
    "marilynmanson",
    "marilynmanson(1)",
    "marilynmanson(2)",
    "marilynmanson(3)",
    "marilynmanson(4)",
    "marilynmanson(5)",
    "marilynmanson(6)",
    "marilynmanson(7)",
    "purple",
    "thenobodies",
    "ringsandtattoos",
    "mm"
]

const coverStory = document.getElementById("cover-story");
const header = document.getElementById("header");

let currentIndex = 0;

function loopThrough() {
    setInterval(() => {
        coverStory.src = `images/${images[currentIndex]}.jpg`;
        currentIndex = (currentIndex + 1) % images.length;
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    loopThrough()
    coverStory.addEventListener('animationend', () => {
        header.style.animation = '.5s slideDown var(--default) forwards';
    })
})
document.addEventListener('mousemove', (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const x = (e.clientX - width / 2) / width;
    const y = (e.clientY - height / 2) / height;

    const moveX = x * 50;
    const moveY = y * 50;
    
    const counter = document.querySelector(".counter");
    counter.style.transform = `translate(${moveX}px, ${moveY}px)`;
})
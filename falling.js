// A lezuhanó képek URL-jei egy tömbben
const imageSrcs = [
    '1.png',
    '2.png',
    '3.png'
];

// A másodpercenként legenerált képek száma (pl. 5 kép/mp)
const imagesPerSecond = 5;

function createFallingImage() {
    // Válasszon egy véletlenszerű képet a tömbből
    const randomImageSrc = imageSrcs[Math.floor(Math.random() * imageSrcs.length)];

    const img = document.createElement('img');
    img.src = randomImageSrc;
    img.style.position = 'fixed';
    img.style.top = `-${Math.random() * 200}px`;
    img.style.left = `${Math.random() * 100}vw`;
    img.style.width = `${15 + Math.random() * 15}px`;
    img.style.height = 'auto';
    img.style.opacity = '0.8';
    img.style.pointerEvents = 'none';
    img.style.transition = 'transform 10s linear, opacity 10s linear';

    document.body.appendChild(img);

    setTimeout(() => {
        img.style.transform = `translateY(${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg)`;
        img.style.opacity = '0';
    }, 100);

    // Eltávolítja a képet, amikor eléri a képernyő alját
    img.addEventListener('transitionend', () => {
        img.remove();
    });
}

// Folyamatosan generálja a képeket a setInterval segítségével
// A képek megjelenésének időközét a másodpercenkénti képek száma határozza meg
// 1000 / imagesPerSecond
setInterval(() => {
    createFallingImage();
}, 1000 / imagesPerSecond);
const canvas = document.querySelector('#canvas') as HTMLCanvasElement;

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

canvas.width = screenWidth;
canvas.height = screenHeight - 100;

const context = canvas.getContext('2d');

const alienImage = document.querySelector('#alien') as CanvasImageSource;

context.drawImage(
    alienImage,
    (screenWidth - 64) / 2,
    screenHeight - 200,
    64,
    97
);

canvas.addEventListener('touchmove', (e: TouchEvent) => {
    const distanceMoved = e.changedTouches[0].clientX - (screenWidth - 64);
    context.clearRect(0, 0, screenWidth, screenHeight);
    context.drawImage(
        alienImage,
        (screenWidth - 64 + distanceMoved) / 2,
        screenHeight - 200,
        64,
        97
    );
});

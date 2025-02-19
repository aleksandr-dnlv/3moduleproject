const slider = document.getElementById('wtrix-slider');
const leftImage = document.querySelector('.wtrix-left');
const rightImage = document.querySelector('.wtrix-right');
const imageContainer = document.querySelector('.image-container');
let isDragging = false;

function getMinSize() {
    return (window.innerWidth * 12) / 100;
}
function initSliderPosition() {
    const containerWidth = imageContainer.offsetWidth;
    const minSize = getMinSize();
    const center = Math.max(minSize, Math.min(containerWidth / 2, containerWidth - minSize));
    
    slider.style.left = `${center}px`;
    leftImage.style.width = `${center}px`;
    rightImage.style.width = `${containerWidth - center}px`;
}
window.addEventListener('load', initSliderPosition);
window.addEventListener('resize', () => {
    slider.style.transition = 'none';
    leftImage.style.transition = 'none';
    rightImage.style.transition = 'none';
    initSliderPosition();
});
slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    slider.style.transition = 'none';
    leftImage.style.transition = 'none';
    rightImage.style.transition = 'none';
});
window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const containerRect = imageContainer.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const minSize = getMinSize();
    const offsetX = Math.max(
    minSize,
    Math.min(
    e.clientX - containerRect.left,
    containerWidth - minSize));
    slider.style.left = `${offsetX}px`;
    leftImage.style.width = `${offsetX}px`;
    rightImage.style.width = `${containerWidth - offsetX}px`;
});
window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    slider.style.transition = 'left 0.5s ease';
    leftImage.style.transition = 'width 0.5s ease';
    rightImage.style.transition = 'width 0.5s ease';

    const containerWidth = imageContainer.offsetWidth;
    const minSize = getMinSize();
    const center = Math.max(
        minSize,
        Math.min(containerWidth / 2, containerWidth - minSize)
    );
    slider.style.left = `${center}px`;
    leftImage.style.width = `${center}px`;
    rightImage.style.width = `${containerWidth - center}px`;

    setTimeout(() => {
        slider.style.transition = 'none';
        leftImage.style.transition = 'none';
        rightImage.style.transition = 'none';
    }, 500);
});
const image = document.getElementById('map');
const grayscaleSlider = document.getElementById('grayscale');
const invertSlider = document.getElementById('invert');
const contrastSlider = document.getElementById('contrast');

function updateFilters() {
    const grayscaleValue = grayscaleSlider.value + '%';
    const invertValue = invertSlider.value + '%';
    const contrastValue = contrastSlider.value + '%';
    image.style.filter = `
    grayscale(${grayscaleValue})
    invert(${invertValue})
    contrast(${contrastValue})
    `;
}
document.addEventListener('DOMContentLoaded', updateFilters);
grayscaleSlider.addEventListener('input', updateFilters);
invertSlider.addEventListener('input', updateFilters);
contrastSlider.addEventListener('input', updateFilters);

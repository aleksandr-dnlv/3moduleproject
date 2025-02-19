const mainImage = document.getElementById('main-image');
const triggerImage = document.getElementById('trigger-image');
const initialImageUrl = mainImage.src;
const newImageUrl = 'images/finishlogo.png';

let isImageChanged = false;

 triggerImage.addEventListener('click', function() {
     if (!isImageChanged) {
         mainImage.src = newImageUrl;
         isImageChanged = true;
     } else {
        mainImage.src = initialImageUrl;
    isImageChanged = false;
        mainImage.style.transform = 'scale(1)';
     }
 });
const icons = document.querySelectorAll('.majong-icons img');
const sound = new Audio('/audio/click.mp3');
sound.volume = 0.2;

let draggedIcon = null;

icons.forEach(icon => {
    icon.addEventListener('dragstart', dragStart);
    icon.addEventListener('dragover', dragOver);
    icon.addEventListener('drop', dragDrop);
});
function dragStart(event) {
    draggedIcon = this;
}
function dragOver(event) {
    event.preventDefault();
}
function dragDrop(event) {
    if (draggedIcon !== this) {
        this.classList.add('replace');
        draggedIcon.classList.add('replace');
        sound.play();
        setTimeout(() => {
            const tempSrc = this.src;
            this.src = draggedIcon.src;
            draggedIcon.src = tempSrc;
            this.classList.remove('replace');
            draggedIcon.classList.remove('replace');
        }, 200);
    }
}

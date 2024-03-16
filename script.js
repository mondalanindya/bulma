document.addEventListener('DOMContentLoaded', () => {
    const handle = document.querySelector('.handle');
    const slider = document.querySelector('.slider');
    let isPressedDown = false;
    let startX;

    const mouseDownHandler = function(e) {
        isPressedDown = true;
        startX = e.clientX;
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        if (!isPressedDown) return;
        const dx = e.clientX - startX;
        const newLeft = Math.min(Math.max(0, handle.offsetLeft + dx), slider.parentElement.offsetWidth);

        slider.style.width = `${newLeft}px`;
        handle.style.left = `${newLeft}px`;
        startX = e.clientX;
    };

    const mouseUpHandler = function() {
        isPressedDown = false;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    handle.addEventListener('mousedown', mouseDownHandler);
});

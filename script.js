document.addEventListener('DOMContentLoaded', () => {
    const handle = document.querySelector('.handle');
    const slider = document.querySelector('.slider');
    const container = document.querySelector('.image-compare-container');

    let isPressedDown = false;
    let startX;
    let offsetLeft;

    const mouseDownHandler = function(e) {
        isPressedDown = true;
        startX = e.clientX;
        offsetLeft = handle.offsetLeft;
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        if (!isPressedDown) return;
        const x = e.clientX;
        const walk = (x - startX) * 2; // Multiplied by 2 due to the slider image width being 200%
        let newLeft = offsetLeft + walk;
        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > container.offsetWidth - handle.offsetWidth) {
            newLeft = container.offsetWidth - handle.offsetWidth;
        }
        handle.style.left = newLeft + 'px';
        slider.style.width = newLeft + 'px';
    };

    const mouseUpHandler = function() {
        isPressedDown = false;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    handle.addEventListener('mousedown', mouseDownHandler);
});

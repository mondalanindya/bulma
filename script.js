document.addEventListener('DOMContentLoaded', () => {
    const handle = document.querySelector('.handle');
    const slider = document.querySelector('.slider');
    let isDragging = false;

    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault(); // Prevents unwanted text selection during drag on some browsers.
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        // Calculate new position within the container bounds.
        const rect = handle.parentElement.getBoundingClientRect();
        const newPos = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        // Adjust the slider (mask) width based on handle movement.
        slider.style.width = `${newPos}px`;
        // Update handle position.
        handle.style.left = `${newPos}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

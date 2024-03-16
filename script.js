document.addEventListener('DOMContentLoaded', () => {
    const handle = document.querySelector('.handle');
    const slider = document.querySelector('.slider');
    let isDragging = false;

    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        // Calculate slider position relative to the image container
        const rect = slider.getBoundingClientRect();
        let newLeft = e.clientX - rect.left;

        // Clamp the new position to the container bounds
        newLeft = Math.max(0, Math.min(newLeft, slider.parentElement.offsetWidth));

        // Set new positions
        slider.style.width = `${newLeft}px`;
        handle.style.left = `${newLeft}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

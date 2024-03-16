document.addEventListener('DOMContentLoaded', () => {
    const handle = document.querySelector('.handle');
    const img2 = document.getElementById('img2');
    let isDragging = false;

    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', mouseMoveHandler);
        });
    });

    const mouseMoveHandler = (e) => {
        if (!isDragging) return;
        const rect = handle.parentElement.getBoundingClientRect();
        const offset = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
        const percentage = (offset / rect.width) * 100;
        handle.style.left = percentage + '%';
        img2.style.width = percentage + '%';
        img2.style.left = percentage + '%';
    };
});

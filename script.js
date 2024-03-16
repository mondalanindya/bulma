document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.image-compare-container');

    containers.forEach(container => {
        const slider = container.querySelector('.slider');
        const overlay = container.querySelector('.overlay');
        let isDown = false;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            document.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
            }, { once: true });
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const rect = container.getBoundingClientRect();
            const x = e.pageX - rect.left;
            const walk = Math.max(0, Math.min(x, rect.width));
            slider.style.left = walk + 'px';
            overlay.style.clipPath = `inset(0 ${rect.width - walk}px 0 0)`;
        });
    });
});

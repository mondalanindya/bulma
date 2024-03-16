document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const overlay = document.getElementById('overlay');
    let isDown = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    document.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if (!isDown) return;
        const x = e.pageX - slider.parentElement.offsetLeft;
        const walk = Math.max(0, Math.min(x, slider.parentElement.offsetWidth));
        slider.style.left = walk + 'px';
        overlay.style.clipPath = `inset(0 ${slider.parentElement.offsetWidth - walk}px 0 0)`;
    });
});

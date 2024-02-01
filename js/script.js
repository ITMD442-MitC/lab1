document.addEventListener('DOMContentLoaded', () => {
    const numberOfFireflies = 15;
    for (let i = 0; i < numberOfFireflies; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        // Set initial random positions
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(firefly);
    }
});

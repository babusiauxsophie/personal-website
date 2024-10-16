import gsap from "gsap";

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function mouse() {
    const background = document.querySelector('body');

    const debouncedMouseMove = debounce((e) => {
        const { pageX: x, pageY: y } = e;
        
        const brighterColor = 'rgb(28, 38, 61)';

        gsap.to(background, {
            duration: 0.1,
            background: `radial-gradient(circle at ${x}px ${y}px, ${brighterColor} 200px, rgb(18, 28, 51) 400px)`, 
            ease: 'power2.out',
        });
    }, 1);

    document.addEventListener('mousemove', debouncedMouseMove);
}

export default mouse;


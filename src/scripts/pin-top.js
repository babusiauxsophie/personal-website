import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPinTop = () => {
    const $pinContainers = document.querySelectorAll("[data-animation='pin-top']");

    $pinContainers.forEach($pinContainer => {
        const $pinElement = $pinContainer.querySelector("[data-element='pin']");

        const $blurEffect = document.createElement('div');
        $blurEffect.classList.add('blur-effect');
        $pinContainer.appendChild($blurEffect);

        ScrollTrigger.create({
            trigger: $pinContainer,
            start: "top top",
            end: () => `+=${$pinContainer.offsetHeight}`,
            pin: $pinElement,
            pinSpacing: false,
            scrub: true,
            onEnter: () => $blurEffect.classList.add('active'), 
            onLeave: () => $blurEffect.classList.remove('active'),
            onEnterBack: () => $blurEffect.classList.add('active'),
            onLeaveBack: () => $blurEffect.classList.remove('active'),
        });
    });
};

export default initPinTop;

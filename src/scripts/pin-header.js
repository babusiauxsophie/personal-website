import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPinHeader = () => {
    const $pinContainers = document.querySelectorAll("[data-animation='pin-header']");

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handlePinning = (e) => {
        if (e.matches) {
            $pinContainers.forEach($pinContainer => {
                const $pinElement = $pinContainer.querySelector("[data-element='pin-side']");

                ScrollTrigger.create({
                    trigger: $pinContainer,
                    start: "-65 top", 
                    end: "101% bottom",
                    pin: $pinElement,
                    pinSpacing: false,
                    scrub: true
                });
            });
        } else {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    };

    mediaQuery.addEventListener("change", handlePinning);

    handlePinning(mediaQuery);
};

export default initPinHeader;

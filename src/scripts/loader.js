import gsap from "gsap";

const initLoadingScreenEffect = () => {
    const $loadingScreen = document.querySelector(".loading-screen");

    if (!$loadingScreen) {
        console.error('Loading screen not found!');
        return;
    }

    const minimumDisplayTime = 1200;
    console.log('Loading screen found. Will display for at least 2 seconds.');

    const slideOutLoadingScreen = () => {
        console.log('Starting to slide out loading screen...');

        gsap.to($loadingScreen, {
            translateY: "-100%",
            duration: 0.5,
            ease: "power1.out",
            onComplete: () => {
                console.log('Loading screen slid out successfully.');
            },
        });
    };

    setTimeout(slideOutLoadingScreen, minimumDisplayTime);
};

export default initLoadingScreenEffect;

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initScrollHighlight = () => {
    const sections = [
        { id: "#about", title: "About" },
        { id: "#journey", title: "Journey" },
        { id: "#projects", title: "Projects" },
    ];

    const headerLinks = sections.map(section => ({
        section,
        link: document.querySelector(`a[href="${section.id}"]`),
        listItem: document.querySelector(`a[href="${section.id}"]`)?.closest("li")
    }));

    const removeAllHoverClasses = () => {
        headerLinks.forEach(({ listItem }) => {
            listItem?.classList.remove("hover");
        });
    };

    const addHoverClass = (index) => {
        headerLinks[index].listItem?.classList.add("hover");
    };

    addHoverClass(0);

    headerLinks.forEach(({ section, listItem }, index) => {
        const targetSection = document.querySelector(section.id);

        if (targetSection && listItem) {
            ScrollTrigger.create({
                trigger: targetSection,
                start: index === 0 ? "top top" : "top center",
                end: "bottom center",
                onEnter: () => {
                    console.log(`Entering ${section.title}`);
                    removeAllHoverClasses();
                    addHoverClass(index);
                },
                onEnterBack: () => {
                    console.log(`Entering back ${section.title}`);
                    removeAllHoverClasses();
                    addHoverClass(index);
                },
                onLeave: () => {
                    console.log(`Leaving ${section.title}`);
                    if (index < sections.length - 1) {
                        removeAllHoverClasses();
                        addHoverClass(index + 1);
                    }
                },
                onLeaveBack: () => {
                    console.log(`Leaving back ${section.title}`);
                    if (index > 0) {
                        removeAllHoverClasses();
                        addHoverClass(index - 1);
                    }
                }
            });
        } else {
            console.warn(`Could not find section or header list item for ${section.title}`);
        }
    });

    ScrollTrigger.create({
        trigger: "#about",
        start: "center center",
        end: "#journey top center",
        onEnter: () => {
            console.log("Entering early Journey trigger zone");
            removeAllHoverClasses();
            addHoverClass(1);
        },
        onLeaveBack: () => {
            console.log("Leaving early Journey trigger zone (going up)");
            removeAllHoverClasses();
            addHoverClass(0);
        }
    });

    const initialHighlight = () => {
        const scrollPosition = window.pageYOffset;
        const aboutSection = document.querySelector("#about");
        const journeyTriggerPoint = aboutSection.offsetTop + aboutSection.offsetHeight / 2;

        if (scrollPosition < journeyTriggerPoint) {
            removeAllHoverClasses();
            addHoverClass(0);
        } else {
            removeAllHoverClasses();
            addHoverClass(1);
        }
    };

    setTimeout(initialHighlight, 100);

    window.addEventListener('resize', initialHighlight);
};

document.addEventListener("DOMContentLoaded", initScrollHighlight);

export default initScrollHighlight;
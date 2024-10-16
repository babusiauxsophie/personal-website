import gsap from "gsap";

import initLoadingScreenEffect from "./loader.js";
import initPinTop from "./pin-top.js";
import mouse from "./flashlight.js";
import initPinHeader from "./pin-header.js";
import initScrollHighlight from "./title-hover.js";


initLoadingScreenEffect();
mouse();
initPinHeader();
initPinTop();
initScrollHighlight();


console.log('Javascript loaded!');      
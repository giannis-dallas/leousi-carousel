/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log("Hello World! (from dallas-blocks-leousi-carousel block)");

// import Swiper packages
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

// import swiper css bundle
import "swiper/css/bundle";

// import GLightbox

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

document.addEventListener("DOMContentLoaded", () => {

	console.log("test");

	const lightboxGallery = GLightbox({
		selector: ".glightbox-gallery",
		touchNavigation: true,
		loop: true,
	});

});

/* eslint-enable no-console */

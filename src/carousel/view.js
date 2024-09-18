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
	const swipers = document.querySelectorAll(".swiper-container");

	swipers.forEach((swiperContainer) => {
		new Swiper(swiperContainer, {
			modules: [Navigation],

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			loop: true,

			// Default parameters
			slidesPerView: 1,
			spaceBetween: 0,
			// Responsive breakpoints
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 2,
				},
				// when window width is >= 680px
				680: {
					slidesPerView: 3,
				},
				// when window width is >= 1024px
				1024: {
					slidesPerView: 4,
				},
				// when window width is >= 1400px
				1400: {
					slidesPerView: 5,
				},
			},
		});
	});

	console.log("test");

	const lightboxCarousel = GLightbox({
		selector: ".glightbox-carousel",
		touchNavigation: true,
		loop: true,
	});
});

/* eslint-enable no-console */

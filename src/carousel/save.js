/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save({ attributes }) {
	const { images } = attributes;
	console.log({ images, attributes });

	return (
		<div {...useBlockProps.save()} className="swiper swiper-container">
			<div className="swiper-wrapper">
				{images.map((image, index) => (
					<div className="swiper-slide" key={index}>
						<a href={image.url} className="glightbox-carousel" data-gallery="gallery1">
							<img className="image" src={image.url} alt={image.alt} />
						</a>
					</div>
				))}
			</div>
			{/* Add pagination, navigation, scrollbar if necessary */}
			<div className="swiper-button-next"></div>
			<div className="swiper-button-prev"></div>
		</div>
	);
}

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
		<div {...useBlockProps.save()} className="photo-gallery">
			{images.map((image, index) => (
				<div className={`gallery-photo ${image.className? image.className: '' }`} key={index}>
					<a href={image.url} className="glightbox-gallery" data-gallery="gallery2">
						<img src={image.url} alt={image.alt} className="image" />
					</a>
				</div>
			))}
		</div>
	);
}

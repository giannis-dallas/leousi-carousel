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

	return (
		<div {...useBlockProps.save()} className="photo-gallery">
			{images.map((image, index) => {
				
				// Assign the large width if available
				let imageSrc = image.sizes.large ? image.sizes.large.url : image.url;

				return (
					<div
						className={`gallery-photo ${
							image.className ? image.className : ""
						}`}
						key={index}
					>
						<a
							href={imageSrc}
							className="glightbox-gallery"
							data-gallery="gallery2"
						>
							<img
								src={image.sizes.medium.url}
								alt={image.alt}
								className="image"
								data-custom-class={image.className ? image.className : ""}
							/>
						</a>
					</div>
				);
			})}
		</div>
	);
}

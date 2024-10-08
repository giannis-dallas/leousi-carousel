/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

import { Button, TextControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { images } = attributes;
	console.log(images);

	const removeImage = (index) => {
		const newImages = images.filter((img, i) => i !== index);
		setAttributes({
			images: newImages,
		});
	};

	// Update image class based on user input
	const updateImageClass = (index, newClass) => {
		const updatedImages = [...images];
		updatedImages[index].className = newClass;
		setAttributes({ images: updatedImages });
	};

	return (
		<div {...useBlockProps()}>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={(media) => {
						const oldImages = [...images];

						const updatedImages = media.map((img) => {
							// Find the matching old image by ID
							let targetImage = oldImages.find(
								(oldImg) => oldImg.id === img.id,
							);

							// Safely check for the className in the found image
							const newClassName =
								targetImage && targetImage.className
									? targetImage.className
									: ""; // Default to an empty string if not found

							return {
								...img,
								className: newClassName, // Preserve the old class if it exists
							};
						});

						// Update the attributes with the new list of images
						setAttributes({
							images: updatedImages,
						});
					}}
					allowedTypes={["image"]}
					multiple
					gallery
					addToGallery
					value={images.map((img) => img.id)}
					render={({ open }) => (
						<Button variant="primary" onClick={open}>
							Open Media Library
						</Button>
					)}
				/>
			</MediaUploadCheck>
			<div className="gallery-preview-container">
				<p>
					Please add custom CSS classes to include in the frontend. Available:
					grid-column-2, grid-column-3, grid-row-2, grid-row-3
				</p>
				{images.map((image, index) => (
					<div className="image-preview-container">
						<img className="image-preview" src={image.sizes.medium.url} alt={image.alt} />
						<TextControl
							label={__("CSS Class", "text-domain")}
							value={image.className}
							onChange={(newClass) => updateImageClass(index, newClass)}
							placeholder={__("Enter custom class", "text-domain")}
						/>
						<Button onClick={() => removeImage(index)} isDestructive>
							Remove
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}

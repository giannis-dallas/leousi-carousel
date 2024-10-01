<?php
/**
 * Plugin Name:       Leousi Carousel and Gallery
 * Description:       Two custom blocks for the Leousi.gr website
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.1.0
 * Author:            Giannis Dallas
 * License:           GPL-2.0-or-later
 * Text Domain:       leousi-carousel
 *
 * @package DallasBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function dallas_blocks_leousi_carousel_block_init() {
	register_block_type( __DIR__ . '/build/carousel' );
	register_block_type( __DIR__ . '/build/gallery' );
}
add_action( 'init', 'dallas_blocks_leousi_carousel_block_init' );

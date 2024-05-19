<?php

if ( ! defined( 'ABSPATH' ) ) {
	// Exit if accessed directly.
	exit;
}

if ( ! function_exists( 'qi_addons_for_elementor_promotion_shortcodes_list' ) ) {
	/**
	 * Function that return array of promotion shortcodes
	 *
	 *
	 * @return array
	 */
	function qi_addons_for_elementor_promotion_shortcodes_list() {

		$shortcodes = array(
			'qi_addons_for_elementor_premium_advanced_timeline' => array(
				'base'          => 'advanced-timeline',
				'title'         => esc_html__( 'Advanced Timeline', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Business', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/advanced-timeline/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#advanced_timeline',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-advanced-timeline',
			),
			'qi_addons_for_elementor_premium_advanced_toggle' => array(
				'base'          => 'advanced-toggle',
				'title'         => esc_html__( 'Advanced Toggle', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Business', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/advanced-toggle/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#advanced_toggle',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-advanced-toggle',
			),
			'qi_addons_for_elementor_premium_animated_device_slider' => array(
				'base'          => 'animated-device-slider',
				'title'         => esc_html__( 'Animated Device Slider', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/animated-device-slider/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#animated_device_slider',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-animated-device-slider',
			),
			'qi_addons_for_elementor_premium_author_info'  => array(
				'base'          => 'author-info',
				'title'         => esc_html__( 'Author Info', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Business', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/author-info/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#author_info',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-author-info',
			),
			'qi_addons_for_elementor_premium_blog_list_premium' => array(
				'base'          => 'blog-list-premium',
				'title'         => esc_html__( 'Blog List Premium', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Business', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/blog-list-premium/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#blog_list_premium',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-blog-list-premium',
			),
			'qi_addons_for_elementor_premium_business_reviews_google' => array(
				'base'          => 'business-reviews-google',
				'title'         => esc_html__( 'Business Reviews Google', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'SEO', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/business-reviews-google/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#business_reviews_google',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-business-reviews-google',
			),
			'qi_addons_for_elementor_premium_business_reviews_yelp' => array(
				'base'          => 'business-reviews-yelp',
				'title'         => esc_html__( 'Business Reviews Yelp', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'SEO', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/business-reviews-yelp/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#business_reviews_yelp',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-business-reviews-yelp',
			),
			'qi_addons_for_elementor_premium_circled_slider' => array(
				'base'          => 'circled-slider',
				'title'         => esc_html__( 'Circled Slider', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/circled-slider/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#circled_slider',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-circled-slider',
			),
			'qi_addons_for_elementor_premium_comparative_tables' => array(
				'base'          => 'comparative-tables',
				'title'         => esc_html__( 'Comparative Table', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Business', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/comparative-table/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#comparative_table',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-comparative-tables',
			),
			'qi_addons_for_elementor_premium_content_menu' => array(
				'base'          => 'content-menu',
				'title'         => esc_html__( 'Content Menu', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Showcase', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/content-menu/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#content_menu',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-content-menu',
			),
			'qi_addons_for_elementor_premium_data_table'   => array(
				'base'          => 'data-table',
				'title'         => esc_html__( 'Data Table', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Business', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/data-table/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#data_table',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-data-table',
			),
			'qi_addons_for_elementor_premium_divided_device_slider' => array(
				'base'          => 'divided-device-slider',
				'title'         => esc_html__( 'Divided Device Slider', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/divided-device-slider/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#divided_device_slider',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-divided-device-slider',
			),
			'qi_addons_for_elementor_premium_divided_showcase_carousel' => array(
				'base'          => 'divided-showcase-carousel',
				'title'         => esc_html__( 'Divided Showcase Carousel', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/divided-showcase-carousel/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#divided_showcase_carousel',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-divided-showcase-carousel',
			),
			'qi_addons_for_elementor_premium_divided_slider_diverge' => array(
				'base'          => 'divided-slider-diverge',
				'title'         => esc_html__( 'Divided Slider Diverge', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/divided-slider-diverge/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#divided_slider_diverge',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-divided-slider-diverge',
			),
			'qi_addons_for_elementor_premium_divided_slider_reveal' => array(
				'base'          => 'divided-slider-reveal',
				'title'         => esc_html__( 'Divided Slider Reveal', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/divided-slider-reveal/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#divided_slider_reveal',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-divided-slider-reveal',
			),
			'qi_addons_for_elementor_premium_fixed_project_slider' => array(
				'base'          => 'fixed-project-slider',
				'title'         => esc_html__( 'Fixed Project Slider', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/fixed-project-slider/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#fixed_project_slider',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-fixed-project-slider',
			),
			'qi_addons_for_elementor_premium_flip_box'     => array(
				'base'          => 'flip-box',
				'title'         => esc_html__( 'Flip Box', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/flip-box/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#flip_box',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-flip-box',
			),
			'qi_addons_for_elementor_premium_floating_item_showcase' => array(
				'base'          => 'floating-item-showcase',
				'title'         => esc_html__( 'Floating Item Showcase', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/floating-item-showcase/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#floating_item_showcase',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-floating-item-showcase',
			),
			'qi_addons_for_elementor_premium_google_map'   => array(
				'base'          => 'google-map',
				'title'         => esc_html__( 'Google Map', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Business', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/google-map/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#google_map',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-google-map',
			),
			'qi_addons_for_elementor_premium_horizontal_double_row_project_showcase' => array(
				'base'          => 'horizontal-double-row-project-showcase',
				'title'         => esc_html__( 'Horizontal Double Row Projects', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/horizontal-double-row-projects/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#horizontal_double_row_project_showcase',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-horizontal-double-row-project-showcase',
			),
			'qi_addons_for_elementor_premium_hover_aware_slider' => array(
				'base'          => 'hover-aware-slider',
				'title'         => esc_html__( 'Hover-aware Slider', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/hover-aware-slider/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#hover_aware_slider',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-hover-aware-slider',
			),
			'qi_addons_for_elementor_premium_icon_progress_bar' => array(
				'base'          => 'icon-progress-bar',
				'title'         => esc_html__( 'Icon Progress Bar', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Infographics', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/icon-progress-bar/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#icon_progress_bar',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-icon-progress-bar',
			),
			'qi_addons_for_elementor_premium_image_hotspots' => array(
				'base'          => 'image-hotspots',
				'title'         => esc_html__( 'Image Hotspots', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Showcase', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/image-hotspots/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#image_hotspots',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-image-hotspots',
			),
			'qi_addons_for_elementor_premium_image_marquee' => array(
				'base'          => 'image-marquee',
				'title'         => esc_html__( 'Image Marquee', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Showcase', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/image-marquee/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#image_marquee',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-image-marquee',
			),
			'qi_addons_for_elementor_premium_interactive_info_images' => array(
				'base'          => 'interactive-info-images',
				'title'         => esc_html__( 'Interactive Info Images', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Showcase', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/interactive-info-images/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#interactive_info_images',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-interactive-info-images',
			),
			'qi_addons_for_elementor_premium_interactive_project_carousel' => array(
				'base'          => 'interactive-project-carousel',
				'title'         => esc_html__( 'Interactive Project Carousel', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/interactive-project-carousel/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#interactive_project_carousel',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-interactive-project-carousel',
			),
			'qi_addons_for_elementor_premium_intro_glitch_effect' => array(
				'base'          => 'intro-glitch-effect',
				'title'         => esc_html__( 'Intro Glitch Effect', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/intro-glitch-effect/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#intro_glitch_effect',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-intro-glitch-effect',
			),
			'qi_addons_for_elementor_premium_intro_write_out_floating_images' => array(
				'base'          => 'intro-write-out-floating-images',
				'title'         => esc_html__( 'Intro Scrolling Images', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/intro-scrolling-images/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#intro_scrolling_images',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-intro-write-out-floating-images',
			),
			'qi_addons_for_elementor_premium_intro_swipe_images' => array(
				'base'          => 'intro-swipe-images',
				'title'         => esc_html__( 'Intro Swipe Images', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/intro-swipe-images/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#intro_swipe_images',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-intro-swipe-images',
			),
			'qi_addons_for_elementor_premium_mailchimp_form' => array(
				'base'          => 'mailchimp-form',
				'title'         => esc_html__( 'MailChimp Form', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Form Style', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/mailchimp-form/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#mailchimp_form',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-mailchimp-form',
			),
			'qi_addons_for_elementor_premium_news_ticker'  => array(
				'base'          => 'news-ticker',
				'title'         => esc_html__( 'News Ticker', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/news-ticker/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#news-ticker',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-news-ticker',
			),
			'qi_addons_for_elementor_premium_numbered_slider' => array(
				'base'          => 'numbered-slider',
				'title'         => esc_html__( 'Numbered Slider', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/numbered-slider/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#numbered_slider',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-numbered-slider',
			),
			'qi_addons_for_elementor_premium_order_tracking_form' => array(
				'base'          => 'order-tracking-form',
				'title'         => esc_html__( 'Order Tracking Form', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'WooCommerce', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/order-tracking-form/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#order_tracking_form',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-order-tracking-form',
			),
			'qi_addons_for_elementor_premium_premium_button' => array(
				'base'          => 'premium-button',
				'title'         => esc_html__( 'Premium Button', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Typography', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/premium-button/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#premium_button',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-premium-button',
			),
			'qi_addons_for_elementor_premium_pricing_slider' => array(
				'base'          => 'pricing-slider',
				'title'         => esc_html__( 'Pricing Slider', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Business', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/pricing-slider/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#pricing_slider',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-pricing-slider',
			),
			'qi_addons_for_elementor_premium_product_comparison' => array(
				'base'          => 'product-comparison',
				'title'         => esc_html__( 'Product Comparison', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'WooCommerce', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/product-comparison/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#product_comparison',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-product-comparison',
			),
			'qi_addons_for_elementor_premium_rating'       => array(
				'base'          => 'rating',
				'title'         => esc_html__( 'Rating', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Business', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/rating/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#rating',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-rating',
			),
			'qi_addons_for_elementor_premium_rotating_image_tiles' => array(
				'base'          => 'rating',
				'title'         => esc_html__( 'Rotating Image Tiles', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Showcase', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/rotating-image-tiles/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#rotating_image_tiles',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-rotating-image-tiles',
			),
			'qi_addons_for_elementor_premium_social_links' => array(
				'base'          => 'social-links',
				'title'         => esc_html__( 'Social Links', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'SEO', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/social-links/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#social_links',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-social-links',
			),
			'qi_addons_for_elementor_premium_social_share_buttons' => array(
				'base'          => 'social-share-buttons',
				'title'         => esc_html__( 'Social Share Buttons', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'SEO', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/social-share-buttons/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#social_share_buttons',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-social-share-buttons',
			),
			'qi_addons_for_elementor_premium_stacked_item_scroll' => array(
				'base'          => 'stacked-item-scroll',
				'title'         => esc_html__( 'Stacked Item Scroll', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/stacked-item-scroll/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#stacked_item_scroll',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-stacked-item-scroll',
			),
			'qi_addons_for_elementor_premium_text_gradient' => array(
				'base'          => 'text-gradient',
				'title'         => esc_html__( 'Text Gradient', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Typography', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/text-gradient/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#text_gradient',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-text-gradient',
			),
			'qi_addons_for_elementor_premium_textual_projects_showcase' => array(
				'base'          => 'textual-projects-showcase',
				'title'         => esc_html__( 'Textual Project Showcase', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/textual-project-showcase/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#textual_project_showcase',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-textual-projects-showcase',
			),
			'qi_addons_for_elementor_premium_typeforms_form' => array(
				'base'          => 'typeforms-form',
				'title'         => esc_html__( 'Typeforms Form', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Form Style', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/typeforms-form/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#typeforms_form',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-typeforms-form',
			),
			'qi_addons_for_elementor_premium_vertical_circled_slider' => array(
				'base'          => 'vertical-circled-slider',
				'title'         => esc_html__( 'Vertical Circled Slider', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/vertical-circled-slider/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#vertical_circled_slider',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-vertical-circled-slider',
			),
			'qi_addons_for_elementor_premium_vertical_project_reel' => array(
				'base'          => 'vertical-project-reel',
				'title'         => esc_html__( 'Vertical Project Reel', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Creative', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/vertical-project-reel/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#vertical_project_reel',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-vertical-project-reel',
			),
			'qi_addons_for_elementor_premium_vertical_timeline' => array(
				'base'          => 'vertical-timeline',
				'title'         => esc_html__( 'Vertical Timeline', 'qi-addons-for-elementor' ),
				'subcategory'   => esc_html__( 'Showcase', 'qi-addons-for-elementor' ),
				'demo'          => 'https://qodeinteractive.com/qi-addons-for-elementor/vertical-timeline/',
				'documentation' => 'https://qodeinteractive.com/qi-addons-for-elementor/documentation/#vertical_timeline',
				'premium'       => true,
				'active'        => false,
				'icon'          => 'qodef-custom-elementor-icon qi-addons-for-elementor-premium-vertical-timeline',
			),
		);

		$shortcodes = apply_filters( 'qi_addons_for_elementor_filter_promotion_shortcodes_list', $shortcodes );

		return $shortcodes;
	}
}
if ( ! function_exists( 'qi_addons_for_elementor_promotion_shortcodes_inline_style' ) ) {
	/**
	 * Function that return array of promotion shortcodes
	 *
	 *
	 * @return string
	 */
	function qi_addons_for_elementor_promotion_shortcodes_inline_style( $style ) {
		$shortcodes = qi_addons_for_elementor_promotion_shortcodes_list();

		if ( ! empty( $shortcodes ) && is_array( $shortcodes ) ) {
			foreach ( $shortcodes as $key => $shortcode ) {

				$icon_path = QI_ADDONS_FOR_ELEMENTOR_ADMIN_URL_PATH . '/inc/shortcodes/promotion-shortcodes/assets/img/' . strtolower( str_replace( ' ', '-', $shortcode['title'] ) ) . '.png';

				$style .= '.qodef-custom-elementor-icon.' . str_replace( '_', '-', $key ) . '{
						background-image: url("' . $icon_path . '") !important;
					}';
			}
		}

		return $style;
	}

	add_filter( 'qi_addons_for_elementor_filter_framework_add_elementor_inline_style', 'qi_addons_for_elementor_promotion_shortcodes_inline_style' );
}

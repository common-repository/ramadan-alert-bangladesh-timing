<?php
/*
Plugin Name: Ramadan Alert Bangladesh Timing
Plugin URI: http://wp-adm.in/plugins/launching-1st-wp-plugin-from-wp-adm-in-ramazan-timings/
Description: Shows a Calendar of Iftar and sehri Timing on Sidebar of your blog/site. At current it supports 'DHAKA', 'SYLHET', 'CHITTAGONG', 'RAJSHAHI', 'NILFAMARI', 'MOULOVI-BAZAR', 'DINAJPUR', 'CHAA-DANGA' timing. More districts are coming soon.
Version: 1.0.22.8.10
Author: Arif Nezami
Author URI: http://nezami.in
*/

add_action("plugins_loaded", "rt_widget_an_create");

function rt_widget_an_create() {
	$options = array('classname' => 'rt_widget_an', 'description' => "Show Ramazan Sehri and Iftar Timings according to Bangladesh City timing." );
	wp_register_sidebar_widget('rt_widget_an', 'Ramazan Timing', 'rt_widget_an_init', $options);
}

function rt_widget_an_init($args) {
	extract($args);
	echo $before_widget;
	echo $before_title.'Ramazan Timings'.$after_title;
	rt_widget_an_show();
	echo $after_widget;
}

function arifnezami_method() {
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'http://code.jquery.com/jquery-latest.min.js');
	wp_enqueue_script('jquery');
	wp_register_script('timings', '/wp-content/plugins/ramadan-alert-bangladesh-timing/functions.js');
	wp_enqueue_script('timings');
}    
 
add_action('init', 'arifnezami_method');

function rt_widget_an_show() {
	echo '<div id="timings"></div>';
}
?>
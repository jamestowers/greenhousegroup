<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // Google Chrome Frame for IE ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="Copyright" content="Copyright &copy; <?php bloginfo('name'); ?> <?php echo date('Y'); ?>. All Rights Reserved.">

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="350">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scallable=no, minimal-ui"/>

		<!-- APPLE TAGS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!-- STANDARD META TAGS -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="favicon.png">

		<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet">


		<title><?php wp_title(''); ?></title>

		
		<?php wp_head(); ?>

	</head>

	<body <?php body_class('loading');?> >

    <div id="nav-overlay"></div>
    <nav role="navigation" id="nav-header" class="flex flex-center">
      <?php dropshop_nav_header(); ?>
    </nav>

		<div id="wrapper" class="group">

			<a href="#" id="menu-toggle" class="no-ajaxy"><span></span></a>

			<div id="content" class="group">
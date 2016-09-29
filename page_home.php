<?php /* Template Name: Homepage */
 get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        
        <?php dropshop_hero_image();?>

        <div class="hero-overlay fullscreen flex flex-center flex-column">
            <div class="inner flex flex-center flex-column">
                <div class="bubble"><?php get_template_part( 'partials/images', 'bubble' );?></div>
                <h3 class="logo">Green House Group</h3>
                <h1 class="hero-text text-center">Social media and Content creation and delivery</h1>
            </div>
        </div>

        <section>

            <div class="inner pad group" data-animate="true">

        		<?php the_content(); ?>

            </div> <!-- close inner -->

        </section>

        <section class="pad">
            
            <h1 class="page-title">Who we work with</h1>

            <?php echo do_shortcode('[ghg_clients]');?>
        </section>

	<?php endwhile; ?>

  <?php else :
    
    // If no content, include the "No posts found" template: content-none.php
    get_template_part( 'content', 'none' );

    endif; ?>

    
        <?php /*$args = array(
            'post_type' => 'post'
            );

        $news_posts = new WP_Query($args);

        if ( $news_posts->have_posts() ) { ?>
            
            <h1 class="page-title">News</h1>

            <section id="news" class="dark">

                <?php while ( $news_posts->have_posts() ) {
                $news_posts->the_post();

                $odd = true;
                get_template_part('partials/news', 'post');
                $odd = $odd ? false : true;

            }?>

            </section>
        <?php } */?>


<?php get_footer(); ?>

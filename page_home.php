<?php /* Template Name: Homepage */
 get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        
        <?php dropshop_hero_image();?>

        <div class="hero-overlay fullscreen flex flex-center flex-column">
            <div class="inner flex flex-center flex-column">
                <div class="bubble"><?php get_template_part( 'partials/images', 'bubble' );?></div>
                <h3 class="logo"><?php echo get_option('blogname');?></h3>
                <h1 class="hero-text text-center"><?php echo get_option('blogdescription');?></h1>
                <div class="scroll-indicator flex-center">
                    <svg width="90px" height="90px" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-676.000000, -785.000000)" stroke="#FFFFFF"><g transform="translate(29.000000, 27.000000)"><circle id="Oval" cx="692" cy="803" r="44"></circle></g></g></svg>
                    <h3>scroll</h3>
                </div>
            </div>
        </div>

        <div class="line" data-animate="line"></div>

        <section>

            <div class="inner pad group" data-animate="moveup">

        		<?php the_content(); ?>

            </div> <!-- close inner -->

        </section>

        <div class="line" data-animate="line"></div>

        <section class="pad">
            
            <h1 class="page-title">Who we work with</h1>

            <?php echo do_shortcode('[ghg_clients]');?>
        </section>


	<?php endwhile; ?>

  <?php else :
    
    // If no content, include the "No posts found" template: content-none.php
    get_template_part( 'content', 'none' );

    endif; ?>

    
        <?php $args = array(
            'post_type' => 'post',
            'orderby' => 'date',
            'order'   => 'DESC',
            );

        $news_posts = new WP_Query($args);

        if ( $news_posts->have_posts() ) { ?>

            <div class="line" data-animate="line"></div>
            
            <h1 class="page-title">News</h1>

            <section id="news" class="text-center">

                <?php while ( $news_posts->have_posts() ) {
                $news_posts->the_post();?>

                <div class="news-post group">
                    <h3 class="date small"><?php the_date();?></h3>
                    <h2><?php the_title();?></h2>
                </div>

            <?php }?>

            </section>
        <?php } ?>


<?php get_footer(); ?>

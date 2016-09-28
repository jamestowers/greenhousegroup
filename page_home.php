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

        <section <?php post_class( ); ?> >

            <div class="inner pad group">

        		<div class="entry-content group">
        			<?php the_content(); ?>
        		</div>

            </div> <!-- close inner -->

        </section>

        <section class="pad">
            <?php echo do_shortcode('[ghg_clients]');?>
        </section>

	<?php endwhile; ?>

  <?php else :
    
    // If no content, include the "No posts found" template: content-none.php
    get_template_part( 'content', 'none' );

    endif; ?>


<?php get_footer(); ?>

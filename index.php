<?php get_header(); ?>
	
	<?php dropshop_hero_image( get_the_title(), get_option('page_for_posts') );?>

	<div class="inner pad">

		<?php if (have_posts()) : while (have_posts()) : the_post(); 

			get_template_part('partials/news', 'post');

		endwhile; ?>

				<?php if ( function_exists( 'dropshop_page_navi' ) ) { ?>

						<?php dropshop_page_navi(); ?>

				<?php } else { ?>

						<nav class="wp-prev-next">
								<ul class="group">
									<li class="prev-link"><?php next_posts_link( __( '&laquo; Older Entries', 'dropshoptheme' )) ?></li>
									<li class="next-link"><?php previous_posts_link( __( 'Newer Entries &raquo;', 'dropshoptheme' )) ?></li>
								</ul>
						</nav>

				<?php } ?>

		<?php else :

				// If no content, include the "No posts found" template: content-none.php
        get_template_part( 'content', 'none' );

		endif; ?>

	<?php //get_sidebar();?>

	</div> <!-- close inner -->

<?php get_footer(); ?>

<?php get_header(); ?>

	<?php dropshop_hero_image( get_the_title() );?>
	
	<div class="inner">

		<div id="main" class="col8 group pad" role="main">

			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class('group'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

					<h3 class="small"><?php
						printf( __( 'Posted <time class="updated" datetime="%1$s" pubdate>%2$s</time>', 'dropshoptheme' ), get_the_time( 'Y-m-j' ), get_the_time( get_option('date_format')));
					?></h3>


					<section class="entry-content group" itemprop="articleBody">
						<?php the_content(); ?>
					</section>

					<footer class="article-footer small">
						<?php the_tags( '<p class="tags pull-right"><span class="tags-title">' . __( 'Tags:', 'dropshoptheme' ) . '</span> ', ', ', '</p>' ); ?>
					</footer>

					<?php //comments_template(); ?>
				</article>

			<?php endwhile; ?>

			<?php else :

					// If no content, include the "No posts found" template: content-none.php
	        get_template_part( 'content', 'none' );

			endif; ?>

		</div>

		<?php get_sidebar(); ?>

	</div> <!-- close inner -->

<?php get_footer(); ?>

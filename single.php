<?php get_header(); ?>

	<?php dropshop_hero_image();?>
	
	<div class="inner">

		<div id="main" class="col8 group pad" role="main">

			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class('group'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

					<h1 class="entry-title single-title" itemprop="headline"><?php the_title(); ?></h1>
					<p class="small"><?php
						printf( __( 'Posted <time class="updated" datetime="%1$s" pubdate>%2$s</time> <span class="amp">&amp;</span> filed under %3$s.', 'dropshoptheme' ), get_the_time( 'Y-m-j' ), get_the_time( get_option('date_format')), get_the_category_list(', ') );
					?></p>


					<section class="entry-content group" itemprop="articleBody">
						<?php the_content(); ?>
					</section>

					<footer class="article-footer small">
						<?php if ( function_exists('dropshop_share_buttons')) { 
							dropshop_share_buttons(get_the_permalink()); 
						}?>
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

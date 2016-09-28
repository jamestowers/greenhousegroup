<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>" class="tile col6 group  <?php echo $odd ? '' : 'last' ;?>" role="article">

  <figure style="background-image: url('<?php echo get_the_post_thumbnail_url( $post->ID, 'hero-image-desktop' ); ?>');"></figure>

  <div class="copy">
    <h2 class=""><?php echo get_the_title($post->ID);?></h2>
  </div>

</a>
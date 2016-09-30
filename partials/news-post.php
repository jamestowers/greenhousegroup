<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>" class="tile news-post" role="article">

  <figure>
    <?php
    $attachment_id = get_post_thumbnail_id( $post->ID );
    $img_src = wp_get_attachment_image_url( $attachment_id, 'medium' );
    $img_srcset = wp_get_attachment_image_srcset( $attachment_id, 'medium' );
    ?>
    <img src="<?php echo esc_url( $img_src ); ?>"
         srcset="<?php echo esc_attr( $img_srcset ); ?>"
         sizes="(max-width: 768px) 100vw, 50vw" alt="<?php echo get_the_title($client->ID);?>">
  </figure>

  <div class="copy">
    <h2 class="tile-title"><?php echo get_the_title($post->ID);?></h2>
  </div>

</a>
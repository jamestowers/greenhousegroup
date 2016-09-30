					
					<div class="line" data-animate="line"></div>
					
					<div class="pad">
					<a name="contact"></a>
					<section class="pad dark"  data-animate="width">
					    <div class="inner">
					        <h2>Contact</h2>
					        <p><h3>Email: <a href="mailto:<?php echo get_option('admin_email');?>"><?php echo get_option('admin_email');?></a></h3></p>
					    </div>
					</section>
					</div>

					<div class="line" data-animate="line"></div>

				</div> <!-- close wrapper -->

			<footer class="footer group">
					
				<div id="footer-asides" class="group">

				  <?php dynamic_sidebar( 'footer-sidebar' ); ?>

				</div>

				<p class="small source-org text-center">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>.</p>

			</footer>

		</div> <!-- close wrapper -->

		<?php wp_footer(); ?>

	</body>

</html>

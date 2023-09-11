import React from 'react';
import './Resources/assets/css/main.css';
import './Resources/assets/css/fontawesome-all.min.css';
import './Resources/assets/css/noscript.css';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../bootstrap.css';

export default function Main() {
  return (
    <div>
      <Container>
      <body class="is-preload">

			<div id="wrapper">

					<div id="main">
						<article class="thumb">
							<span href="images/fulls/01.jpg" class="image"><img src="images/thumbs/01.jpg" alt="" /></span>
							<h2>Magna feugiat lorem</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/02.jpg" class="image"><img src="images/thumbs/02.jpg" alt="" /></span>
							<h2>Nisl adipiscing</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/03.jpg" class="image"><img src="images/thumbs/03.jpg" alt="" /></span>
							<h2>Tempus aliquam veroeros</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/04.jpg" class="image"><img src="images/thumbs/04.jpg" alt="" /></span>
							<h2>Aliquam ipsum sed dolore</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/05.jpg" class="image"><img src="images/thumbs/05.jpg" alt="" /></span>
							<h2>Cursis aliquam nisl</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/06.jpg" class="image"><img src="images/thumbs/06.jpg" alt="" /></span>
							<h2>Sed consequat phasellus</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/07.jpg" class="image"><img src="images/thumbs/07.jpg" alt="" /></span>
							<h2>Mauris id tellus arcu</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/08.jpg" class="image"><img src="images/thumbs/08.jpg" alt="" /></span>
							<h2>Nunc vehicula id nulla</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/09.jpg" class="image"><img src="images/thumbs/09.jpg" alt="" /></span>
							<h2>Neque et faucibus viverra</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/10.jpg" class="image"><img src="images/thumbs/10.jpg" alt="" /></span>
							<h2>Mattis ante fermentum</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/11.jpg" class="image"><img src="images/thumbs/11.jpg" alt="" /></span>
							<h2>Sed ac elementum arcu</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<span href="images/fulls/12.jpg" class="image"><img src="images/thumbs/12.jpg" alt="" /></span>
							<h2>Vehicula id nulla dignissim</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
					</div>

					<footer id="footer" class="panel">
						<div class="inner split">
							<div>
								<section>
									<h2>Magna feugiat sed adipiscing</h2>
									<p>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum.</p>
								</section>
								<section>
									<h2>Follow me on ...</h2>
									<ul class="icons">
										<li><span href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></span></li>
										<li><span href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></span></li>
										<li><span href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></span></li>
										<li><span href="#" class="icon brands fa-github"><span class="label">GitHub</span></span></li>
										<li><span href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></span></li>
										<li><span href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></span></li>
									</ul>
								</section>
								<p class="copyright">
									&copy; Unttled. Design: <span href="http://html5up.net">HTML5 UP</span>.
								</p>
							</div>
							<div>
								<section>
									<h2>Get in touch</h2>
									<form method="post" action="#">
										<div class="fields">
											<div class="field half">
												<input type="text" name="name" id="name" placeholder="Name" />
											</div>
											<div class="field half">
												<input type="text" name="email" id="email" placeholder="Email" />
											</div>
											<div class="field">
												<textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
											</div>
										</div>
										<ul class="actions">
											<li><input type="submit" value="Send" class="primary" /></li>
											<li><input type="reset" value="Reset" /></li>
										</ul>
									</form>
								</section>
							</div>
						</div>
					</footer>
			</div>
	</body>
      </Container>
    </div>
  )
}

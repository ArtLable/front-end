import React from 'react';
import './Resources/assets/css/main.css';
import './Resources/assets/css/fontawesome-all.min.css';
import './Resources/assets/css/noscript.css';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../bootstrap.css';

export default function Main() {

	const imageUrls =[ 
	"https://r1.community.samsung.com/t5/image/serverpage/image-id/1230422i353491C53F342C13/image-dimensions/2500?v=v2&px=-1","https://bowell.co.kr/web/product/extra/big/202304/41b83971bdaf6beebdc454f946a4befd.jpg", "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/843/fc08ac9f5affd406958c96eb9f39b66b_res.jpeg","https://dalkompet.com/wp-content/uploads/2020/04/%EA%B0%95%EC%95%84%EC%A7%80-%EC%82%AC%ED%9A%8C%ED%99%94-%EC%8B%9C%EA%B8%B0.jpg","https://newsimg.hankookilbo.com/cms/articlerelease/2020/09/13/c22a51dd-d1f8-48d2-82ad-f18a671078be.jpg","https://www.pet-news.or.kr/news/photo/202303/2834_4316_1516.jpg","https://blog.kakaocdn.net/dn/B8dlz/btrLD08ZqcZ/5ZEViirRcO8SVsuz2kNHfK/img.jpg","https://cdn.imweb.me/thumbnail/20200616/7c94da574fa47.png","https://www.kbinsure.co.kr/images/ins_prdt/dog_ins/prdt_inform_visual.jpg","https://img.animalplanet.co.kr/news/2020/07/15/700/e05t9x1o0e3trklpwrr3.jpg","https://modo-phinf.pstatic.net/20201117_169/1605592625340crdFV_JPEG/mosaFmjKWc.jpeg?type=w720","https://pbs.twimg.com/media/Eyr69V_UcAQcv_v.jpg","https://mblogthumb-phinf.pstatic.net/MjAxNzExMDZfMjQx/MDAxNTA5OTQyNTM0NTQ3.LqsKFuUrwBbNZlNtSfmqG7T9bevPZvA_tPUODeqHiQIg.qat-OVwY8jRgX-oeN7B_jitX-dFmWFbS0SNThkI1N_Qg.JPEG.heeyoung9302/Golden-Retriever-puppy-cute-paws-2560x1600.jpg?type=w800","https://a-static.besthdwallpaper.com/golden-puppy-wearing-a-blue-and-white-scarf-wallpaper-720x1280-90276_184.jpg","https://mblogthumb-phinf.pstatic.net/MjAxNzExMDZfMTkx/MDAxNTA5OTQyNTM1MjI0.nUFfCfV06kiiN_EnhnhrUs7G9NQwT3R0L7FSGcgXgOUg.jh5fQwEy68sBGjTsBYpwfC0NbRjFSk2Ag9eaw31o4ksg.JPEG.heeyoung9302/Yorkshire-Terrier-glasses-fluffy-wind-5120x3414.jpg?type=w800","https://s1.best-wallpaper.net/wallpaper/m/1807/Five-husky-puppies-blue-eyes-dog_m.jpg","https://downloadwap.com/thumbs2/wallpapers/p2ls/new/37/MUDmvWPFt9.jpg"]

  return (
    <div>
      <Container>
      <body className="is-preload">

			<div id="wrapper">

					<div id="columns">
						{imageUrls.map((imageUrl, index)=> (
							<figure className="thumb" key={index}>
								<a href={imageUrl} className="image">
									<img src={imageUrl} alt="" />
								</a>
								<figcaption>#귀여운 #멍뭉이 #사진</figcaption>
							</figure>
						))}
					</div>

					{/* <footer id="footer" className="panel">
						<div className="inner split">
							<div>
								<section>
									<h2>Magna feugiat sed adipiscing</h2>
									<figcaption>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum.</figcaption>
								</section>
								<section>
									<h2>Follow me on ...</h2>
									<ul className="icons">
										<li><a href="#" className="icon brands fa-twitter"><a className="label">Twitter</a></a></li>
										<li><a href="#" className="icon brands fa-facebook-f"><a className="label">Facebook</a></a></li>
										<li><a href="#" className="icon brands fa-instagram"><a className="label">Instagram</a></a></li>
										<li><a href="#" className="icon brands fa-github"><a className="label">GitHub</a></a></li>
										<li><a href="#" className="icon brands fa-dribbble"><a className="label">Dribbble</a></a></li>
										<li><a href="#" className="icon brands fa-linkedin-in"><a className="label">LinkedIn</a></a></li>
									</ul>
								</section>
								<figcaption className="copyright">
									&copy; Unttled. Design: <a href="http://html5up.net">HTML5 UP</a>.
								</figcaption>
							</div>
							<div>
								<section>
									<h2>Get in touch</h2>
									<form method="post" action="#">
										<div className="fields">
											<div className="field half">
												<input type="text" name="name" id="name" placeholder="Name" />
											</div>
											<div className="field half">
												<input type="text" name="email" id="email" placeholder="Email" />
											</div>
											<div className="field">
												<textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
											</div>
										</div>
										<ul className="actions">
											<li><input type="submit" value="Send" className="primary" /></li>
											<li><input type="reset" value="Reset" /></li>
										</ul>
									</form>
								</section>
							</div>
						</div>
					</footer> */}
			</div>
	</body>
      </Container>
    </div>
  )
}

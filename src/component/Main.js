// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../layout/Resources/assets/css/fontawesome-all.min.css';
// import '../layout/Resources/assets/css/main.css';
// import '../layout/Resources/assets/css/noscript.css';
// import { Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../bootstrap.css';
import Example from '../pages/Example';

// export default function Main() {
  // const [uploadedFiles, setUploadedFiles] = useState([]);
  // const [selectedImage, setSelectedImage] = useState(null);

  // const fetchUploadedFiles = async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:8080/api/v1/feeds');
  //     const feeds = response.data.results.feeds;

  //     const files = feeds.map((feed) => (
	// 	{
  //       imageUrl: `/upload/${feed.files[0].fileName}`,
  //       alt: feed.files[0].originFileName
	// 	}
  //     ));
  //     setUploadedFiles(files);
	//   console.log(files);
  //   } catch (error) {
  //     console.error('Error fetching uploaded files:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUploadedFiles();
  // }, []);

  // const openCardModal = (imageUrl) => {
  //   setSelectedImage(imageUrl);
  // };

  // const closeCardModal = () => {
  //   setSelectedImage(null);
  // };

//   return (
	
//     <div>
//       <Container>
//         <body className="is-preload">
//           <div className="createButton"></div>
//           <div id="wrapper">
//             <div id="columns">
//               {uploadedFiles.map((file, index) => {
// 				return(
// 					<figure className="thumb" key={index}>
// 					<a href="#" className="image" onClick={(e) => { e.preventDefault(); openCardModal(file.imageUrl); }}>
// 						<img src={file.imageUrl} alt={file.alt} />
// 					</a>
// 					</figure>
// 					)
//               })}
//             </div>
//             {selectedImage && (
//               <Example isOpen={true} closeModal={closeCardModal} card={selectedImage} />
//             )}
//           </div>
//         </body>
//       </Container>
//     </div>
//   );
// }


import React, {useState} from 'react';
import '../layout/Resources/assets/css/fontawesome-all.min.css';
import '../layout/Resources/assets/css/main.css';
import '../layout/Resources/assets/css/noscript.css';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../bootstrap.css';
import Login from '../pages/Login';
export default function Main() {

	const [isCardOpen, setIsCardOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openCardModal = (imageUrl) => {
		setSelectedImage(imageUrl);
		setIsCardOpen(true);
	}	

  	const closeCardModal = () => {
		setSelectedImage(null);
		setIsCardOpen(false);
	}	

	const imageUrls = [ 
    "img/1.png",
"img/2.png",
"img/3.png",
"img/4.png",
"img/5.png",
"img/6.png",
"img/7.png",
"img/8.png",
"img/9.png",
"img/11.png",
"img/12.png",
"img/13.png",
"img/14.png",
"img/15.png",
"img/16.png",
"img/17.png",
"img/18.png",
"img/19.png",
"img/20.png",
"img/21.png",
"img/22.png",
"img/23.png",
"img/24.png",
"img/25.png",
"img/26.png",
"img/27.png",
"img/28.png",
"img/29.png",
"img/30.png",
"img/31.png",
"img/32.png",
"img/33.png",
"img/34.png",
"img/35.png",
"img/37.png",
"img/38.png",
"img/39.png",
"img/41.png",
"img/42.png",
"img/43.png",
"img/45.png",
"img/46.png",
"img/47.png",
"img/48.png",
"img/49.png",
"img/50.png",
"img/51.png",
"img/52.png",
"img/53.png",
"img/54.png",
"img/55.png",
"img/56.png",
"img/57.png",
"img/58.png",
"img/59.png",
"img/60.png",
"img/61.png",
"img/62.png",
"img/63.png",
"img/64.png",
"img/65.png",
"img/66.png",
"img/67.png",
"img/68.png",
"img/69.png",
"img/70.png",
"img/71.png",
"img/72.png",
"img/73.png",
"img/74.png",
"img/75.png",
"img/76.png",
"img/77.png",
"img/78.png",
"img/79.png",
"img/80.png",
"img/81.png",
"img/82.png",
"img/83.png",
"img/84.png",
"img/85.png",
"img/86.png",
"img/87.png",
"img/88.png",
"img/89.png",

]

  return (
    <div>
      <Container>
      <body className="is-preload">

			<div id="wrapper">

					<div id="columns">
						{imageUrls.map((imageUrl, index)=> (
							<figure className="thumb" key={index}>
                <a href="#" className="image" onClick={(e) => { e.preventDefault(); openCardModal(imageUrl); }}>
									<img src={imageUrl} alt={`Image ${index + 1}`} onClick={() => openCardModal(imageUrl)} />
								</a>
								<figcaption>#귀여운 #멍뭉이 #사진</figcaption>
							</figure>
						))}
					</div>
          {selectedImage && (
              <Example isOpen={true} closeModal={closeCardModal} card={selectedImage} />
            )}
			</div>
	</body>
      </Container>
    </div>
  )
}
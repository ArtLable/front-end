import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../layout/Resources/assets/css/fontawesome-all.min.css';
import '../layout/Resources/assets/css/main.css';
import '../layout/Resources/assets/css/noscript.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../bootstrap.css';
import Example from '../pages/Example';

export default function Main() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchUploadedFiles = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/api/v1/feeds');
      const feeds = response.data.results.feeds;

      const files = feeds.map((feed) => (
		{
        imageUrl: `/upload/${feed.files[0].fileName}`,
        alt: feed.files[0].originFileName
		}
      ));
      setUploadedFiles(files);
	  console.log(files);
    } catch (error) {
      console.error('Error fetching uploaded files:', error);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  const openCardModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeCardModal = () => {
    setSelectedImage(null);
  };

  return (
	
    <div>
      <Container>
        <body className="is-preload">
          <div className="createButton"></div>
          <div id="wrapper">
            <div id="columns">
              {uploadedFiles.map((file, index) => {
				return(
					<figure className="thumb" key={index}>
					<a href="#" className="image" onClick={(e) => { e.preventDefault(); openCardModal(file.imageUrl); }}>
						<img src={file.imageUrl} alt={file.alt} />
					</a>
					</figure>
					)
              })}
            </div>
            {selectedImage && (
              <Example isOpen={true} closeModal={closeCardModal} card={selectedImage} />
            )}
          </div>
        </body>
      </Container>
    </div>
  );
}

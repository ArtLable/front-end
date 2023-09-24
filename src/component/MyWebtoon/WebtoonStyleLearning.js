import React, { useState } from 'react';
import axios from 'axios';

function WebtoonStyleLearning() {
  const [file, setFile] = useState(null);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [image, setImage] = useState('');
  const [text3, setText3] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleGenerateImage = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('text1', text1);
    formData.append('text2', text2);

    try {
      // AI 서버에 POST 요청을 보내 이미지 생성을 요청합니다.
      const response = await axios.post('AI_SERVER_URL', formData);
      const generatedImage = response.data.image; // 이미지 URL 또는 데이터
      setImage(generatedImage);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const handleText3Change = (e) => {
    setText3(e.target.value);
  };

  const handleGenerateMoreImages = async () => {
    try {
      // AI 서버에 추가 텍스트를 포함한 POST 요청을 보내 이미지 생성을 요청
      const response = await axios.post('AI_SERVER_URL', { text: text3 });
      const generatedImages = response.data.images; // 이미지 배열 또는 데이터

    } catch (error) {
      console.error('Error generating images:', error);
    }
  };

  return (
    <div>
      <h1>웹툰 그림체 학습</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <input type="text" placeholder="텍스트 입력 1" value={text1} onChange={(e) => setText1(e.target.value)} />
      <input type="text" placeholder="텍스트 입력 2" value={text2} onChange={(e) => setText2(e.target.value)} />
      <button onClick={handleGenerateImage}>이미지 학습</button>

      {image && <img src={image} alt="그림체 학습" />}

      <input type="text" placeholder="텍스트 입력 3" value={text3} onChange={handleText3Change} />
      <button onClick={handleGenerateMoreImages}>이미지 생성</button>
    </div>
  );
}

export default WebtoonStyleLearning;

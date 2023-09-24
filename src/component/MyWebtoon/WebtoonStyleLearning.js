import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import './WebtoonStyleLearning.css';

function WebtoonStyleLearning() {
  const [file, setFile] = useState(null);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [images, setImages] = useState([]);
  const [text3, setText3] = useState('');
  const [generatedImages, setGeneratedImages] = useState([]);
  const [step, setStep] = useState(1);

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
      const generatedImages = response.data.images; // 이미지 URL 또는 데이터
      setImages(generatedImages);
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
      const newGenerateImages = response.data.images; // 이미지 배열 또는 데이터

      setGeneratedImages(newGenerateImages);

    } catch (error) {
      console.error('Error generating images:', error);
    }
  };

  const handleNextStep = () => {
    // 다음 단계로 이동
    setStep(2);
  };

  const handlePreviousStep = () => {
    // 이전 단계로 돌아가기
    setStep(1);
  };

  return (
    <>
    <Header/>    
    <div className='webtoon-style-learning'>
        {step === 1 && (
            <>
            <h2>STEP 1. 웹툰 그림체 학습</h2>
            <div className="step">
                <div className="left-container">
                    <h5>캐릭터 이미지를 업로드 해주세요!</h5>
                    <input type="file" id="file-upload" name="file-upload" accept="image/*" onChange={handleFileChange} />
                    <label for="file-upload" className="custom-file-input">파일 업로드</label>
                    <input type="text" placeholder="캐릭터 이름 입력" value={text1} onChange={(e) => setText1(e.target.value)} />
                    <h6>ex. 짱구</h6>
                    <input type="text" placeholder="찾고 싶은 캐릭터의 상황, 구도 입력" value={text2} onChange={(e) => setText2(e.target.value)} />
                    <h6>ex. 옆을 보고 웃고있는 짱구</h6>
                    <button onClick={handleGenerateImage}>이미지 학습</button>
                </div>
                <div className='right-container'>
                {images.map((image, index) => (
                <div className='webtoon-image1 right-align' key={index}>
                    <img src={image} alt={`그림체 학습 ${index + 1}`} />
                    <a href={image} download={`그림체 학습_${index + 1}.jpg`}>
                        다운로드
                    </a>
                </div>
                ))};      
                </div>
            </div>
            </>
        )}
        {step === 2 && (
            <>
            <h2>STEP 2. 웹툰 그림체 생성</h2>
            <div className="step">
                <div className="left-container">
                    {images.map((image, index) => (                 
                    <div className='webtoon-image1 right-align' key={index}>
                        <img src={image} alt={`그림체 학습 ${index + 1}`} />
                        <a href={image} download={`그림체 학습_${index + 1}.jpg`}>
                            다운로드
                        </a>
                    </div>
                    ))};
                    <input type="text" placeholder="원하는 캐릭터의 구도, 색상, 특징 입력" value={text3} onChange={handleText3Change} />
                    <h6>ex. 고개를 왼쪽으로 돌리고 있는 짱구, 모자를 쓴 짱구, 모든 색을 흑백으로 만든 사진</h6>
                    <button onClick={handleGenerateMoreImages}>이미지 생성</button>
                </div>    
                <div className='right-container'>
                {generatedImages.map((image, index) => (
                    <div className='webtoon-image2 right-align' key={index}>
                    <img src={image} alt={`그림체 생성 ${index + 1}`} />
                    <a href={image} download={`그림체 생성_${index + 1}.jpg`}>
                        다운로드
                    </a>
                    </div>  
                ))};
                </div>
            </div>
            </>
        )}
         {step === 1 && (
          <button onClick={handleNextStep}>다음</button>
        )}
        {step === 2 && (
          <button onClick={handlePreviousStep}>이전</button>
        )}
    </div>
    </>
  );
}

export default WebtoonStyleLearning;
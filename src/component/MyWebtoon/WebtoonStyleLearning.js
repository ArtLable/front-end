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
  const [showImages, setShowImages] = useState(false); // 이미지 띄우기

  const toggleImages = () => { // 이미지 띄우기
    setShowImages(!showImages);
  };

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

  const showAlert = () => {
    alert('크로마 디비 생성 완료');
  }  

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
                    <input type="file" multiple id="file-upload" name="file-upload" accept="image/*" onChange={handleFileChange} />
                    <label for="file-upload" className="custom-file-input">파일 업로드</label>
                    <input type="text" placeholder="캐릭터 이름 입력" value={text1} onChange={(e) => setText1(e.target.value)} />
                    <h6>ex. 짱구</h6>
                    {/* <button onClick={handleGenerateImage}>이미지 학습 신청</button> */}
                    <button onClick={showAlert}>이미지 학습 신청</button>
                    <input type="text" placeholder="찾고 싶은 캐릭터의 상황, 구도 입력" value={text2} onChange={(e) => setText2(e.target.value)} />
                    <h6>ex. 옆을 보고 웃고있는 짱구</h6>
                    {/* <button onClick={handleGenerateImage}>이미지 탐색</button> */}
                    <button onClick={toggleImages}>이미지 탐색</button>
                </div>
                <div className='right-container'>
                  {showImages && (
                     <div className={`image-grid ${showImages ? 'show' : 'hide'}`}>
                     <div className="row">
                       <div className="image-box">
                       <img src="img/4444.png" alt="이미지4" />
                       </div>
                       <div className="image-box">
                         <img src="img/1111.png" alt="이미지2" />
                       </div>
                     </div>
                     <div className="row">
                       <div className="image-box">
                         <img src="img/2222.png" alt="이미지3" />
                       </div>
                       <div className="image-box">
                       <img src="img/3333.png" alt="이미지1" />
                         
                       </div>
                     </div>
                   </div>
                    // <div className="image-container">
                    //   <img src="https://img.mbn.co.kr/filewww/news/other/2015/04/01/014000920012.jpg" alt="이미지1" />
                    //   <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/162573366_125131376285675_5242924329111810812_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9NkHvkaJtq8AX9or3BB&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBLbk1pygyhvWdfjuQ12cyzoNXii6KTuaUbCuoM8yf3Zg&oe=653A210C" alt="이미지2" />
                    //   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdSfXj5XmpzJUxsfu6MAAed7tFyIV17Eg5A&usqp=CAU" alt="이미지3" />
                    //   <img src="https://www.sportsq.co.kr/news/photo/201611/212834_203526_226.jpg" alt="이미지4" />
                    // </div>
                  )}
                {/* {images.map((image, index) => (
                <div className='webtoon-image1 right-align' key={index}>
                    <img src={image} alt={`그림체 학습 ${index + 1}`} />
                    <a href={image} download={`그림체 학습_${index + 1}.jpg`}>
                        다운로드
                    </a>
                </div>
                ))};       */}
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
                    {/* <button onClick={handleGenerateMoreImages}>이미지 생성</button> */}
                    <button onClick={handleGenerateMoreImages}>이미지 생성</button>
                </div>    
                <div className='right-container'>
                  {showImages && (
                     <div className={`image-grid ${showImages ? 'show' : 'hide'}`}>
                     <div className="row">
                       <div className="image-box">
                       <img src="img/5555.png" alt="이미지4" />
                       </div>
                       <div className="image-box">
                         <img src="img/6666.png" alt="이미지2" />
                       </div>
                     </div>
                     <div className="row">
                       <div className="image-box">
                         <img src="img/7777.png" alt="이미지3" />
                       </div>
                       <div className="image-box">
                       <img src="img/8888.png" alt="이미지1" />
                         
                       </div>
                     </div>
                   </div>
                    // <div className="image-container">
                    //   <img src="https://img.mbn.co.kr/filewww/news/other/2015/04/01/014000920012.jpg" alt="이미지1" />
                    //   <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/162573366_125131376285675_5242924329111810812_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9NkHvkaJtq8AX9or3BB&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBLbk1pygyhvWdfjuQ12cyzoNXii6KTuaUbCuoM8yf3Zg&oe=653A210C" alt="이미지2" />
                    //   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdSfXj5XmpzJUxsfu6MAAed7tFyIV17Eg5A&usqp=CAU" alt="이미지3" />
                    //   <img src="https://www.sportsq.co.kr/news/photo/201611/212834_203526_226.jpg" alt="이미지4" />
                    // </div>
                  )}
                {/* {images.map((image, index) => (
                <div className='webtoon-image1 right-align' key={index}>
                    <img src={image} alt={`그림체 학습 ${index + 1}`} />
                    <a href={image} download={`그림체 학습_${index + 1}.jpg`}>
                        다운로드
                    </a>
                </div>
                ))};       */}
                </div>
                {/* {generatedImages.map((image, index) => (
                    <div className='webtoon-image2 right-align' key={index}>
                    <img src={image} alt={`그림체 생성 ${index + 1}`} />
                    <a href={image} download={`그림체 생성_${index + 1}.jpg`}>
                        다운로드
                    </a>
                    </div>  
                  </div>
                  ))}; */}
            </div>
            </>
        )}
         {step === 1 && (
          <button className='next-button'onClick={handleNextStep}>다음</button>
        )}
        {step === 2 && (
          <button onClick={handlePreviousStep}>이전</button>
        )}
    </div>
    </>
  );
}

export default WebtoonStyleLearning;


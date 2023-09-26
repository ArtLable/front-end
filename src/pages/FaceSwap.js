import React, { useState } from 'react';
import './FaceSwap.css';
import Header from '../component/Header';

const FaceSwap = () => {
  // 상태 변수 및 이벤트 핸들러 등을 정의합니다.
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [showImage, setShowImage] = useState(false);

  // 드롭다운 옵션 선택 이벤트 핸들러
  const handleOptionSelect1 = (event) => {
    setSelectedOption1(event.target.value);
  };

   const handleOptionSelect2 = (event) => {
    setSelectedOption2(event.target.value);
   };

   const handleClick = () => {
    setShowImage(true); // 이미지 표시 상태를 true로 설정
  }

 return (
    <>
    <Header/>
    <div className="main">
        <div className="title">
        <h2>FACE DETECTIONS & SWAP</h2>
        </div>
    </div>    
    <div className="face-swap-container">
        <div className="faceImg">
            {/* 첫 번째 이미지 */}
            <div className="face-swap-container">
                <div className="image-dropdown-container">
                    <img src="img/woman.png" alt="Image One" />
                    <select value={selectedOption1} onChange={handleOptionSelect1}>
                        <option value=""> -- 캐릭터 -- </option>
                        <option value="라리에트"> 라리에트 </option>
                        <option value="아스라한"> 아스라한 </option>
                            {/* Add more options here */}
                    </select>
                </div>

                <div className="image-dropdown-container">
                    <img src="img/man.png" alt="Image Two" />
                    <select value={selectedOption2} onChange={handleOptionSelect2}>
                        <option value=""> -- 캐릭터 -- </option>
                        <option value="라리에트"> 라리에트 </option>
                        <option value="아스라한"> 아스라한 </option>
                        {/* Add more options here */}
                    </select>
                </div>
            </div>
            <button onClick={handleClick}>페이스 스왑</button>
        </div>  
            {showImage && (
            // 원하는 이미지 경로를 넣으세요.
            // 현재는 임의의 이미지 경로가 들어가 있습니다.
            // "페이스 스왑" 버튼을 누르면 이 부분이 화면에 나타납니다.
            <div className="final-img">
            <img src="img/output2.png" alt="" /> 
            </div>
        )}
        </div>
    </>
 );
};

export default FaceSwap;

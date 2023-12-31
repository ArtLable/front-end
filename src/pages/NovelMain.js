import React, { useState, useEffect } from 'react';
import Sidebar from '../component/MyNovel/Sidebar';
import NovelForm from '../component/MyNovel/NovelForm';
import CharacterInput from '../component/MyNovel/CharacterInput';
import './NovelMain.css';
import Header from '../component/Header';
import axios from 'axios';
import ImageModal from '../component/Modal/ImageModal';
import { Link } from 'react-router-dom';

export default function NovelMain() {

  const [novels, setNovels] = useState([]);
  const [selectedNovel, setSelectedNovel] = useState(null);
  const [isCharacterInputOpen, setIsCharacterInputOpen] = useState(false);
  const [isNovelFormOpen, setIsNovelFormOpen] = useState(false);
  const [additionalRequirements, setAdditionalRequirements] = useState(''); // 추가 요구사항
  const [summarizedText, setSummarizedText] = useState(''); // 요약된 텍스트
  const [uploadedFile, setUploadedFile] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [finalImageUrl, setFinalImageUrl] = useState('');
  
  

  const handleShowImageButtonClick = (characterName, imageUrl, event) => {
  event.preventDefault(); // 이벤트의 기본 동작을 막음
  event.stopPropagation(); // 상위 요소로의 이벤트 전파를 막음
  setModalImageUrl(imageUrl);
  setIsModalOpen(true);
};

  const [showImageForCharacter, setShowImageForCharacter] = useState(
    selectedNovel && selectedNovel.characters 
      ? selectedNovel.characters.reduce((acc, character) => {
          acc[character.name] = false;
          return acc;
        }, {}) 
      : {}
  );

  useEffect(() => {
    if (selectedNovel && Array.isArray(selectedNovel.characters)) {
      setShowImageForCharacter(
        selectedNovel.characters.reduce((acc, character) => {
          acc[character.name] = false;
          return acc;
        }, {})
      );
    }
  }, [selectedNovel]);

  const handleFileInputChange = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const summarizeTextFromFile = async () => {
    if (!uploadedFile) {
      alert('파일을 업로드하세요.');
      return;
    }
  
    // try {
    //   const formData = new FormData();
    //   formData.append('file', uploadedFile);
  
    //   // AI 서버로 파일 업로드
    //   const response = await axios.post('/api/upload-file', formData);
  
      // AI 서버에서 받은 요약된 텍스트 설정
      // setSummarizedText(response.data.summary);
      
      // 원하는 내용으로 요약된 텍스트 설정
      setTimeout(() => {
        setSummarizedText("여자는 남자의 저주를 풀어주기 위해 침대에 있는 남자에게 갔다.");
      }, 15000); // 2000ms = 2s
    };
    // } catch (error) {
    //   console.error('Error summarizing text from file:', error);
    // }

  const generateFinalImage = async () => {
    // 요약된 텍스트와 추가 요구사항을 서버에 전송하여 최종 이미지 생성
    try {
      // const response = await axios.post('/api/generate-final-image', {
      //   summarizedText,
      //   additionalRequirements,
      //   novelInfo: selectedNovel, // 소설 정보 및 캐릭터 정보 전달
      // });

      // 이미지를 처리하거나 표시하는 방법을 구현
      // response.data 에 생성된 이미지 또는 결과가 포함될 것입니다.
      setFinalImageUrl("img/9999.png");
    } catch (error) {
      console.error('Error generating final image:', error);
    }
  };

  const handleAddCharacter = (newCharacter) => {
    // 선택한 소설에 캐릭터 정보 추가
    if (selectedNovel) {
      const updatedNovel = {
        ...selectedNovel,
        characters: [...(selectedNovel.characters || []), newCharacter],
      };
      
      setSelectedNovel(updatedNovel);
    }
    console.log("New Character:", newCharacter); // 개별 캐릭터 정보를 콘솔에 출력
    // 캐릭터 입력 컴포넌트 닫기
    setIsCharacterInputOpen(false);
  };

  const handleAddNovel = (novelData) => {
    setNovels([...novels, novelData]);
    setIsNovelFormOpen(false);
  };

  const handleNovelClick = (novel) => {
    console.log(novel);
    setSelectedNovel(novel);
  };

  const handleAddNovelClick = () => {
    setSelectedNovel(null); // 선택된 소설 초기화
    setIsNovelFormOpen(true); // 소설 정보 입력 화면 열기
  };

  const handleNextClick = () => {
    // "다음" 버튼 클릭 시 다음 단계로 이동
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="main-content">
          <Sidebar novels={novels} onNovelClick={handleNovelClick} onAddNovelClick={handleAddNovelClick} />
          <div>
            {currentStep === 1 ? (
              isNovelFormOpen ? (
                <NovelForm onAddNovel={handleAddNovel} />
              ) : (
                <div className="novel-form">
                  <div className="step-title"><h2>STEP 1. 소설 정보</h2></div>
                  <form>
                  <div className="character-input">
                    <h4>소설 정보</h4>
                  </div>
                <div className="form">  
                  <div className="form-form">
                    <div className="form-group">
                      <h4>제목: {selectedNovel ? selectedNovel.name : <span>소설을 추가 또는 선택해주세요</span>}</h4>
                    </div>
                    <div className="form-group">
                      <div className="form-group">
                        <h4>장르: {selectedNovel ? selectedNovel.genre : <span>소설을 추가 또는 선택해주세요</span>}</h4>
                      </div>
                      <div className="form-group">
                        <h4>전체 줄거리: {selectedNovel ? selectedNovel.summary : <span>소설을 추가 또는 선택해주세요</span>}</h4>
                      </div>
                  </div>  
                      <div className="form-group-button1">
                        <button onClick={(e) => {
                          e.preventDefault();
                          setIsCharacterInputOpen(true);
                        }}>
                          캐릭터 추가
                        </button>
                      </div>
                    </div>
                  </div>  
                      {isCharacterInputOpen && (
                        <CharacterInput onCharacterSubmit={handleAddCharacter} />
                        )}
                      <ImageModal isOpen={isModalOpen} imageUrl={modalImageUrl} onClose={() => setIsModalOpen(false)} />

                      {selectedNovel && selectedNovel.characters && selectedNovel.characters.length > 0 && (
                        <div className="table">
                        <table className="styled-table">
                        <thead>
                          <tr>
                            <th>이름</th>
                            <th>성별</th>
                            <th>외형</th>
                            <th>성격</th>
                            <th style={{width: "200px"}}>기본 이미지</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedNovel.characters.map((character, index) => (
                            <tr className="character-table" key={index}>
                              <td>{character.name}</td>
                              <td>{character.gender}</td>
                              <td>{character.appearance}</td>
                              <td>{character.personality}</td>
                              <td>{character.defaultImage}
                              {showImageForCharacter[character.name] &&
                                (<img 
                                  src={index === 0 ? '/img/5678.png' : '/img/1234.png'}
                                  onClick={() => handleShowImageButtonClick(character.name, index === 0 ? '/img/5678.png' : '/img/1234.png')}
                                />)
                              }
                              {!showImageForCharacter[character.name] &&
                                (<button onClick={(event) => handleShowImageButtonClick(character.name, index === 0 ? '/img/5678.png' : '/img/1234.png', event)} style={{width: "100%", height: "auto", maxWidth: "150px", maxHeight: "150px"}} >보기</button>
                                )
                              }
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      </div>
                    )}
                    <div className="form-group-button2">
                      <button onClick={handleNextClick}>다음</button>
                    </div>
                  </form>
                </div>
              )
            ) : currentStep === 2 ? (
              <div className="novel-form">
                <div className="step-title"><h2>STEP 2. 파일 업로드 및 요약</h2></div>
                <form>
                  {/* 파일 업로드와 요약 관련 컴포넌트 렌더링 */}
                  <div className="form-group">
                    <input type="file" id="fileInput" onChange={handleFileInputChange} />
                    <label className="novel-file" htmlFor="fileInput">소설 텍스트 파일 업로드 Click !!</label>
                    <div className="form-group-button3">
                    <button onClick={(e) => {
                      e.preventDefault();
                      summarizeTextFromFile();
                    }}>
                      파일에서 요약
                    </button>
                  </div>
                  </div>
                  {/* <div className="summarize"></div> */}
                  {/* 요약된 텍스트 표시 */}
                  {summarizedText && (
                    <div className="form-group">
                      <h2>요약된 텍스트:</h2>
                      <p>{summarizedText}</p>
                    </div>
                  )}
                  <div className="form-group-button4">
                    <button onClick={handleNextClick}>다음</button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="novel-form">
                <div className="step-title"><h2>STEP 3. 추가 요구사항 및 이미지 생성</h2></div>
                <form>
                  <div className="form-group">
                    <label htmlFor="additionalRequirements">추가 요구사항:</label>
                    <textarea
                      id="additionalRequirements"
                      rows="4"
                      value={additionalRequirements}
                      onChange={(e) => setAdditionalRequirements(e.target.value)}
                    ></textarea>
                  </div>
                  <button onClick={(e) => {
                    e.preventDefault();
                    generateFinalImage();
                  }}>최종 이미지 생성</button>
                </form>

                {finalImageUrl && (
                  <div>
          <div className="form-group-button2">
            <Link to="/face-swap" className="next-button">다음</Link>
          </div>
                  <h2>생성된 최종 이미지:</h2>
                  <img src={finalImageUrl} alt="Generated Final Image" />
                </div>
              )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

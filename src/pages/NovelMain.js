import React, { useState } from 'react';
import Sidebar from '../component/MyNovel/Sidebar';
import NovelForm from '../component/MyNovel/NovelForm';
import CharacterInput from '../component/MyNovel/CharacterInput';
import './NovelMain.css';
import Header from '../component/Header';
import axios from 'axios';

export default function NovelMain() {

    const [novels, setNovels] = useState([]);
    const [selectedNovel, setSelectedNovel] = useState(null);
    const [isCharacterInputOpen, setIsCharacterInputOpen] = useState(false);
    const [isNovelFormOpen, setIsNovelFormOpen] = useState(false);
    const [additionalRequirements, setAdditionalRequirements] = useState(''); // 추가 요구사항
    const [summarizedText, setSummarizedText] = useState(''); // 요약된 텍스트
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileInputChange = (event) => {
      setUploadedFile(event.target.files[0]);
    };
  
    const summarizeTextFromFile = async () => {
      if (!uploadedFile) {
        alert('파일을 업로드하세요.');
        return;
      }
  
      try {
        const formData = new FormData();
        formData.append('file', uploadedFile);
  
        // AI 서버로 파일 업로드
        const response = await axios.post('/api/upload-file', formData);
  
        // AI 서버에서 받은 요약된 텍스트 설정
        setSummarizedText(response.data.summary);
      } catch (error) {
        console.error('Error summarizing text from file:', error);
      }
    };
  
    const generateFinalImage = async () => {
      // 요약된 텍스트와 추가 요구사항을 서버에 전송하여 최종 이미지 생성
      try {
        const response = await axios.post('/api/generate-final-image', {
          summarizedText,
          additionalRequirements,
          novelInfo: selectedNovel, // 소설 정보 및 캐릭터 정보 전달
        });
  
        // 이미지를 처리하거나 표시하는 방법을 구현
        // response.data 에 생성된 이미지 또는 결과가 포함될 것입니다.
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


    return (
      <>
        <Header />
        <div className="container">
          <div className="main-content">
            <Sidebar novels={novels} onNovelClick={handleNovelClick} onAddNovelClick={handleAddNovelClick} />
            <div>
              {isNovelFormOpen ? (
                <NovelForm onAddNovel={handleAddNovel} />
              ) : (
                selectedNovel ? (
                  <div className="novel-form">
                    <form>
                      <div className="form-group">
                        <h2>{selectedNovel.name}</h2>
                      </div>
                      <div className="form-group">
                        <p>장르: {selectedNovel.genre}</p>
                      </div>
                      <div className="form-group">
                        <p>전체 줄거리: {selectedNovel.summary}</p>
                      </div>
                      <button onClick={(e) => {
                        e.preventDefault();
                        setIsCharacterInputOpen(true);
                      }}>
                        캐릭터 추가
                      </button>
                      {isCharacterInputOpen && (
                        <CharacterInput onCharacterSubmit={handleAddCharacter} />
                      )}
                      {selectedNovel.characters && selectedNovel.characters.length > 0 && (
                        <table className="styled-table">
                          <thead>
                            <tr>
                              <th>이름</th>
                              <th>성별</th>
                              <th>외형</th>
                              <th>성격</th>
                              <th>기본 이미지</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedNovel.characters.map((character, index) => (
                              <tr key={index}>
                                <td>{character.name}</td>
                                <td>{character.gender}</td>
                                <td>{character.appearance}</td>
                                <td>{character.personality}</td>
                                <td>{character.defaultImage}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
  
                      {/* 파일 업로드 및 요약 버튼 */}
                      <div className="form-group">
                        <label htmlFor="fileInput">소설텍스트 파일 업로드:</label>
                        <input type="file" id="fileInput" onChange={handleFileInputChange} />
                        <button onClick={summarizeTextFromFile}>파일에서 요약</button>
                      </div>
  
                      {/* 요약된 텍스트 표시 */}
                      {summarizedText && (
                        <div className="form-group">
                          <h2>요약된 텍스트:</h2>
                          <p>{summarizedText}</p>
                        </div>
                      )}
  
                      {/* 추가 요구사항 입력 */}
                      <div className="form-group">
                        <label htmlFor="additionalRequirements">추가 요구사항:</label>
                        <textarea
                          id="additionalRequirements"
                          rows="4"
                          value={additionalRequirements}
                          onChange={(e) => setAdditionalRequirements(e.target.value)}
                        ></textarea>
                      </div>
  
                      {/* 최종 이미지 생성 버튼 */}
                      <button onClick={generateFinalImage}>최종 이미지 생성</button>
                    </form>
                  </div>
                ) : (
                  <NovelForm onAddNovel={handleAddNovel} />
                )
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
  

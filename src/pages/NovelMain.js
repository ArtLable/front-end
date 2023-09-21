import React, { useState } from 'react';
import Sidebar from '../component/MyNovel/Sidebar';
import NovelForm from '../component/MyNovel/NovelForm';
import CharacterInput from '../component/MyNovel/CharacterInput';
import './NovelMain.css';

export default function NovelMain() {

    const [novels, setNovels] = useState([]);
    const [selectedNovel, setSelectedNovel] = useState(null);
    const [isCharacterInputOpen, setIsCharacterInputOpen] = useState(false);

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
    };
    
    const handleNovelClick = (novel) => {
      console.log(novel);
      setSelectedNovel(novel); 
    };


  return (
    <div className="container">
      <div className="main-content">
        <Sidebar novels = {novels} onNovelClick={handleNovelClick}/>
          <div>
            {selectedNovel ? (
              <div className="novel-form">
                <form>
                  <div className="form-group">
                    <h2>{selectedNovel.name}</h2>
                  </div>
                  <div className="form-group">
                    <p>장르: {selectedNovel.genre.join(', ')}</p>
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
              </form>
              </div>
            ) 
            : (<NovelForm onAddNovel = {handleAddNovel}/>
            )}
          </div>
      </div>
    </div>
  );
}

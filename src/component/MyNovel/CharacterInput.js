import React, { useState } from 'react'

async function generateCharacterImage(characterInfo) {
    try {
      // AI 서버에 캐릭터 정보 전송 및 이미지 생성 요청
      const response = await fetch('AI_SERVER_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterInfo),
      });
  
      if (!response.ok) {
        throw new Error('이미지 생성 요청에 실패했습니다.');
      }
  
      // 이미지 URL을 JSON으로 파싱하여 반환
      const imageData = await response.json();
      return imageData.imageUrl;
    } catch (error) {
      // 오류 처리
      throw error;
    }
  }
  

export default function CharacterInput({ onCharacterSubmit }) {

    const [characters, setCharacters] = useState([]);
    const [characterImageUrl, setCharacterImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [newCharacter, setNewCharacter] = useState({
        name: '',
        gender: '',
        appearance: '',
        personality: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCharacter((prevCharacter) => ({
          ...prevCharacter,
          [name]: value,
        }));
      };

      const handleGenerateImage = async () => {
        try {
          setIsLoading(true);
          // AI 서버로 캐릭터 정보 전송 및 이미지 생성 요청
          const imageUrl = await generateCharacterImage(newCharacter);
          // 생성된 이미지 URL을 캐릭터 정보에 저장
          const updatedCharacters = [...characters, { ...newCharacter, defaultImage: imageUrl }];
          setCharacters(updatedCharacters);
          setNewCharacter({
            name: '',
            gender: '',
            appearance: '',
            personality: '',
          });
        } catch (error) {
          console.error('이미지 생성 중 오류 발생:', error);
        } finally {
          setIsLoading(false);
        }
      };

      const handleSubmit = () => {
        // 새 캐릭터 정보를 부모 컴포넌트로 전달
        onCharacterSubmit(newCharacter);
        // 입력 양식 초기화
        setNewCharacter({
          name: '',
          gender: '',
          appearance: '',
          personality: '',
        });
      };

      const renderCharacterInputs = () => {
        return characters.map((character, index) => (
          <div key={index} className="character-input">
            <h4>캐릭터 정보 입력</h4>
            <div>
              <label>이름:</label>
              <input
                type="text"
                name="name"
                value={character.name || ''}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <button onClick={() => handleGenerateImage(index)} disabled={isLoading}>
              {isLoading ? '로딩 중...' : '캐릭터 생성'}
            </button>
            {character.defaultImage && (
              <div>
                <img src={character.defaultImage} alt="캐릭터 이미지" />
              </div>
            )}
          </div>
        ));
      };

    return (
        <div className="character-input">
        <h4>캐릭터 정보 입력</h4>
        <div>
          <label>이름:</label>
          <input
            type="text"
            name="name"
            value={newCharacter.name}
            onChange={handleChange}
          />
        </div>
            <label>성별:</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio1"
                    checked={newCharacter.gender === '남자'}
                    onChange={() => setNewCharacter((prevCharacter) => ({ ...prevCharacter, gender: '남자' }))}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">남자</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio2"
                    checked={newCharacter.gender === '여자'}
                    onChange={() => setNewCharacter((prevCharacter) => ({ ...prevCharacter, gender: '여자' }))}
                />
                    <label className="form-check-label" htmlFor="inlineRadio2">여자</label>
                </div>
            <div>

        <label>외형:</label>
        <input
          type="text"
          name="appearance"
          value={newCharacter.appearance}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>성격:</label>
        <input
          type="text"
          name="personality"
          value={newCharacter.personality}
          onChange={handleChange}
        />
      </div>
        {characterImageUrl && (
            <div>
                <img src={characterImageUrl} alt="캐릭터 이미지" />
            </div>    
        )}
        <button className="left-button" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? '로딩 중...' : '캐릭터 생성'}
        </button>
        </div>
    );
};

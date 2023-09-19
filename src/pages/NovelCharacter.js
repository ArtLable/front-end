import React from 'react'
import '../bootstrap.css';
import '../styles/NovelCharacter.css';
import { useNavigate } from 'react-router-dom'; // useNavigate를 가져옵니다.

function NovelCharacter({ characterName, characterImageUrl }) {
  const navigate = useNavigate(); // useNavigate를 초기화합니다.

  const handleAddCharacter = () => {
    // 여기에서 필요한 로직을 추가하고, NovelMaker 화면으로 이동합니다.
    navigate('/novel-maker'); // useNavigate를 사용하여 이동합니다.
  };

  return (
    <div className="container">
      <div>
        <button onClick={handleAddCharacter}>캐릭터 추가</button>
      </div>
      <div className="novelCharacterContainer">
        <img src={characterImageUrl} alt={characterName} className="characterImage" />
        <div className="characterName">{characterName}</div>
      </div>
    </div>
  );
}


export default NovelCharacter

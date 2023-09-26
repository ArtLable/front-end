import React, { useState } from 'react';
import './NovelForm.css';


export default function NovelForm({onAddNovel}) {
    const [novelData, setNovelData] = useState({
        name: '',
        genre:'',
        summary: '',
    });

    const genres = ['로맨스','로맨스판타지', 'BL', '현대판타지', '판타지', '무협']

    const handleChange = (e) => {
      const { name, value } = e.target;
      setNovelData({
        ...novelData,
        [name]: value,
      });
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddNovel(novelData);
        setNovelData({
            name: '',
            genre: '',
            summary: '',
        });
    };

  return (
    <div className="novel-form">
      <h2>STEP 1. 소설 정보 입력</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='name'>소설 이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={novelData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">장르</label>
          <select
            id="genre"
            name="genre"
            value={novelData.genre}
            onChange={handleChange}
          >
            <option value="">장르를 선택하세요</option>
            {genres.map((genre, index) => (
                <option key={index}
                value={genre}
              >
                {genre}
                </option>
            ))}
          </select>
        </div>
          
        <div className="form-group">
          <label>전체 줄거리:</label>
          <textarea 
            name="summary"
            id="summary"
            value={novelData.summary}
            onChange={handleChange}
          />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

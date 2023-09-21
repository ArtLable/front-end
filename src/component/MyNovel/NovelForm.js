import React, { useState } from 'react';
import './NovelForm.css';


export default function NovelForm({onAddNovel}) {
    const [novelData, setNovelData] = useState({
        name: '',
        genre: [],
        summary: '',
    });

    const genres = ['로맨스','로맨스판타지', 'BL', '현대판타지', '판타지', '무협']

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' ) {
            if(checked) {
              setNovelData({
                ...novelData,
                genre: [...novelData.genre, value],
              });
            } else {
              setNovelData({
                ...novelData,
                genre: novelData.genre.filter((genre) => genre !== value),
            });
          } 
        } else {  
          setNovelData({
            ...novelData,
            [name]: value,
          });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddNovel(novelData);
        setNovelData({
            name: '',
            genre: [],
            summary: '',
        });
    };


  return (
    <div className="novel-form">
      <h2>소설 정보 입력</h2>
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
          <label>장르</label>
          <div className="genre-checkboxes">
          { genres.map((genre, index) => (
            <div key={index} className="genre-checkbox">
              <input
                type="checkbox"
                id={`genre-${index}`}
                name="genre"
                value={genre}
                checked={novelData.genre.includes(genre)}
                onChange={handleChange}
              />
            <label htmlFor={`genre-${index}`}>{genre}</label>
          </div>
          ))}
          </div>
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

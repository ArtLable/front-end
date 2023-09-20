import React, { useState } from 'react';


export default function NovelForm({onAddNovel}) {
    const [novelData, setNovelData] = useState({
        name: '',
        genre: [],
        summary: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' ) {
            const updatedGenre = checked
            ? [...novelData.genre, value]
            : novelData.genre.filter((genre) => genre !== value);

            setNovelData({
                ...novelData,
                genre: updatedGenre,
            });
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
        <div>
          <label>소설 이름:</label>
          <input
            type="text"
            name="name"
            value={novelData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>장르:</label>
          <label>
            <input
              type="checkbox"
              name="genre"
              value="판타지"
              checked={novelData.genre.includes('판타지')}
              onChange={handleChange}
            />
            판타지
          </label>
          <label>
            <input
              type="checkbox"
              name="genre"
              value="로맨스"
              checked={novelData.genre.includes('로맨스')}
              onChange={handleChange}
            />
            로맨스
          </label>
          {/* 다른 장르들도 추가하세요 */}
        </div>
        <div>
          <label>전체 줄거리:</label>
          <textarea
            name="summary"
            value={novelData.summary}
            onChange={handleChange}
          />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

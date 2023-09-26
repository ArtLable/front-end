import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './PostBoard.css';
import Header from '../Header';

const PostBoard = () => {
  const [feedContent, setFeedContent] = useState('');
  const [feedCategory, setFeedCategory] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const accessToken = Cookies.get('accessToken');
        console.log(accessToken);

    if (accessToken) {
        const formData = new FormData();
        // formData.append('feed', JSON.stringify({ feedContent, feedCategory }));
        formData.append("feedContent", feedContent)
        formData.append("feedCategory", feedCategory)
        
        if (file) {
            formData.append('files', file);
        }
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
          }
        
        console.log(accessToken)
        const response = await axios.post('http://127.0.0.1:8080/api/v1/feeds', formData, {
            headers: {
              Authorization: accessToken
            }
        }).catch((error) => {
            console.error('요청 실패:', error);
        });
        console.log(formData);
        

        console.log('게시물 작성 응답 데이터:', response);

    if (response.data && response.data.httpStatus === 201) {
        alert('게시글이 성공적으로 작성되었습니다.');
        navigate('/');
    } else {
        alert('게시글 작성에 실패했습니다.');
    }
    }
    } catch (error) {
    console.error('게시글 작성 오류:', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="post">
      <Header/>
      <form className="post-board" onSubmit={handleSubmit}>
        <h4>피드 작성</h4>
        <label>
          내용:
          <textarea value={feedContent} onChange={(e) => setFeedContent(e.target.value)} />
        </label>
        <br />
        <label>
          카테고리:
          <select value={feedCategory} onChange={(e) => setFeedCategory(e.target.value)} >
            <option value="">카테고리 선택</option>
            <option value="웹소설 삽화">웹소설 삽화</option>
            <option value="웹툰 그림체 학습">웹툰 그림체 학습</option>
          </select>  
        </label>
        <br />
        <label>
          이미지 업로드:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">작성</button>
      </form>
    </div>
  );
};

export default PostBoard;

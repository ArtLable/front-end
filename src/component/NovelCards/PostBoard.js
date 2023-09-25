import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import api from '../../api/api';


const PostBoard = () => {
  const [feedContent, setFeedContent] = useState('');
  const [feedCategory, setFeedCategory] = useState('');
  const [file, setFile] = useState(null);

//   useEffect(() => {
//     // Axios 인스턴스를 사용하여 요청 보내기
//     api.get('http://127.0.0.1:8080/api/v1/authentication/login')
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error('요청 오류:', error);
//       });
//   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const accessToken = Cookies.get('accessToken');
        console.log(accessToken);

    if (accessToken) {
        const formData = new FormData();
        formData.append('feed', JSON.stringify({ feedContent, feedCategory }));
        if (file) {
            formData.append('files', file);
        }
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
          }
        
        
        const response = await axios.post('http://127.0.0.1:8080/api/v1/feeds', formData, {
            headers: {
                Authorization: `Bearer${accessToken}`,
            },
        }).catch((error) => {
            console.error('요청 실패:', error);
        });
        console.log(formData);
        

        console.log('게시물 작성 응답 데이터:', response);

    if (response.data && response.data.httpStatus === 201) {
        alert('게시글이 성공적으로 작성되었습니다.');
        // 성공 시 필요한 동작 수행 (예: 페이지 이동)
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

//   useEffect(() => {
//     api.get('http://127.0.0.1:8080/api/v1/feeds')
//         .then((response) => {
//             console.log(response.data);
//         })
//         .catch((error) => {
//             console.error('요청 오류:' , error);
//         });
//     }, []);    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          게시글 내용:
          <textarea value={feedContent} onChange={(e) => setFeedContent(e.target.value)} />
        </label>
        <br />
        <label>
          게시글 카테고리:
          <input type="text" value={feedCategory} onChange={(e) => setFeedCategory(e.target.value)} />
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

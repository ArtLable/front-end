import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = 'http://127.0.0.1:8080/api/v1/authentication/login';
    const requestData = {
      memberEmail: email,
      memberPwd: password,
    };

    try {
      const response = await axios.post(apiUrl, requestData, {
        headers: {
          'Accept': 'application/json;charset=UTF-8',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });

      const data = response.data;
      const accessToken = data.authority[0].accessToken;

      // 액세스 토큰을 쿠키에 저장
      Cookies.set('accessToken', accessToken);

      setError(null);

      navigate('/');

    } catch (error) {
      console.error('로그인 오류:', error);
      setError('로그인에 실패했습니다.');
    }
  };

  // 에러 메시지 표시
  const errorMessage = error ? (
    <div>{error}</div>
  ) : null;

  return (
    <div>
      <h2>Login</h2>
      {errorMessage}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

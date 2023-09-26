import React, { useEffect, useState} from 'react'
import '../../styles/pages.css';
import Cookies from 'js-cookie'; 
import axios from 'axios';


function LoginModal({isOpen, closeModal,  onLoginSuccess}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [error, setError] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      // /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  const handlePw= (e) => {
    setPassword(e.target.value);
    const rePass =  /^[a-zA-Z\\d`~!@#$%^&*()-_=+]{8,24}$/;
    if(rePass.test(password)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  }

  const onClickConfirmButton = async (event) => {
    if (event) {
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
      const accessToken = "Bearer "+response.data.results.loginResponse.authority[0].accessToken;
// console.log('넘어온 데이터', data);
// localStorage.setItem('accessToken', accessToken);

// 멤버 닉네임
let memberNickName = data.results.loginResponse.memberNickname;

console.log(memberNickName);
console.log(accessToken);

// 액세스 토큰을 쿠키에 저장
Cookies.set('memberNickName', memberNickName);
Cookies.set('accessToken', accessToken);


      setError(null);

      closeModal();

      onLoginSuccess();

    } catch (error) {
      console.error('로그인 오류:', error);
      setError('로그인에 실패했습니다.');
    }
  }};
  
  useEffect(() => {
    if(emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
      setNotAllow(true);
  }, [emailValid, pwValid])

  const handleCloseModal = (e) => {
    if (e.target.classList.contains('loginPage')) {
      closeModal();
    }
  };

  return (
    <div className={`loginPage ${isOpen ? 'show' : ''}`} onClick={handleCloseModal}>
      <div className="loginPage" style={{display:isOpen?"block":"none",}}>
        <div className="loginModal">
          <div className="titleWrap">LOGIN</div>
          <div className="contentWrap">
            <div className="inputTitle">이메일 주소</div>
            <div className="inputWrap">
              <input 
                type='email'
                className='input' 
                placeholder='test@gmail.com' 
                value={email} 
                onChange={handleEmail}/>
            </div>
            <div className="errorMessageWrap">
              {
                !emailValid && email.length > 0 && (
                  <div>올바른 이메일을 입력해주세요.</div>
                )
              }
            </div>

            <div style={{ marginTop: "26px" }}className="inputTitle">비밀번호</div>
            <div className="inputWrap">
              <input
                type='password' 
                className='input' 
                placeholder='영문,숫자,특수문자 포함 8자 이상'
                value={password}
                onChange={handlePw}/>
            </div>  
            <div className="errorMessageWrap">
              {
                !pwValid && password.length > 0 && (
                  <div>영문,숫자,특수문자 포함 8자 이상을 입력해주세요.</div>
                )
              }
            </div>
          </div>
          <div className="">
          <button onClick={(event) => onClickConfirmButton(event)} disabled={notAllow} className='loginButton'> 
            확인
          </button>
            <button onClick={closeModal} className='buttonBox'> 
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default LoginModal
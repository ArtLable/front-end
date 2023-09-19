import React, { useEffect, useState, useRef } from 'react'
import '../../styles/pages.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';


function LoginModal({isOpen, closeModal}) {

  const formRef = useRef();
  const [cookies, setCookie] = useCookies(['accessToken']);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

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
    setPw(e.target.value);
    const rePass =  /^[a-zA-Z\\d`~!@#$%^&*()-_=+]{8,24}$/;
    if(rePass.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  }

  const login = (e) => {
    e.preventDefault();
    axios
            .post('/authentication/login', {
                memberEmail: formRef.current.memberEmail.value,
                memberPwd: formRef.current.memberPwd.value,
            })
            .then((res) => {
                setCookie('accessToken', res.data.accessToken);
            });
  };

  const onClickConfirmButton = () => {
    if (emailValid && pwValid) {
      login();
    } else {
      alert('등록되지 않은 회원입니다.')
    }
  };
  
  useEffect(() => {
    if(emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
      setNotAllow(true);
  }, [emailValid, pwValid])

  return (
      <div className="loginPage" style={{display:isOpen?"block":"none",}}>
        <div className="loginModal">
          <div className="titleWrap">LOGIN</div>
          <div className="contentWrap">
            <div className="inputTitle">이메일 주소</div>
            <div className="inputWrap">
              <input 
                type='text'
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
                value={pw}
                onChange={handlePw}/>
            </div>  
            <div className="errorMessageWrap">
              {
                !pwValid && pw.length > 0 && (
                  <div>영문,숫자,특수문자 포함 8자 이상을 입력해주세요.</div>
                )
              }
            </div>
          </div>
            <div>
              <form ref={formRef} onSubmit={login}></form>
            </div>
          <div className="buttonBox">
            <button onClick={onClickConfirmButton} disabled={notAllow} className='loginButton'> 
              확인
            </button>
            <button className='buttonBox'>회원가입</button>
            <button onClick={closeModal} className='buttonBox'> 
              닫기
            </button>
          </div>
        </div>
      </div>
      
  )
}

export default LoginModal

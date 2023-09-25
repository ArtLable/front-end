import { React, useEffect, useState } from 'react'
import '../../styles/pages.css';
import axios from 'axios';


function RegistModal({isOpen, closeModal}) {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [nickName, setNickName] = useState('');
  const [nickNameError, setNickNameError] = useState('');

  const [pw, setPw] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
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

  const checkEmailDuplication = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8080/api/v1/members/email/${email}/check`);
      if (response.data.httpStatus === 400) {
        setEmailError('이미 사용중인 이메일 입니다.');
        // 중복된 이메일 처리
      } else {
        setEmailError('');
        // 중복되지 않은 이메일 처리
      }
    } catch (error) {
      console.error('이메일 중복 확인 오류:', error);
      if (error.response && error.response.data && error.response.data.httpStatus === 400) {
        setEmailError('이미 사용중인 이메일 입니다.');
        // 중복된 이메일 처리 (네트워크 오류 등으로 인한 예외 발생 시)
      } else {
        alert('이메일 중복 확인 중 오류가 발생하였습니다.');
        // 다른 예외 처리
      }
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
    
    if (confirmPassword === e.target.value) {
      setPasswordsMatch(true); // 비밀번호 일치
    } else {
      setPasswordsMatch(false); // 비밀번호 불일치
    }
  };
  
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (pw === e.target.value) {
      setPasswordsMatch(true); // 비밀번호 일치
    } else {
      setPasswordsMatch(false); // 비밀번호 불일치
    }
  };

  const handelNickName = (e) => {
    setNickName(e.target.value);
  }

  const checkNicknameDuplication = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8080/api/v1/members/nickname/${nickName}/check`);
      if (response.data.httpStatus === 400) {
        setNickNameError('이미 사용중인 닉네임 입니다.')
      } else {
        setNickNameError('');
      }
    } catch(error) {
      console.error('닉네임 중복 확인 오류:', error);
      if (error.response && error.response.data && error.response.data.httpStatus === 400) {
        setNickNameError('이미 사용중인 닉네임 입니다.');
        // 중복된 이메일 처리 (네트워크 오류 등으로 인한 예외 발생 시)
      } else {
        alert('닉네임 중복 확인 중 오류가 발생하였습니다.');
        // 다른 예외 처리
      }
    }
  }  

  const onClickConfirmButton = async () => {
    if (emailValid && pwValid) {
      if (pw === confirmPassword) {
        try {
          const response = await axios.post('/api/v1/members', {
            memberEmail: email,
            memberNickName: nickName,
            memberPwd: pw
          });
  
          if (response.status === 201) {
            alert('회원가입이 완료되었습니다.');
            closeModal(); // 모달 닫기
          } else {
            alert('회원가입에 실패하였습니다.');
          }
        } catch (error) {
          console.error('회원가입 오류:', error);
          alert('회원가입 중 오류가 발생하였습니다.');
        }
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    } else {
      alert('입력 정보를 확인해주세요.');
    }
  };
  

  useEffect(() => {
    if(emailValid && pwValid && email && !emailError && !nickNameError && pw === confirmPassword && passwordsMatch) {
      setNotAllow(false);
      return;
    } else {
      setNotAllow(true);
    }  
  }, [emailValid, pwValid, email, emailError, nickNameError, pw, confirmPassword, passwordsMatch]);

  const handleCloseModal = (e) => {
    if (e.target.classList.contains('registPage')) {
      closeModal();
    }
  };


  return (
    <div className={`registPage ${isOpen ? 'show' : ''}`} onClick={handleCloseModal}>
  <div className="registPage" style={{ display: isOpen ? "block" : "none" }}>
        <div className="registModal">
          <div className="titleWrap">
            SIGN UP
          </div>
          <div className="contentWrap">
            <div className="inputTitle">이메일 주소</div>
            <div className="inputWrap">
              <input 
                type='text'
                className='input' 
                placeholder='test@gmail.com' 
                value={email} 
                onChange={handleEmail}/>
                <button onClick={checkEmailDuplication}>중복확인</button>
            </div>
            <div className="errorMessageWrap">
              {
                !emailValid && email.length > 0 && (
                  <div>올바른 이메일을 입력해주세요.</div>
                )
              }
              {emailError && (
                <div>{emailError}</div>
              )}
            </div>
            <div style={{ marginTop: "20px" }}className="inputTitle">비밀번호</div>
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
            <div style={{ marginTop: "20px" }}className="inputTitle" >비밀번호 확인</div>
            <div className="inputWrap">
              <input
                type='password' 
                className='input' 
                placeholder='비밀번호 확인'
                value={confirmPassword}
                onChange={handleConfirmPassword}/>
            </div>  
            <div className="errorMessageWrap">
              {
                !passwordsMatch && confirmPassword.length > 0 && (
                  <div>비밀번호가 일치하지 않습니다.</div>
                )
              }
            </div>
            <div style={{ marginTop: "20px" }}className="inputTitle" >닉네임</div>
            <div className="inputWrap">
              <input
                type='text' 
                className='input' 
                placeholder='닉네임을 입력하세요'
                value={nickName}
                onChange={handelNickName}/>
                <button onClick={checkNicknameDuplication}>중복확인</button>
            </div>  
            <div className="errorMessageWrap">
              {nickNameError && (
                <div>{nickNameError}</div>
              )}
            </div>
            </div>
          <div style={{ marginTop: "-30px" }}>
            <button onClick={onClickConfirmButton} disabled={notAllow} className='loginButton'> 
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

export default RegistModal


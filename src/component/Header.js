import { React, useEffect, useState } from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import '../bootstrap.css';
import { Link } from 'react-router-dom';
import RegistModal from './Modal/RegistModal';
import LoginModal from './Modal/LoginModal';
import Cookies from 'js-cookie';


function Header() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistOpen, setIsRegistOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openRegistModal = () => setIsRegistOpen(true);
  const closeRegistModal = () => setIsRegistOpen(false);

  useEffect(() => {
    const storedLoggedIn = Cookies.get('isLoggedIn');

    if (storedLoggedIn === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }  
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
    closeLoginModal(); 
    Cookies.set('isLoggedIn', 'true', { expires: 1 });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove('isLoggedIn');
    // 쿠키삭제 처리
  };

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     // 사용자가 로그인한 경우, 서버에서 사용자 정보를 가져오는 예시
  //     axios.get('http://127.0.0.1:8080/api/v1/members/info') // API 엔드포인트는 실제로 존재하는 엔드포인트로 대체해야 합니다.
  //       .then((response) => {
  //         const member = response.data;
  //         setMemberNickname(member.memberNickname);
  //       })
  //       .catch((error) => {
  //         console.error('사용자 정보를 가져오는 데 실패했습니다.', error);
  //       });
  //   }
  // }, [isLoggedIn]);

  
  return(
    <header>
      <Navbar bg="light" expand="lg">
        <Container className="headerBar">
          <Navbar.Brand><Link to="/" className="nav-link">TOONMAKER</Link></Navbar.Brand>
          <div class="dropdown">
            <button className="dropbtn mainButton">웹소설</button>
            <div className="dropdown-content">
              <a href="/novel-main">캐릭터 만들기</a>
              <a href="/novel-illustration">삽화 만들기</a>
            </div>
          </div>
					<div className="mainButton"><Link to="/webtoon">웹툰 그림체 학습</Link></div>
            <Nav className="ml-auto">
              {isLoggedIn ? ( 
                // 로그인 된 상태의 화면
                <>
                  <span className="header-welcome">'{Cookies.get('memberNickName')}'님 반갑습니다!!</span>
                  <button onClick={handleLogout} className="header-button">LOGOUT</button>
                </>  
              ) : (
                // 로그인 안 된 상태 화면
              <>  
                <button onClick={openLoginModal} className="header-button">LOGIN</button>
                {isLoginOpen && (<LoginModal isOpen={isLoginOpen} closeModal={closeLoginModal} onLoginSuccess={handleLoginSuccess}/>)}
                <button onClick={openRegistModal} className="header-button">SIGN UP</button>
                {isRegistOpen && (<RegistModal isOpen={isRegistOpen} closeModal={closeRegistModal}/>)}
              </>
              )}
                <form className="d-flex">
                    <input class="form-control me-sm-2 search" type="search" placeholder="Search"/>
                    <button type="submit" className="">Search</button>
                </form>
            </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
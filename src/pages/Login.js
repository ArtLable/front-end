import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Login = () => {

    const formRef = useRef();
    const [cookies, setCookie] = useCookies(['accessToken']);
    const navigate = useNavigate();

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

  return (
    <form ref={formRef} onSubmit={login}>
			<input type="text" name="id" placeholder="id" required />
			<input type="password" name="passWord" placeholder="passWord" required />
			<input type="submit"></input>
		</form>
  )
}

export default Login;


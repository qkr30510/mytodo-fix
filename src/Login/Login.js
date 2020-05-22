import React, { useState, useCallback } from 'react';
import {Link, Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';


const LoginWrap = styled.div`
  max-width: 550px;
  width: 80vw;
  height: calc(100vh - 2rem);
  margin: auto;
  box-sizing: border-box;

  h2 {
    margin: 2rem 1rem;
  }
`;

const moveId = css`
  top: -20px;
  font-size: 0.8rem;
  color: #474545;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
`;
const Form = styled.form`
  width: 100%;
  height: 50%;
  border: 3px solid #222;
  padding: 4rem;
  box-sizing: border-box;

  div {
    position: relative;
    margin-bottom: 3rem;
  }

  input {
    padding: 0.5rem;
    width: 90%;
    box-sizing: border-box;
    background: none;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #222;
    outline: none;
    font-size: 1rem;
  }
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: #8f8f8f;
  z-index: -1;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  ${(props) => props.bvalue === true && moveId}
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    width: 40%;
    padding: 0.5rem;
    display: block;
    color: #333;
    text-decoration: none;
    text-align: center;
    border:1px solid gray;
    background: #eee; 

  }
`;

const Login = ({match, location}) => {

  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  // state
  // const Login =localStorage.getItem("isLogin")
  const isLogin = (localStorage.getItem("isLogin")==='true');

  const idOnChange = useCallback((e) => {
    setIdValue(e.target.value);
  }, []);

  const pwOnChange = useCallback((e) => {
    setPwValue(e.target.value);
  }, []);

  // 아이디 체크
  const IDvalueCheck = useCallback(
    (e) => {
      const bvalue = false;
      if (idValue) {
        return !bvalue;
      }
    },
    [idValue],
  );

  // 비밀번호 체크
  const PWvalueCheck = useCallback(
    (e) => {
      const bvalue = false;

      if (pwValue) {
        return !bvalue;
      }
    },
    [pwValue],
  );
  // const isLogin = false;
  const onClick = () => {
    const getId = localStorage.getItem('아이디');
    const getpw = localStorage.getItem('비밀번호');
    localStorage.setItem('isLogin', true);
    // console.log(iiisLogin)

    if (!idValue || !pwValue) {
      alert('입력을 해주세요');
    } else if (idValue !== getId) {
      alert('아이디가 잘못되었습니다.');
    } else if (pwValue !== getpw) {
      alert('비밀번호가 잘못되었습니다.');
    }
   
  };
  return (
    // <div>Login Page</div>
    <>    
      <LoginWrap >
        <h2>Welcome</h2>
        <Form>
          <div>
            <input type="text" value={idValue} onChange={idOnChange} id="ID" />
            <Span bvalue={IDvalueCheck()}>아이디를 입력해주세요</Span>
          </div>
          <div>
            <input type="password" value={pwValue} onChange={pwOnChange} />
            <Span bvalue={PWvalueCheck()}>비밀번호를 입력해주세요</Span>
          </div>
          <ButtonWrap>
            <Link to={{pathname:'/sign'}}>회원가입하러 가기</Link>
            <button type='button' onClick={onClick}>확인</button>             
          </ButtonWrap>
          {/* {isLogin && <Redirect to={{pathname:'/todo', state:{isLogin : true}}}/>} */}
          {isLogin &&<Redirect to="/todo"/>}
        </Form>
      </LoginWrap>
    </>
  );
};
export default Login;

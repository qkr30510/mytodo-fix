import React, { useState, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const LoginWrap = styled.div`
  width: 535px;
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
  button {
    width: 50%;
    background: #000;
    color: #fff;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: #8f8f8f;
  z-index: -1;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  ${(props) => props.moveplceholder === true && moveId}
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
    border: 1px solid gray;
    background: #eee;
  }
`;

const Login = ({ history }) => {
  let IdInput = React.createRef();
  let PasswordInput = React.createRef();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [moveid, setMoveid] = useState(false);
  const [movepw, setMovepw] = useState(false);

  const getId = localStorage.getItem('아이디');
  const getpw = localStorage.getItem('비밀번호');

  const idOnChange = useCallback((e) => {
    setIdValue(e.target.value);
  }, []);

  const pwOnChange = useCallback((e) => {
    setPwValue(e.target.value);
  }, []);

  const onClick = () => {
    if (!idValue || !pwValue) {
      alert('입력을 해주세요');
    } else if (idValue !== getId || pwValue !== getpw) {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    } else if (idValue === getId || pwValue === getpw) {
      alert(getId + '님 환영합니다');
      console.log(idValue, pwValue);
      setIsLogin(true);
    }
  };

  // 마우스 이벤트
  function handleClick() {
    IdInput.current.focus();
    setMoveid(true);
  }

  function handleClickPw() {
    PasswordInput.current.focus();
    setMovepw(true);
  }

  const move = useCallback(
    (e) => {
      const moveplceholder = false;
      if (moveid) {
        return !moveplceholder;
      }
    },
    [moveid],
  );

  const movePw = useCallback(
    (e) => {
      const moveplceholder = false;

      if (movepw) {
        return !moveplceholder;
      }
    },
    [movepw],
  );

  return (
    <Wrap>
      <LoginWrap>
        <h2>Welcome</h2>
        <Form>
          <div>
            <input
              type="text"
              value={idValue}
              onChange={idOnChange}
              id="ID"
              autoComplete="off"
              ref={IdInput}
              onClick={handleClick}
            />
            <Span moveplceholder={move()}>아이디를 입력해주세요</Span>
          </div>
          <div>
            <input
              type="password"
              value={pwValue}
              onChange={pwOnChange}
              autoComplete="off"
              onClick={handleClickPw}
              ref={PasswordInput}
            />
            <Span moveplceholder={movePw()}>비밀번호를 입력해주세요</Span>
          </div>
          <ButtonWrap>
            <Link to={{ pathname: '/sign' }}>회원가입하러 가기</Link>
            <button type="button" onClick={onClick}>
              확인
            </button>
          </ButtonWrap>
          {isLogin && (
            <Redirect
              to={{ pathname: '/todo', state: { id: idValue, pw: pwValue } }}
            />
          )}
        </Form>
      </LoginWrap>
    </Wrap>
  );
};

export default Login;

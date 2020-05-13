import React, { useState, useCallback } from 'react';
import styled, { css} from 'styled-components';

const LoginWrap = styled.div`
  max-width:550px;
  width: 80vw;
  height: 100vw;
  margin: auto;

  h2 {
    margin: 2rem 1rem;
  }
`;

const moveId = css`
  top:-20px;
  font-size:0.8rem;
  color:#474545;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
`
const Form = styled.form`
  width: 100%;
  height: 50%;
  border: 3px solid #222;  
  padding:4rem;
  box-sizing:border-box;

  div{
    position:relative;
    margin-bottom: 3rem;
  }

  input {
    padding: 0.5rem;
    width:90%;
    box-sizing:border-box;
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
  position:absolute;
  top:0;
  left:0;
  color:#8F8F8F;
  z-index:-1;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  ${(props) => props.bvalue === true && moveId}
`;

const ButtonWrap = styled.div`
  width: 100%;
  display:flex;
  justify-content:space-between;

  button {
    width: 40%;
    padding:0.5rem;
  }
`;



const Login = () => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');


  const idOnChange = useCallback((e) => {
    setIdValue(e.target.value);
  }, []);


  const pwOnChange = useCallback((e) => {
    setPwValue(e.target.value);
  }, []);

  // 아이디 체크
  const IDvalueCheck = useCallback((e)=>{
    const bvalue = false;
    if(idValue){
      return !bvalue;
  }
  },[idValue])
  
   // 비밀번호 체크
   const PWvalueCheck = useCallback((e)=>{
    const bvalue = false;

    if(pwValue){
      return !bvalue;
  }
  },[pwValue])
  
const onClick = () => {
  const getId = localStorage.getItem('아이디');
  const getpw = localStorage.getItem('비밀번호');

  if(!idValue || !pwValue){
    alert("입력을 해주세요")
  }else if(idValue !== getId  ){
    alert("아이디가 잘못되었습니다.")
  }else if(pwValue !== getpw){
    alert("비밀번호가 잘못되었습니다.")
  }
  //여기서 페이지 이동 
}

  return (
    <>
      <LoginWrap>
        <h2>Login</h2>
        <Form>
          <div>
            <input type="text" value={idValue} onChange={idOnChange} />
            <Span bvalue={IDvalueCheck()}>아이디를 입력해주세요</Span>
          </div>
          <div>
            <input type="password" value={pwValue} onChange={pwOnChange} />
            <Span bvalue={PWvalueCheck()}>비밀번호를 입력해주세요</Span>
          </div>
          <ButtonWrap>
            <button type="button">회원가입하러가기</button>            
            <button type="button" onClick={onClick} >확인</button>
          </ButtonWrap>
        </Form>
      </LoginWrap>
    </>
  );
};
export default Login;

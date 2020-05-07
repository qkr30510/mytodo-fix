import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
/* props로 넣어준 값을 직접 전달해줄 수 있습니다. */
/* background:${(props) => props.color || '#fff'}; */
padding: 1rem;
max-width:650px;
margin:auto;
border:2px solid #000;
box-sizing:border-box;

h3{
text-align: center;
padding-bottom:6%;
border-bottom:1px solid #222;
font-size:1.8rem;
color:#333;

}
form{
  width:100%;
}

`;

const DivWrap = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid #666;
  padding: 15px 10px; 
  box-sizing:border-box;
  /* border: 3px solid #f66969 */

  &:last-child {
    border-bottom: none;
    display: flex;
    justify-content: center;

    button {
      padding: 0.5rem;
      font-size: 1.1rem;
      font-weight: bold;
      background: #ddd;
      color: #777;
      &:last-child {
        background: #777;
        color: #eee;
        margin-left: 1rem;
      }
    }
  }

  label {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  input[type='text'] {
    padding: 5px;
    background: none;
    border: none;
    outline: none;
    width: 70%;
    text-align: left;
  }

  textarea {
    width: 100%;
  }
`;

const CheckBoxWrap = styled.div`
  display: flex;
  justify-content: start;
  width: auto;

  label {
    font-weight: normal;
  }
`;

const Button = styled.button`
  width: calc(100% - 74%);
  background: #f2f2f2;
  border-radius: 25px;
  border: none;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const SignInsert = ({ introduce, onChange }) => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [sePwValue, seSetPwValue] = useState('');

  const year = () => {
    const y = [];
    for (let i = 1920; i < 2020; i++) {
      y.push(<option>{i}</option>);
    }
    return y;
  };

  const month = () => {
    const m = [];
    for (let i = 1; i < 13; i++) {
      m.push(<option>{i}</option>);
    }
    return m;
  };

  const day = () => {
    const d = [];
    for (let i = 1; i < 32; i++) {
      d.push(<option>{i}</option>);
    }
    return d;
  };

  // 아이디 유효성 체크
  const regTypeId = /^[a-zA-Z0-9]*$/;
  if (!regTypeId.test(idValue)) {
    //console.log("아이디엔 영문과 숫자만 가능합니다.",idValue)
  }

  const checkNum = idValue.search(/[0-9]/g);
  const checkEng = idValue.search(/[a-z]/gi);
  if (checkNum < 0 || checkEng < 0) {
    // console.log('아이디는 영문과 숫자가 혼용되어야합니다.',idValue)
  }

  const checkid = useCallback((e) => {
    setIdValue(e.target.value);
    // 정규표현식으로 체크 먼저하고 setValue로 넣기!!
  }, []);

  // 비밀번호 유효성 체크

  // const regps = /^(?=.*[a-zA-Z])(?=.*[!@#$%])(?=.*[0-9])$/
  // if (!regps.test(pwValue)){
  //   console.log("아이디엔 영문과 숫자만 가능합니다.",pwValue)
  // }

  const checkPwNum = pwValue.search(/[0-9]/g);
  const checkPwEng = pwValue.search(/[a-z]/gi);
  const checkPwSpe = pwValue.search(/[~!@#$%^&*()_+|<>?:{}]/g);
  //console.log("z",checkPwNum)

  if (checkPwNum < 0 || checkPwEng < 0 || checkPwSpe < 0) {
    console.log(
      '비밀번호는 영문과 숫자, 특수문자가 혼용되어야합니다.',
      pwValue,
    );
  }

  // 비밀번호 중복체크
  const secheckPw = useCallback ((e) => {
    seSetPwValue(e.target.value)    
  },[])
  
  if (pwValue !== sePwValue) {
    console.log('비밀번호를 다시 확인해주세요',sePwValue);
  }


  const checkPw = useCallback((e) => {
    setPwValue(e.target.value);
  }, []);

  return (
    <Box>
      <h3>회원가입</h3>
      <form>
        <DivWrap>
          <label>아이디</label>
          <input
            type="text"
            name="writeId"
            value={idValue}
            onChange={checkid}
            placeholder="영문과 숫자를 결합해주세요."
            id="userid"
            autoComplete="off"
          />
          <Button>중복체크</Button>
        </DivWrap>
        <DivWrap>
          <label>비밀번호</label>
          <input
            type="text"
            name="password"
            value={pwValue}
            onChange={checkPw}
            placeholder="6자리 이상 영문+숫자+특수문자"
            autoComplete="off"
          />
        </DivWrap>
        <DivWrap>
          <label>비밀번호 확인</label>
          <input
            type="text"
            name="checkpw"
            value={sePwValue}
            onChange={secheckPw}
            autocomplete="off"
          />
        </DivWrap>
        <DivWrap>
          <label>성별</label>
          <input type="radio" name="gender" value="man" />
          남자
          <input type="radio" name="gender" value="woman" />
          여자
        </DivWrap>
        <DivWrap>
          <label>생년월일</label>
          <select name="year" id="year">
            {year()}
          </select>
          <select name="month" id="month">
            {month()}
          </select>
          <select name="day" id="day">
            {day()}
          </select>
        </DivWrap>
        <DivWrap>
          <label>취미</label>
          <CheckBoxWrap>
            <label>
              <input type="checkbox" name="exercise" />
              운동
            </label>
            <label>
              <input type="checkbox" name="game" />
              게임
            </label>
            <label>
              <input type="checkbox" name="movie" />
              영화보기
            </label>
          </CheckBoxWrap>
        </DivWrap>
        <DivWrap>
          <label>자기소개</label>
          <textarea
            name="introduce"
            id=""
            cols="30"
            rows="10"
            value={introduce}
            onChange={onChange}
          ></textarea>
        </DivWrap>
        <DivWrap>
          <Button>취소</Button>
          <Button>가입완료</Button>
        </DivWrap>
      </form>
    </Box>
  );
};

export default SignInsert;

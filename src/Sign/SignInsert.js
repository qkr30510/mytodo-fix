import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
/* props로 넣어준 값을 직접 전달해줄 수 있습니다. */
/* background:${(props) => props.color || '#fff'}; */
padding: 1rem;
max-width:650px;
height:100vh;
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
  border-bottom:1px solid #666;
  
  label {
    display: block;    
    width: 100%;
    margin-bottom:0.3rem;
    font-weight:bold;
   
  }
  input[type='text'] {
      padding: 5px;
      background: none;
      border:none;
      outline: none;
      width: 70%;
      text-align: left;
    }
    
    
    textarea {
      width: 100%;
    }

`;

const CheckBoxWrap = styled.div`
display:flex;
justify-content:start;
width:auto;

label{
  font-weight:normal;

}
`

const Button = styled.button`
        width: calc(100% - 74%);
      background:#f2f2f2;
      border-radius:25px;
      border:none;
      padding:0.2rem;
      margin-bottom:0.3rem;
`


// const Select = () => {
//   const y = '';

//  for (var y = 0; y<2020; y++){
//         y += ''
//  }
// }
const SignInsert = ({ writeId, password, checkpw, introduce, onChange }) => {
  return (
    <Box>
      <h3>회원가입</h3>
      <form>
        <DivWrap>
          <label>아이디</label>
          <input
            type="text"
            name="writeId"
            value={writeId}
            onChange={onChange}
            placeholder="10자리 이상 영문+숫자+특수문자가 결합"
          />
          <Button>중복체크</Button>
        </DivWrap>
        <DivWrap>
          <label>비밀번호</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="12자리 이상 영문+숫자+특수문자2개이상
            "
          />
        </DivWrap>
        <DivWrap>
          <label>비밀번호 확인</label>
          <input
            type="text"
            name="checkpw"
            value={checkpw}
            onChange={onChange}
          />
        </DivWrap>
        <DivWrap>
          <label>성별</label>
          <input type="radio" name="gender" value="man"/>
          남자
          <input type="radio" name="gender" value="woman" />
          여자
        </DivWrap>
        <DivWrap>
          <label>생년월일</label>
          <select name="year" id="year">
            <option value="1999">1999</option>
          </select>
          <select name="month" id="month">
            <option value="12">12</option>
          </select>
          <select name="day" id="day">
            <option value="1">1</option>
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

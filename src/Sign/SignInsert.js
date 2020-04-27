import React from 'react';
import styled, {css} from 'styled-components'

const Box = styled.div`
/* props로 넣어준 값을 직접 전달해줄 수 있습니다. */
/* background:${props => props.color || '#fff'}; */
padding: 1rem;
display:flex;
justify-content:center;
align-content:space-around;
max-width:650px;
height:100vh;
margin:auto;
border:2px solid #000;
box-sizing:border-box;
padding-top:calc(100vh - 50%);

form{
  width:100%;
}

`;

const DivWrap = styled.div`
  border-bottom:1px solid #666;
  width:100%;
  text-align:center;
  margin-bottom:1.5rem;

  label{
    display:flex;
    justify-content:space-between;

    input[type=text]{
      padding:5px;
      background:none;
      border:none;
      outline:none;
      width:60%;
      text-align:right;
      
    }
    textarea{
      width:80%;
    }
  }
`

const SignInsert = ({ writeId, password, checkpw, introduce, onChange }) => {
 
  return (
    <Box >
      <form>
        <DivWrap>
          <label>
            아이디:
            <input
              type="text"
              name="writeId"
              value={writeId}
              onChange={onChange}
            />
            <button>중복체크</button>
          </label>
        </DivWrap>
        <DivWrap>
          <label>
            비밀번호:
            <input
              type="text"
              name="password"
              value={password}
              onChange={onChange}
            />
          </label>
        </DivWrap>
        <DivWrap>
          <label>
            비밀번호 확인:
            <input
              type="text"
              name="checkpw"
              value={checkpw}
              onChange={onChange}
            />
          </label>
        </DivWrap>
        <DivWrap>
          <label>
            성별:
            <input type="radio" name="gender" value="man" />남자
            <input type="radio" name="gender" value="woman" />여자
          </label>
        </DivWrap>
        <DivWrap>
          <label>
            생년월일:
            <select name="year" id="year">
              <option value="1999">1999</option>
            </select>
            <select name="month" id="month">
              <option value="12">12</option>
            </select>
            <select name="day" id="day">
              <option value="1">1</option>
            </select>
          </label>
        </DivWrap>
        <DivWrap>
          <label>
            취미:
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
          </label>
        </DivWrap>
        <DivWrap>
          <label>
            자기소개:
            <textarea
              name="introduce"
              id=""
              cols="30"
              rows="10"
              value={introduce}
              onChange={onChange}
            ></textarea>
          </label>
        </DivWrap>
        <DivWrap>
          <button>취소</button>
          <button>가입완료</button>
        </DivWrap>
      </form>
    </Box>
  );
};

export default SignInsert;

import React, { useState, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
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

`;

const Form = styled.form`
  width:100%;
`

const RedId = css`
  border: 3px solid #f66969;
`;

const countColor = css`
  color: red;
  font-weight: bold;
`;

const DivWrap = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid #666;
  padding: 15px 10px;
  box-sizing: border-box;
  /* border: 3px solid #f66969 */
  position: relative;
  ${(props) => props.error === true && RedId}

  &:last-child {
    border-bottom: none;
    display: flex;
    justify-content: center;

    button {
      padding: 0.5rem;
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
  p {
    position: absolute;
    top: 0.8rem;
    right: 5rem;
    font-size: 0.8rem;
    font-style: italic;
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
  input[type='password'] {
    padding: 5px;
    background: none;
    border: none;
    outline: none;
    width: 70%;
    text-align: left;
  }
  textarea {
    width: 100%;
    padding:0.5rem;
  }
  a {
    display: block;
    width: calc(100% - 74%);
    background: #f2f2f2;
    border-radius: 25px;
    border: none;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    text-align: center;
    font-size: 1.1rem;
    background: #ddd;
    color: #777;
    margin-right:1rem;
  }
`;

const CountSpan = styled.span`
  color: blue;
  ${(props) => props.countcolorchx !== true && countColor}
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
  background: #777;
  color: #eee;
  width: calc(100% - 74%);
  border-radius: 25px;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
  border:none;
  cursor: pointer;
  outline:none;
  
`;

const SignInsert = ({history}) => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [sePwValue, seSetPwValue] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [duperr,setDuperr] = useState(false);
  const [isSign, setIsSign] = useState(false);
  
  const year = () => {
    const y = [];
    for (let i = 1920; i < 2020; i++) {
      y.push(<option key={y}>{i}</option>);
    }
    return y;
  };

  const month = () => {
    const m = [];
    for (let i = 1; i < 13; i++) {
      m.push(<option key={m}>{i}</option>);
    }
    return m;
  };

  const day = () => {
    const d = [];
    for (let i = 1; i < 32; i++) {
      d.push(<option key={d}>{i}</option>);
    }
    return d;
  };

  // 아이디 유효성 체크

  const regTypeId = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{2,}$/;

  const checkid = useCallback((e) => {
    setIdValue(e.target.value);
  }, []);

  const error = false;

  const errorID = useCallback(
    (e) => {
      const error = true;
      // 아이디 유효성 체크
      if (!idValue) {
        return !error;
      } else if (!regTypeId.test(idValue)){         
          //console.log("아이디엔 영문과 숫자만 가능합니다.",idValue);
          return error;
        }
       return false;
    },
    [idValue,regTypeId],
  );


  // 아이디 중복 체크
  
  const duplicate = useCallback(() => {
    const prevId = localStorage.getItem('아이디');
    //console.log(localStorage.getItem('아이디'));
   
       
      if (prevId === idValue) {
        alert('중복된 아이디입니다.');           
        setDuperr(false);
      //  console.log(setDuperr)
        return false;        
      } else {
        alert('사용할수 있는 아이디입니다.');        
        setDuperr(true);
     //   console.log(setDuperr)        
      }  
          
  },[idValue]);

  // 비밀번호 숫자
  const countpw = pwValue.length;
  const count = useCallback(
    (e) => {
      if (countpw > 5 && countpw < 11) {
        const countcolorchx = true;
        return countcolorchx;
      }
    },
    [countpw],
  );

  // 비밀번호 유효성 체크
  const checkPw = useCallback((e) => {
    setPwValue(e.target.value);
  }, []);

  const errorPw = useCallback(
    (e) => {
      const error = true;
      if (!pwValue) {
        return !error;
      } else {
        const regps = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
        if (!regps.test(pwValue)) {
          //console.log("비번",pwValue)
          return error;
        }
      }
    },
    [pwValue],
  );

  // 비밀번호 중복체크

  const secheckPw = useCallback((e) => {
    seSetPwValue(e.target.value);
  }, []);

  const errorSPw = useCallback(
    (e) => {
      const error = true;
      if (!sePwValue) {
        return !error;
      } else {
        if (pwValue !== sePwValue) {
          // console.log('비밀번호를 다시 확인해주세요',sePwValue);
          return error;
        }
      }
    },
    [pwValue, sePwValue],
  );
  const checkintro = useCallback((e) => {
    setIntroduce(e.target.value);
  }, []);

  const onClick = useCallback(() => {
 
    if (!idValue || errorID(()=>error) ) {
      //console.log(errorID(()=>error))
      alert('아이디를 다시 확인해주세요.');
      return false;
    } else if(!duperr){
      //console.log(duplicate(()=>duperr))
      alert('아이디 중복확인을 해주세요.');
      return false;    
      // props 값으로 체크하장!   
    }  else if (!pwValue||errorPw(()=>error)) {
     // console.log(errorPw(()=>error))
      alert('비밀번호를 다시 확인해주세요.');
      return false;
    } else if (!sePwValue || errorSPw(()=>error)) {
     // console.log(errorSPw(()=>error))
      alert('비밀번호 확인을 다시 확인해주세요.');      
      return false;
    } else if (!introduce) {
      alert('자기소개를 입력해주세요.');
      return false;
    } else {
      alert('환영합니다.' + idValue + '님');
      localStorage.setItem('아이디', idValue );
      localStorage.setItem('비밀번호', pwValue);


      setIsSign(true);
      
    }    
  }, [idValue, errorID, duperr, pwValue, errorPw, sePwValue, errorSPw, introduce, error]);
  
  return (
    <>
      
      <Box>
        <h3>회원가입</h3>
        <Form>
          <DivWrap error={errorID()}>
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
            <Button type="button" onClick={duplicate}>
              중복체크
            </Button>
          </DivWrap>
          <DivWrap error={errorPw()}>
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              value={pwValue}
              onChange={checkPw}
              placeholder="6자리 이상 10자리 이하 영문+숫자+특수문자"
              autoComplete="off"
            />
            <p>
              현재 입력된 글자 수:
              <CountSpan countcolorchx={count()}>{countpw}</CountSpan>
            </p>
          </DivWrap>
          <DivWrap error={errorSPw()}>
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="checkpw"
              value={sePwValue}
              onChange={secheckPw}
              autoComplete="off"
            />
          </DivWrap>
          <DivWrap>
            <label>성별</label>
            <input type="radio" name="gender" value="man" defaultChecked />
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
                <input type="checkbox" name="exercise" defaultChecked />
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
              <label>
                <input type="checkbox" name="shopping" />
                쇼핑
              </label>
              <label>
                <input type="checkbox" name="etc" />
                기타
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
              onChange={checkintro}
            ></textarea>
          </DivWrap>
          <DivWrap>
            <Link to='/'>취소</Link>
            <Button type="button" onClick={onClick}>
              가입완료
            </Button>            
          </DivWrap> 
          {isSign && <Redirect to={{pathname:'/todo', state:{id:idValue, pw:pwValue}}}/>}                  
        </Form>
      </Box>
    </>
  );
};

export default SignInsert

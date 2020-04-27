import React from 'react';

const SignInsert = ({ writeId, password, checkpw, introduce, onChange }) => {
 
  return (
    <>
      <form>
        <div>
          <label>
            아이디
            <input
              type="text"
              name="writeId"
              value={writeId}
              onChange={onChange}
            />
            <button>중복체크</button>
          </label>
        </div>
        <div>
          <label>
            비밀번호
            <input
              type="text"
              name="password"
              value={password}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            비밀번호확인
            <input
              type="text"
              name="checkpw"
              value={checkpw}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            성별
            <input type="radio" name="gender" value="man" />
            남자
            <input type="radio" name="gender" value="woman" />
            여자
          </label>
        </div>
        <div>
          <label>
            생년월일
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
        </div>
        <div>
          <label>
            취미
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
        </div>
        <div>
          <label>
            자기소개
            <textarea
              name="introduce"
              id=""
              cols="30"
              rows="10"
              value={introduce}
              onChange={onChange}
            ></textarea>
          </label>
        </div>
        <div>
          <button>취소</button>
          <button>가입완료</button>
        </div>
      </form>
    </>
  );
};

export default SignInsert;

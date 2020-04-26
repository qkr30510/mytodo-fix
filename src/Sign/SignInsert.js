import React from 'react';

const SignInsert = ({ writeId, password, checkpw, introduce,  onChange }) => {
  return (
    <>
      <form>
        <div>
          <span>아이디</span>
          <input type="text" name="writeId" value={writeId} onChange={onChange} />
          <button>중복체크</button>
        </div>
        <div>
          <span>비밀번호</span>
          <input type="text" name="password" value={password} onChange={onChange} />
        </div>
        <div>
          <span>비밀번호확인</span>
          <input type="text" name="checkpw" value={checkpw} onChange={onChange} />
        </div>
        <div>
          <span>성별</span>
          <input type="radio" name="gender" value="man" />
          남자
          <input type="radio" name="gender" value="woman" />
          여자
        </div>
        {/* <div><span>생년월일</span><selet><option value="5"></option></selet></div>
                <div><span>취미</span><inupt type="checkbox" name="운동" />운동 <label htmlFor="운동"></label></div> */}
        <div>
          <span>자기소개</span>
          <textarea
            name="introduce"
            id=""
            cols="30"
            rows="10"
            value={introduce}
            onChange={onChange}
          ></textarea>
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

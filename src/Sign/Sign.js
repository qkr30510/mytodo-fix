import React from 'react';
import useInput from '../hook/useInput';
import SignInsert from './SignInsert';

const Sign = () => {
  const [{ writeId, password, checkpw, introduce }, onChange] = useInput({
    writeId: '',
    password: '',
    checkpw: '',
    introduce: '',
  });

  return (
    <>
      <SignInsert
        id={writeId}
        password={password}
        checkpw={checkpw}
        introduce={introduce}
        onChange={onChange}
      ></SignInsert>
    </>
  );
};

export default Sign;

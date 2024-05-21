import React, { useRef, useEffect } from "react";

const UseRefLogin = () => {
  const inputRef = useRef();

  useEffect(() => {
    //input 요소에 자동으로 커서가 가게끔
    inputRef.current.focus();
  }, []);
  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}`);
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default UseRefLogin;

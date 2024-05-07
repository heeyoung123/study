import React, { useState } from "react";
import UseEffect from "./hooks/UseEffect.jsx";
import UseEffectCleanUp from "./hooks/UseEffectCleanUp.jsx";

// UseState
//콜백함수로 넣으면 처음 랜더링할때 한번만 불려와짐
const heavyWork = () => {
  return ["홍길동", "김민수"];
};

const UseState = () => {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpload = () => {
    setNames((prevState) => {
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
      <br />
      <UseEffect />
      <br />
      <div>
        <span>useEffect 타이머 예제</span>
        <UseEffectCleanUp />
      </div>
    </div>
  );
};
//names배열을 돌면서 아이템 하나하나마다 p태그를 만들어준거임
//map을 써서 출력할려면 key값이 꼭 있어야함

//input안에 값이 변경될때마다 handleInputChange라는 함수가 동작함
export default UseState;

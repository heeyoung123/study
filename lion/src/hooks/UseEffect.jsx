import React, { useState, useEffect } from "react";

//마운트되었을떼, 업데이트되었을때,언마운트되었을때 특정 작업을 처리할 코드를 실행시키고 싶을때 useEffect사용
const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  //handlecountUpdate함수
  const handlecountUpdate = () => {
    setCount(count + 1);
  };

  //handleinputChange함수
  const handleinputChange = (e) => {
    setName(e.target.value);
  };

  //렌더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log("렌더링됨");
  });

  //처음 렌더링됐을 때만 실행시키고 싶다
  useEffect(() => {
    console.log("처음만 생김");
  }, []);

  //input값이 변경될때마다 랜더링되니까 useEffect가 계속 실행됨 -> 놉
  //count가 달라질때마다 useEffect가 실행되도록 하고 싶다면?
  useEffect(() => {
    console.log("count바뀜");
  }, [count]);

  //name이 변경될떼마다
  useEffect(() => {
    console.log("name바뀜");
  }, [name]);

  return (
    <div>
      <button onClick={handlecountUpdate}>update</button>
      <span>count: {count}</span>
      {/* input 안에 값이 바뀔때마다 handlecountUpadate이벤트가 실행됨*/}
      <input type="text" value={name} onChange={handleinputChange} />
      <span>name: {name}</span>
    </div>
  );
};
export default UseEffect;

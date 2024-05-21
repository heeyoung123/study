import React, { useState, useRef } from "react";

const UseRef2 = () => {
  const [render, setRender] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;
  const increasecountRef = () => {
    countRef.current = countRef.current + 1;
  };
  const increasecountVar = () => {
    countVar = countVar + 1;
  };
  const startrender = () => {
    return setRender(render + 1);
  };
  const printResults = () => {
    console.log(`ref:${countRef.current}, var : ${countVar}`);
  };
  return (
    <div>
      <p>Ref :{countRef.current}</p>
      <p>Var:{countVar}</p>
      <button onClick={increasecountRef}>ref올려</button>
      <button onClick={increasecountVar}>var올려</button>
      <button onClick={startrender}>랜더링</button>
      <button onClick={printResults}>ref var 값 출력</button>
    </div>
  );
};

export default UseRef2;

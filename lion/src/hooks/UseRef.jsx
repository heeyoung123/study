//const ref=useRef(value)
//useRef를 부르면 ref오브젝트를 반환해줌
//ref 오브젝트는 {current:value} , 수정이 가능함
/*const ref = useRef("hi")를
ref.current = "hello 로 바꾸면 {current:"hello"}가 됨*/
/*어떠한 값을 저장해두는 저장공간으로 사용 state를 변경하면 자동으로 렌더링이 되고 함수형 컴포넌트는 리렌더링이되면 함수가 다시 불려지는거기때문에 내부 변수들이 다 초기화됨
이게 불필요할때가 있어서 useRef를사용함
useRef 사용하는 이유 1. ref안에 있는 값을 변경해도 컴포넌트는 리렌더링되지않음, 컴포넌트가 아무리 렌더링이 되어도 ref안에 있는 값은 변화되지않고 유지됨
2.ref를 통해 실제적으로 dom요소에 접근해서 여러가지를 할 수 있음 ex)input요소를 클릭하지않아도 자동적으로 focus를 줄 수 있음*/

import React, { useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const increaseCountState = () => {
    setCount(count + 1);
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    //화면상에서는 안나타나는데 버튼 누르면 올라가고 있긴함
    //ref를 누르다가 state버튼을 누르면 리렌더링되면서 ref값도 반영됨
  };
  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>state 올려</button>
      <button onClick={increaseCountRef}>ref 올려</button>
    </div>
  );
};

export default UseRef;

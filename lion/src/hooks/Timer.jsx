import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머돌아가는중");
    }, 1000);

    //타이머 종료
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <span>타이머를 시작.콘솔을 보셈</span>
    </div>
  );
};

export default Timer;

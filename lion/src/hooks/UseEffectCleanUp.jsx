import React, { useState } from "react";
import Timer from "./Timer";

const CleanUp = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      {/*버튼이 클릭될때마다 showTimer가 false면 true로 바껴야함*/}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
};

export default CleanUp;

import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const onChange = (e) => setInput(e.target.value);
  return (
    <>
      <input
        onChange={onChange}
        placeholder="문자를 입력해주세요"
        value={input}
      />
      {input}
    </>
  );
};
export default App;

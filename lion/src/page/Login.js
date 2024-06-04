import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
  });
  const [response, setResponse] = useState(null);
  const { id, password } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        form
      );
      console.log(response.data);
      setResponse(response);
    } catch (error) {
      console.log("전송실패");
    }
  };

  return (
    <div>
      <form onSubmit={onClick}>
        <label>
          아이디
          <input name="id" value={id} onChange={onChange} />
        </label>
        <label>
          비밀번호
          <input name="password" value={password} onChange={onChange} />
        </label>
        <button type="submit">로그인</button>
      </form>
      {response && <p>{response.data.message}</p>}
      {response && response.status === 200 && <p>로그인성공</p>}
    </div>
  );
};
export default Login;

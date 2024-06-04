import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//1. cors 설정 백(진짜 cors 열기) 프론트(proxy 서버를 두면 좋음) 둘 다 하는것이 좋음
//2. async/await나 .then()을 이용하여 Promise 비동기 통신을 받을 수 있어야 함
//3. 실제 데이터가 들어있는 response.data 객체를 렌더링 시킬 수 있어야 함
const Register = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
    name: "",
  });
  const [response, setResponse] = useState(null);
  const { id, password, name } = form;
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/register",
        form
      );
      setResponse(response);
      console.log(response.data);
    } catch (error) {
      console.log("전송실패");
    }
  };
  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={onSubmit}>
        <label>
          이름
          <input name="name" value={name} onChange={onChange} />
        </label>
        <label>
          아이디
          <input name="id" value={id} onChange={onChange} />
        </label>
        <label>
          비밀번호
          <input name="password" value={password} onChange={onChange} />
        </label>
        <button>등록</button>
      </form>
      {response && <p>{response.data.message}</p>}
      {response && response.status === 200 && (
        <button onClick={onClick}>로그인 페이지로 이동</button>
      )}
    </div>
  );
};

export default Register;

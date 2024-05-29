import { INCREMENT, counterActions } from "../store/index";
//import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch(); //액션을 도와주게하는 훅
  const counter = useSelector((state) => state.counter); //전역상태를 갖고오기
  const show = useSelector((state) => state.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment()); //counterActions 안에 있는 increment 함수를 사용하겠다
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); //5가 action에 들어가서 action.payload로 나옴
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <div>{show ? "True" : "False"}</div>
      {<div>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment +5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

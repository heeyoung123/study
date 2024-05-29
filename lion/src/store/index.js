import React from "react";
import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
//리덕스
//const [data,setData]=useState()
//data는 store, setData는 reducer
//동기적으로 동작함, 차레대로 동작한다는 뜻<->비동기, 여러개의 작업을 동시에 수행
//그래서 통신작업 안됨 ajax같은
//reduce에 들어가는건 action임
const initialState = { counter: 0, showCounter: true }; // 초기값 설정
const counterSlice = createSlice({
  name: "counter", //리듀서 이름
  initialState: initialState, //초기값 할당
  reducers: {
    increment(state) {
      //액션
      //원래 리덕스의 상태를 이용하려면 불변성을 이용하여 객체를 복사후 값을 증가시켰지만
      //자동으로 리덕스 툴킷은 객체를 자동으로 복사를 해준다.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const store = configureStore({
  //reduce에 있는걸 병합해서 store에 저장하겠다
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;

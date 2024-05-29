import React from "react";
//import UseState from "./hooks/UseState.jsx";
//import UseEffectCleanUp from "./hooks/UseEffectCleanUp.jsx";
//import UseRef from "./hooks/UseRef.jsx";
//import UseRef2 from "./hooks/UseRef2.jsx";
import Router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import Counter from "./components/counter.jsx";

const App = () => {
  return (
    <div>
      {/* <RouterProvider router={Router} /> */}
      <Counter />
    </div>
  );
};
export default App;

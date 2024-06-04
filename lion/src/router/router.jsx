import { Outlet, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Test = lazy(() => import("../page/Login"));
const Register = lazy(() => import("../page/Register"));

function Loading() {
  return <div>로딩중입니다.</div>;
}

const Router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loading />}>
        <header>
          <h1 style={{ display: "flex", justifyContent: "center" }}>안녕</h1>
        </header>
        <main>
          <Outlet />
        </main>
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Test />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Router;

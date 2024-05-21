import { Outlet, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Test = lazy(() => import("./Test"));

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
        path: "test",
        element: (
          <Suspense fallback={<Loading />}>
            <Test />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Router;

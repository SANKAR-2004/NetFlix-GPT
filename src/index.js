import { createRoot } from "react-dom/client";
import Body from "./Body";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router";
import Browse from "./Browse";
import Login from "./Login";
import { Provider } from "react-redux";
import AppStore from "../ReduxStore/AppStore";
import Demo from "./Demo";
import GptPage from "./GptPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/gpt-suggestion",
        element: <GptPage />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={AppStore}>
    <RouterProvider router={AppRouter} />
  </Provider>
);

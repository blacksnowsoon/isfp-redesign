import React from "react";
import "./CSS/index.css";
import ReactDOM from "react-dom/client";

import App, { loader as appLoader } from "./App";
import {loader as productLoader } from './Pages/Product'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import { Error } from "./Error";
import Home from "./Home/Home";
import Product  from "./Pages/Product";
import Projects, {loader as projectsLoader} from "./Pages/Projects";
import Project, { loader as projectLoader} from "./Pages/Project"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "products/*",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "projects",
        loader: projectsLoader,
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: ":id",
            element: <Project/>,
            loader: projectLoader,
          }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

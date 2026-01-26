import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

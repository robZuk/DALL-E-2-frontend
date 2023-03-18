import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.scss";
import GenerateImage from "./pages/GenerateImage";
import EditImage from "./pages/EditImage";
import VariationImage from "./pages/VariationImage";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/generate-image",
        element: <GenerateImage />,
      },
      {
        path: "/edit-image",
        element: <EditImage />,
      },
      {
        path: "/variation-image",
        element: <VariationImage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

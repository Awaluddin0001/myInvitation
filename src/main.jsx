import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import WeddingInvitation from "./pages/WeddingInvitation.jsx";
import EncryptName from "./pages/EncryptName.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/weddinginvitation/:name",
    element: <WeddingInvitation />,
  },
  {
    path: "/namaUndangan",
    element: <EncryptName />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

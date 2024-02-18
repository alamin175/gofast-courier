import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AuthContext from "./AuthContext/AuthContext.jsx";
import "./index.css";
import { router } from "./Routes/Routes.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <div className="mx-auto max-w-screen-xl">
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </div>
      </QueryClientProvider>
    </AuthContext>
  </React.StrictMode>
);

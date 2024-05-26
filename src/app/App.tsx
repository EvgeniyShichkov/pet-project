import React, { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { Routers } from "./createBrowserRouter";
import "./App.scss";

interface IAppProps {}

export const App: FC<IAppProps> = (props) => {
  return (
    <div className="single-app">
      <RouterProvider router={Routers} />
    </div>
  );
};

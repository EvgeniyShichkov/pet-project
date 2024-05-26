import React, { FC } from "react";
import { NavBar } from "./navbar/NavBar";
import ErrorBoundary from "../helpers/error/ErrorBoundary";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Content } from "./content/Content";

interface ILayoutProps {}

export const Layout: FC<ILayoutProps> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ErrorBoundary>
        <NavBar />
        <Content style={{ flexGrow: 1 }}>
          <Outlet />
        </Content>
        <Footer style={{ flexShrink: 0 }} />
      </ErrorBoundary>
    </div>
  );
};

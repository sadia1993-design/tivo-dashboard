import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../Sidebar";
import Header from "./../Header";
import Footer from "./../Footer";

const Layout = () => {
  return (
    <>
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <Sidebar />
        <div className="w-full flex flex-col justify-between	">
          <Header />
          <div className="flex-1">{<Outlet />}</div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

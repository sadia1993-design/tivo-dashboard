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
        <div className="p-4">
          <Header />
          <div>{<Outlet />}</div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

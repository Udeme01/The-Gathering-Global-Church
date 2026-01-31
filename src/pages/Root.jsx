import React from "react";
import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTopOnNavigate from "../components/common/ScrollToTopOnNavigate";
import ScrollToTop from "../components/common/ScrollToTop";

const Root = () => {
  return (
    <>
      <ScrollToTopOnNavigate />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;

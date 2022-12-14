import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DetailOne from "../pages/DetailOne";
import DetailTwo from "../pages/DetailTwo";
import Certification from "../pages/Certification";
import Header from "../common/Header";
import Layout from "../common/Layout";
import Footer from "../common/Footer";
import Kakao from "../components/kakao/Kakao";
import Notfound from "../pages/Notfound";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/detail" element={<DetailOne />} />
          <Route path="/detail/:id" element={<DetailTwo />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/oauth/callback/kakao" element={<Kakao />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

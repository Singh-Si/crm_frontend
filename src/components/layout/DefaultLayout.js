import React, { useEffect, useState } from "react";
import SideBar from '../../components/SideBar'
// import {
//   AppContent,
//   AppSidebar,
//   AppFooter,
//   AppHeader,
// } from "../components/index";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/PreLoader";
import TopHeader from "../../components/TopHeader";
import Dashboard from "../../views/Dashboard";
import PreLoader from "../../components/PreLoader";
import LogoHeader from "../LogoHeader";

const DefaultLayout = () => {
  const { loading, userInfo, error } = useSelector((state) => state.userInfo);
  // useEffect(()=>{
  // setUserToken(userInfo?.userInfo)
  // },[])

  return (
    <div>
      {loading ? (
        <PreLoader />
      ) : ((userInfo?.token) || (userInfo?.verify)) ? (
        <>
          <div id="main-wrapper">
            <LogoHeader />
            <TopHeader />
            <SideBar />

            <div className="content-body">
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        window.location.replace("/user/login")
      )}
    </div>
  );
};

export default DefaultLayout;

import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const PageLayout = () => {
    return (
        <>
          <Header/>
            <Outlet />
        </>
    );
};

export default PageLayout;

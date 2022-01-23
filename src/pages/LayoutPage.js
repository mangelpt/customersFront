import React from 'react';
import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return (
        <div>
            this is a page layout
            <Outlet />
        </div>
    );
};

export default PageLayout;

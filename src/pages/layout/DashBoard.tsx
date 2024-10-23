/** @format */

import React from "react";

const DashBoard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className='h-screen'>{children}</div>;
};

export default DashBoard;

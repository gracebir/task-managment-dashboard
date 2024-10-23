/** @format */

import React from "react";
import ProtectedPage from "../../components/protectedRoute";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <ProtectedPage>
            <div className='h-screen'>{children}</div>
        </ProtectedPage>
    );
};

export default DefaultLayout;

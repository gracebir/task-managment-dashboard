/** @format */

import React from "react";
import ProtectedPage from "../../components/protectedRoute";
import Header from "../../components/common/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <ProtectedPage>
            <div className='flex bg-primary dark:bg-primary-dark'>
                <Sidebar isOpen={false} />
                <div className='h-svh overflow-y-auto overflow-x-hidden flex-1'>
                    <Header />
                    <div className='px-6 py-4 text-gray-700 dark:text-gray-200'>
                        {children}
                    </div>
                </div>
            </div>
        </ProtectedPage>
    );
};

export default DefaultLayout;

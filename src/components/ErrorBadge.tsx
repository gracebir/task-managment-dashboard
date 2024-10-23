/** @format */

import React from "react";

const ErrorBadge: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className='px-6 bg-red-100 color-[#d32f2f] rounded-md text-xs mt-2.5 font-semibold error-animation text-red-400 flex justify-center items-center gap-2 w-full py-3'>
            <span className='text-sm text-center'>{text}</span>
        </div>
    );
};

export default ErrorBadge;

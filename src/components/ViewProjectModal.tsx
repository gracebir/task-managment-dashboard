/** @format */

import React from "react";

const ViewProjectModal: React.FC<{
    setIsView: React.Dispatch<React.SetStateAction<boolean>>;
    isView: boolean;
}> = ({ isView, setIsView }) => {
    return (
        <div
            className={`w-full absolute h-svh top-0 duration-300 transition-transform ${
                isView ? `translate-x-0` : `translate-x-full`
            } right-0 z-50 flex justify-end`}
        >
            <div className='w-[25%] h-full bg-white dark:bg-secondary shadow-lg'>
                <div>
                    <button
                        onClick={() => setIsView(false)}
                        className='hover:underline'
                        type='button'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewProjectModal;

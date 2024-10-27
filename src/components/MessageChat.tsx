/** @format */

import React from "react";

const MessageChat: React.FC<{
    isSender: boolean;
    text: string;
    name: string;
    timer: string;
}> = ({ isSender, name, text, timer }) => {
    return (
        <div className={`flex flex-col`}>
            <div
                className={`flex ${
                    isSender ? `flex-row-reverse` : `flex-row`
                } items-center gap-2`}
            >
                <div className='h-9 w-9 rounded-full'>
                    <img
                        src={`https://avatar.iran.liara.run/username?username=${name}`}
                        alt='avatar'
                    />
                </div>
                <p className='text-xs text-gray-400'>
                    <span className='text-gray-600 font-semibold dark:text-gray-200'>
                        {name}
                    </span>{" "}
                    {timer}
                </p>
            </div>
            <div
                className={`px-6 py-2 ml-7 ${
                    isSender ? "rounded-l-lg" : "rounded-r-lg"
                } rounded-b-lg text-gray-700 dark:text-gray-500 max-w-[80%] bg-gray-200 dark:bg-primary-dark `}
            >
                <p className='text-xs'>{text}</p>
            </div>
        </div>
    );
};

export default MessageChat;

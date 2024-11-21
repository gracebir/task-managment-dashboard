/** @format */

import React from "react";
import { BiSend } from "react-icons/bi";
import { CgMoreVertical } from "react-icons/cg";
import MessageChat from "./MessageChat";

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
                    <div className='w-full overflow-hidden'>
                        {/* Project Overview Section */}
                        <div className='p-4 border-b border-gray-200 dark:border-gray-900'>
                            <div className='flex justify-between items-center mb-4'>
                                <h2 className='text-lg font-semibold'>
                                    Project Overview
                                </h2>
                                <button
                                    onClick={() => setIsView(false)}
                                    className='text-sm text-blue-600 hover:text-blue-800'
                                >
                                    See all
                                </button>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex items-center text-sm text-gray-600'>
                                    <svg
                                        className='w-4 h-4 mr-2'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                                        />
                                    </svg>
                                    Timeline: Apr 14 - May 7
                                </div>
                                <div className='flex items-center text-sm text-gray-600'>
                                    <svg
                                        className='w-4 h-4 mr-2'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                                        />
                                    </svg>
                                    Team:
                                    <div className='flex -space-x-1 ml-2'>
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <img
                                                key={i}
                                                className='w-6 h-6 rounded-full border-2 border-white'
                                                src={`https://avatar.iran.liara.run/username?username=Scott+Wilson`}
                                                alt={`Team member ${i}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className='flex items-center text-sm text-gray-600'>
                                    <svg
                                        className='w-4 h-4 mr-2'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                                        />
                                    </svg>
                                    Status: In Progress
                                </div>
                            </div>
                        </div>

                        {/* TeamChat Section */}
                        <div className='p-4 flex flex-col h-[83svh]'>
                            <div className='flex justify-between items-center mb-4'>
                                <h2 className='text-lg font-semibold'>
                                    TeamChat
                                </h2>
                                <div className='flex items-center'>
                                    <span className='text-xs text-gray-500 mr-2'>
                                        24 April 2023
                                    </span>
                                    <button className='text-gray-400 hover:text-gray-600'>
                                        <CgMoreVertical className='w-4 h-4' />
                                    </button>
                                </div>
                            </div>

                            <div className='space-y-4 flex-1  overflow-y-auto'>
                                <MessageChat
                                    isSender={false}
                                    timer={"12:05"}
                                    name={"Didas Mbazi"}
                                    text='Bonjour le Gars'
                                />
                                <MessageChat
                                    isSender={false}
                                    timer={"15:05"}
                                    name={"Ali Huda"}
                                    text='Oui salut, avez de mise jour sur le projet?'
                                />
                                <MessageChat
                                    isSender={true}
                                    timer={"12:05"}
                                    name={"Charlie Path"}
                                    text='Merci bcp de me repondre'
                                />
                            </div>

                            {/* Message input */}
                            <div className='mt-4 relative'>
                                <input
                                    type='text'
                                    placeholder='Your message...'
                                    className='w-full  border rounded-full py-2 pl-4 pr-12 focus:outline-none focus:border-blue-500'
                                />
                                <div className='absolute right-0 top-0 mt-2 mr-2 flex items-center'>
                                    <button className='text-blue-500 hover:text-blue-600'>
                                        <BiSend className='w-5 h-5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProjectModal;

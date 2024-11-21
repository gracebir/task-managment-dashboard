/** @format */

import React from "react";
import { InputType } from "../../types/input";

const TextInput: React.FC<InputType> = ({
    label,
    type,
    placeholder,
    touched,
    handleChange,
    error,
    name,
    value,
    handleBlur,
}) => {
    return (
        <div className='mb-4'>
            <label className='mb-2.5 block font-semibold text-sm text-black dark:text-white'>
                {label}
            </label>
            <div className='relative'>
                <input
                    type={type}
                    value={value}
                    name={name}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className='w-full rounded-lg text-sm border border-stroke bg-transparent py-2 px-4 text-black outline-none focus:border-secondary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                />
            </div>
            {error && touched ? (
                <span className='text-xs text-red-400 italic'>{error}</span>
            ) : null}
        </div>
    );
};

export default TextInput;

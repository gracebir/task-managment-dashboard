/** @format */

export type InputType = {
    label: string;
    placeholder: string;
    error: string;
    touched: boolean;
    name: string;
    value: string | number;
    type: React.HTMLInputTypeAttribute;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
};

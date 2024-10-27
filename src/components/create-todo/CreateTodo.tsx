/** @format */

import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import TextInput from "../common/TextInput";
import { useCreateTodoMutation } from "../../lib/slices/todoSlice";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import ErrorBadge from "../ErrorBadge";
import { Dispatch, SetStateAction } from "react";

function CreateTodo({
    setIsModal,
}: {
    setIsModal: Dispatch<SetStateAction<boolean>>;
}) {
    const [t] = useTranslation("global");
    const user = useSelector((state: RootState) => state.auth.user);
    const [createTask, { isLoading, isError }] = useCreateTodoMutation();
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues: {
                todo: "",
            },
            onSubmit: async (value) => {
                try {
                    const newValue = {
                        ...value,
                        completed: false,
                        userId: user?.id!,
                    };
                    const response = await createTask(newValue).unwrap();
                    if (response) {
                        toast.success(t("task.todo.form.success"));
                    }
                } catch (e) {
                    console.log(e);
                }
            },
        });
    return (
        <div className='absolute top-0 h-svh w-full bottom-0 flex items-center right-0 inset-0 backdrop-blur-md  z-40'>
            <div className='max-w-sm w-full mx-auto bg-white shadow-md dark:bg-gray-900 rounded-md'>
                <div className='p-4 border-b border-gray-200 flex justify-between items-center dark:border-gray-700'>
                    <h1 className='text-base lg:text-lg font-bold'>
                        {t("task.todo.form.title")}
                    </h1>
                    <button onClick={() => setIsModal(false)} className=''>
                        <IoClose size={20} />
                    </button>
                </div>
                <div className='px-4 py-6'>
                    <form
                        className='flex flex-col gap-4'
                        onSubmit={handleSubmit}
                    >
                        <TextInput
                            handleBlur={handleBlur}
                            error={errors.todo!}
                            touched={touched.todo!}
                            value={values.todo}
                            name='todo'
                            placeholder={t("task.todo.form.placeholder")}
                            handleChange={handleChange}
                            label={t("task.todo.form.label")}
                            type='text'
                        />
                        <button
                            disabled={isLoading}
                            className='text-sm py-2 w-full rounded-md hover:bg-slate-700 duration-300 font-semibold bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800'
                            type='submit'
                        >
                            {isLoading ? (
                                <CircularProgress
                                    size={20}
                                    style={{ color: "#334155" }}
                                />
                            ) : (
                                t("task.todo.form.button")
                            )}
                        </button>
                        {isError && (
                            <ErrorBadge text={t("task.todo.form.error")} />
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateTodo;

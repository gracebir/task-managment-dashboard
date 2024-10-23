/** @format */

import { useFormik } from "formik";
import TextInput from "../components/common/TextInput";
import { useTranslation } from "react-i18next";
import { setToken, setUser, useSignInMutation } from "../lib/slices/authSlice";
import { authSchema } from "../utils/validations/authValidation";
import ErrorBadge from "../components/ErrorBadge";
import { toast } from "react-toastify";
import { AppDispatch } from "../lib/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [t] = useTranslation("global");
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const [signin, { isLoading, isError }] = useSignInMutation();
    const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
        useFormik({
            initialValues: {
                username: "",
                password: "",
            },
            validationSchema: authSchema,
            onSubmit: async (value) => {
                try {
                    const response = await signin(value).unwrap();
                    if (response) {
                        toast.success(t("login.success"));
                        dispatch(setToken(response.accessToken));
                        dispatch(setUser(response));
                        navigate("/");
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        });
    return (
        <div className='min-h-svh flex items-center'>
            <div className='max-w-sm mx-auto flex flex-col gap-6 w-full'>
                <h1 className='text-center font-bold text-lg lg:text-xl'>
                    {t("login.title")}
                </h1>
                <form
                    className='w-full flex duration-300 transition-all ease-in-out flex-col gap-2 px-8 py-6 border-gray-200 rounded-md shadow-md border dark:border-gray-100'
                    onSubmit={handleSubmit}
                >
                    <div>
                        <TextInput
                            handleBlur={handleBlur}
                            error={errors.username!}
                            touched={touched.username!}
                            value={values.username}
                            name='username'
                            placeholder='e.g. john'
                            handleChange={handleChange}
                            label={t("login.username")}
                            type='text'
                        />
                        <TextInput
                            handleBlur={handleBlur}
                            error={errors.password!}
                            touched={touched.password!}
                            value={values.password}
                            name='password'
                            placeholder='********'
                            handleChange={handleChange}
                            label='Password'
                            type='password'
                        />
                    </div>
                    <button
                        disabled={isLoading}
                        className='text-sm py-2 w-full rounded-md hover:bg-slate-700 duration-300 font-semibold bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800'
                        type='submit'
                    >
                        {isLoading ? `loading ...` : t("login.button")}
                    </button>
                    {isError && <ErrorBadge text={t("login.error")} />}
                </form>
            </div>
        </div>
    );
};

export default Login;

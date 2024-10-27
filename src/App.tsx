/** @format */

import { Route, Routes } from "react-router-dom";
import PageTitle from "./components/PageTitle";
import { useTranslation } from "react-i18next";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TaskManagment from "./pages/TaskManagment";
import NotFound from "./pages/NotFound";

/** @format */
function App() {
    const [t] = useTranslation("global");
    return (
        <div className='font-montserrat'>
            <Routes>
                <Route
                    path='/login'
                    element={
                        <>
                            <PageTitle title={t("pageTitle.login")} />
                            <Login />
                        </>
                    }
                />
                <Route
                    path='/'
                    element={
                        <>
                            <PageTitle title={t("pageTitle.home")} />
                            <Home />
                        </>
                    }
                />
                <Route
                    path='/tasks'
                    element={
                        <>
                            <PageTitle title={t("pageTitle.home")} />
                            <TaskManagment />
                        </>
                    }
                />
                <Route
                    path='*'
                    element={
                        <>
                            <PageTitle title={t("pageTitle.home")} />
                            <NotFound />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;

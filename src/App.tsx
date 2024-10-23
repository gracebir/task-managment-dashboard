/** @format */

import { Route, Routes } from "react-router-dom";
import PageTitle from "./components/PageTitle";
import { useTranslation } from "react-i18next";
import Login from "./pages/Login";
import Home from "./pages/Home";

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
            </Routes>
        </div>
    );
}

export default App;

/** @format */

import { Route, Routes } from "react-router-dom";
import PageTitle from "./components/PageTitle";
import { useTranslation } from "react-i18next";
import Login from "./pages/Login";

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
            </Routes>
        </div>
    );
}

export default App;

/** @format */

import CardDataStats from "../components/cards/CardDataStats";
import DefaultLayout from "./layout/DefaultLayout";
import { BiTask } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { SiTask } from "react-icons/si";
import { AiOutlineUser } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import ChartTaks from "../components/charts/ChartTasks";
import HistogramChart from "../components/charts/Histogram";

function Home() {
    const [t] = useTranslation("global");
    return (
        <DefaultLayout>
            <main className='flex flex-col gap-4'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
                    <CardDataStats
                        title={t("home.stat.total")}
                        total='130'
                        rate='0.43%'
                        levelUp
                    >
                        <BiTask size={22} />
                    </CardDataStats>
                    <CardDataStats
                        title={t("home.stat.completed")}
                        total='70'
                        rate='4.35%'
                        levelUp
                    >
                        <MdTaskAlt size={22} />
                    </CardDataStats>
                    <CardDataStats
                        title={t("home.stat.progress")}
                        total='2.450'
                        rate='2.59%'
                        levelUp
                    >
                        <SiTask size={22} />
                    </CardDataStats>
                    <CardDataStats
                        title={t("home.stat.users")}
                        total='3.456'
                        rate='0.95%'
                        levelDown
                    >
                        <AiOutlineUser size={22} />
                    </CardDataStats>
                </div>
                <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 lg:mt-7 lg:gap-7'>
                    <ChartTaks />
                    <HistogramChart />
                </div>
            </main>
        </DefaultLayout>
    );
}

export default Home;

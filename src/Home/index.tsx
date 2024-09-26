import { motion } from "framer-motion";
import { SelectedPage } from '@/Shared/types';
import PortfolioFlair from "./portfolioFlair";
import Description from "./description";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    return (
        <><motion.section id="home" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <div className=" w-full h-auto flex flex-col">
                {/* container */}
                <div className="w-5/6 flex flex-auto">
                    {/* top 2/3 */}
                    <div className=" ml-auto h-[500px] flex">
                        <div className="border-r-2 border-black h-full flex flex-col justify-end">
                            {/* left */}
                            <div className="w-full flex justify-center items-center align-center">
                                <p className="writing-vertical text-sm px-[8px]">WEB DEVELOPMENT</p>
                            </div>
                        </div>
                        <div className="h-full flex flex-col justify-end">
                            {/* right */}
                            <PortfolioFlair />
                        </div>
                    </div>
                </div>
                <div className="w-5/6 flex items-end justify-end">
                    {/* bottom */}
                    <p className="text-center text-3xl w-[112px] pt-4 font-nothing pr-2"></p>
                </div>
            </div>
            <div className="w-5/6 flex mx-auto ">
                <Description />
            </div>

        </motion.section>
        </>
    )
}

export default Home
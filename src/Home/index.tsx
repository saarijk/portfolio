import { motion } from "framer-motion";
import { SelectedPage } from '@/Shared/types';
import Description from "./description";
import PortfolioFlair from "./portfolioFlair";

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
                    <div className=" ml-auto h-[500px] sm:flex hidden">
                        <PortfolioFlair />
                    </div>
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
import { motion, useAnimate, stagger } from "framer-motion";
import { SelectedPage } from '@/Shared/types';
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const greetingText = "Hello and welcome!";
    const homeText = "I'm Katariina, an aspiring web developer with a flair for crafting engaging and responsive user interfaces.";
    const words = homeText.split(" ");
    const textWithBold = words.map((word, index) => {
        if (word === "Katariina,") {
            return <span key={index}><b>Katariina</b>,</span>;
        } else {
            return word + " ";
        }
    });

    return (
        <>
            <motion.section id="home" onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className="h-[100vh] relative">
                <div className="w-full h-auto flex flex-col ">
                    {/* container */}
                    <div className="w-5/6 flex flex-auto ">
                        {/* top 2/3 */}
                        <div className=" ml-auto h-[600px] flex ">
                            <div className="border-r-2 border-black h-full flex flex-col justify-end">
                                {/* left */}
                                <div className="w-full flex justify-center items-center align-center">
                                    <p className="writing-vertical text-sm px-[8px]">WEB DEVELOPMENT</p>
                                </div>
                            </div>
                            <div className="h-full flex flex-col justify-end">
                                {/* right */}
                                <div className="w-full justify-center pl-2 items-center align-center grid grid-cols-3">
                                    <div>
                                        <p className="font-bold text-4xl px-1 text-center">P</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl px-1 text-center">O</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl px-1 text-center">R</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl px-1 text-center">T</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl px-1 text-center">F</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl px-1 text-center">O</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl px-1 text-center">L</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl px-1 text-center">I</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl px-1 text-center">O</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/6 flex items-end justify-end ">
                        <p className="text-center text-3xl w-[112px] pt-4 font-nothing pr-2"></p>
                    </div>
                </div>
                {/* text elements */}
                <div className="w-5/6 flex mx-auto h-auto items-center mt-12">
                    <div className="text-black font-roboto w-2/3">
                        <motion.h1 animate={{ opacity: 1 }}
                            className="text-6xl"
                            initial={{ opacity: 0 }}
                            transition={{ duration: 2, delay: 0.5, staggerChildren: 0.2 }}
                            style={{ marginBottom: "1rem" }}>{greetingText}</motion.h1>
                        <br />
                        <motion.h2
                            className="text-3xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, delay: 1, staggerChildren: 0.5 }}
                        >
                            {textWithBold}
                        </motion.h2>
                        <motion.p
                            animate={{ opacity: 1 }}
                            className="text-xl"
                            initial={{ opacity: 0 }}
                            transition={{ duration: 2, delay: 1.5, staggerChildren: 0.2 }}
                            style={{ marginBottom: "1rem" }}
                        ><br />If you like what you see, feel free to <span className="text-2xl hover:border-b-[1px] border-b-[1px] hover:border-black border-transparent transition duration-500 font-bold hover-underline-animation"><a href="https://www.linkedin.com/in/katariina-saari-2b5812188/">connect with me on LinkedIn</a></span></motion.p>
                    </div>
                </div>
                {/* scroll down */}
                <motion.div
                animate={{ opacity: 1}}
                initial={{opacity: 0}}
                transition={{ duration: 2, delay: 4}}
                 className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-[200px]">
                    <ChevronDoubleDownIcon className="h-8 w-8 animate-bounce" />
                </motion.div>

            </motion.section>
        </>
    )
}

export default Home
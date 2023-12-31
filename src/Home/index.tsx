import React from 'react';
import { motion } from "framer-motion";
import { SelectedPage } from '@/Shared/types';

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
                <div className="w-5/6 flex items-end justify-end">
                    {/* bottom */}
                    <p className="text-center text-3xl w-[112px] pt-4 font-nothing pr-2">by Kat</p>
                </div>
        </div>
            <div className="w-5/6 flex mx-auto ">
                <div className="text-black text-2xl font-roboto w-1/2">
                    <h1>Hello and welcome!<br/ ><br/ >I'm <span className="font-bold text-4xl">Katariina</span>, an aspiring web developer with a flair for crafting engaging and responsive user interfaces.</h1>
                    <p className="text-2xl"><br/>If you like what you see, feel free to <span className="hover:border-b-[1px] hover:border-black border-transparent transition duration-500 font-bold"><a href="https://www.linkedin.com/in/katariina-saari-2b5812188/">connect with me on LinkedIn</a></span></p>
                </div>
            </div>

            </motion.section>
    </>
  )
}

export default Home
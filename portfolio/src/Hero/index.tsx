import React from 'react';
import reactSvg from "@/assets/react.svg";
import { SelectedPage } from '@/Shared/types';
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Hero = ({ setSelectedPage }: Props) => {
  return (
    <>
        <section id="home" className="h-[100vh] w-full bg-slate-200">
            {/* container */}
            <motion.div 
                className="pt-[25%] w-5/6 mx-auto flex"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* left side */}
                <div className="w-1/2">
                    {/* title */}
                    <h1 className="text-6xl font-bold">PORTFOLIO</h1>
                    {/* description */}
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                {/* right side */}
                <div className="w-1/2 mx-auto flex items-center justify-center">
                    <img src={reactSvg} className="w-[200px]"/>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default Hero
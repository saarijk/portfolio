import React from 'react';
import { motion } from "framer-motion";
import { SelectedPage } from '@/Shared/types';
import Cyber from "@/assets/blueParticles.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact2 = ({ setSelectedPage }: Props) => {
  return (
    <> 
        <section id="contact">
            <motion.div className="h-[50vh] w-full bg-darkBlue flex align-center justify-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
                style={{
                    backgroundImage: `url(${Cyber})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                  }}
            >
                <div className="w-5/6 pt-[100px] z-10">
                    <div className="rounded-lg"
                        style={{
                            WebkitBackdropFilter: 'blur(8px)',
                            backdropFilter: 'blur(8px)',
                            backgroundColor: `rgba(0, 0, 0, 0.6)`,
                        }}>
                    <h1 className="text-slate-300 text-4xl font-bold pt-8 px-8 mb-[-25px]"
                    >
                        CONTACT</h1>
                    <br/><p 
                        className="p-6 text-slate-300">If you have any inquiries or would like to connect, I encourage you to reach out to me through LinkedIn. I value professional communication and find LinkedIn to be an effective platform for connecting with peers and collaborators.

                    <br/><br/>Feel free to send me a message or connect with me on LinkedIn, and I'll be delighted to engage in meaningful conversations about projects, opportunities, or shared interests.

                    <br/><br/><button className="text-blue-300 font-normal hover:text-white transition duration-500"><a href="https://www.linkedin.com/in/katariina-saari-2b5812188/">Connect with me on LinkedIn</a></button></p>
                    </div>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default Contact2
import React from 'react';
import { motion } from "framer-motion";
import { SelectedPage } from '@/Shared/types';
import Cyber from "@/assets/particles22.jpg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <> 
        <section id="contact">
            <motion.div className="h-[50vh] w-full bg-black flex align-center justify-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
                style={{
                    backgroundImage: `url(${Cyber})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                  }}
            >
                <div className="w-5/6 pt-10 z-10">
                    <h1 className="text-slate-300 text-4xl font-bold p-3">CONTACT</h1>
                    <br/><p className="p-3 bg-black bg-opacity-60 text-slate-300">If you have any inquiries or would like to connect, I encourage you to reach out to me through LinkedIn. I value professional communication and find LinkedIn to be an effective platform for connecting with peers and collaborators.

                    <br/><br/>Feel free to send me a message or connect with me on LinkedIn, and I'll be delighted to engage in meaningful conversations about projects, opportunities, or shared interests.

                    <br/><br/><button className="text-blue-300 font-normal"><a href="https://www.linkedin.com/in/katariina-saari-2b5812188/">Connect with me on LinkedIn</a></button></p>

                </div>
            </motion.div>
        </section>
    </>
  )
}

export default Contact
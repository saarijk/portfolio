import React from 'react'
import { motion } from "framer-motion";
import { SelectedPage } from '@/Shared/types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <>
    <section id="contact">
        {/* container */}
        <motion.div className="w-full h-[40vh] flex" onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
            {/* left side */}
            <div className="w-1/5  h-full border-r-2 border-black">
                <p></p>
            </div>
            {/* right side */}
            <div className="w-full font-roboto relative">
                <div className="p-12">
                    <h1 className="font-bold text-4xl pb-6 mt-[40px]">CONTACT ME</h1>
                    <p className="text-lg pb-6 w-4/5">If you have any inquiries or would like to connect, I encourage you to reach out to me through LinkedIn. 

                    <br/><br/>Feel free to send me a message or connect with me there, and I'll be delighted to engage in meaningful conversations 
                    about projects, opportunities, or shared interests :)</p>
                    <button className="text-black font-bold hover:text-black transition duration-500"><a href="https://www.linkedin.com/in/katariina-saari-2b5812188/">Connect with me on LinkedIn</a></button>
                </div>
                <div className="text-sm absolute bottom-0 right-0">
                    {/* bottom right / footer */}
                    <p>
                        &copy; 2023 Katariina Saari. All Rights Reserved.
                    </p>
                </div>
            </div>
        </motion.div>
        </section>
    </>
  )
}

export default Contact
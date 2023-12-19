import React from 'react';
import { motion } from "framer-motion";
import { SelectedPage } from '@/Shared/types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <> 
        <section id="contact">
            <motion.div className="h-[100vh] w-full bg-slate-200"
                onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
            >
                Contact
            </motion.div>
        </section>
    </>
  )
}

export default Contact
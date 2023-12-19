import React from 'react';
import { motion } from "framer-motion";
import { SelectedPage } from '@/Shared/types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Skills = ({ setSelectedPage }: Props) => {
  return (
    <> 
        <section id="skills">
            <motion.div className="h-[100vh] w-full bg-slate-200"
                onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
            >
                Skills
            </motion.div>
        </section>
    </>
  )
}

export default Skills
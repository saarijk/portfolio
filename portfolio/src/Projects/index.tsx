import React from 'react';
import { motion } from "framer-motion";
import { SelectedPage } from '@/Shared/types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <> 
        <section id="projects">
            <motion.div className="h-[80vh] w-full bg-darkBlue flex align-center justify-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
            >
                <div className="w-5/6 pt-10">
                    <h1 className="text-slate-300 text-4xl font-bold">PROJECTS</h1>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default Projects
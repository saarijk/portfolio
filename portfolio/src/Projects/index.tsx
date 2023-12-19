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
            <motion.div className="h-[100vh] w-full bg-slate-200"
                onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
            >
                Projects
            </motion.div>
        </section>
    </>
  )
}

export default Projects
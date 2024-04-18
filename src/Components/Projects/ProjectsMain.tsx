import React from 'react';
import ProjectCard from './ProjectCard';
import gymPic from '@/assets/screencaps/g1.png';
import arneuraPic from '@/assets/screencaps/a1.png';
import seePic from '@/assets/screencaps/sl1.png';
import { motion } from 'framer-motion';
import { SelectedPage } from '@/Shared/types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ProjectsMain = ({ setSelectedPage }: Props) => {
    return (
        <>
            {/* showcase two latest projects, link to all */}
            {/* container */}
            <motion.div className="flex flex-col h-[50vh] w-full items-center justify-center font-roboto"
                id="projects"
                onViewportEnter={() => {
                    setSelectedPage(SelectedPage.Projects);
                }}>
                {/* content */}
                <div className="w-5/6 flex flex-col justify-center">
                    <h1 className="text-right text-black text-4xl font-bold mb-4">PROJECTS</h1>
                    <div className="w-full flex gap-4 mb-4 items-center justify-center ">
                        {/* latest projects */}
                        <div className="flex gap-4">
                            <ProjectCard projectName='GymApp' thumbnail={gymPic} />
                            <ProjectCard projectName='Arneura' thumbnail={arneuraPic} />
                            <ProjectCard projectName='SeeLEVEL' thumbnail={seePic} />
                        </div>
                        {/* link to see more */}
                        <div className="transition-all duration-300 flex text-xl font-bold items-center justify-center bg-white min-w-[250px] min-h-[180px] max-w-[250px] max-h-[180px] border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 p-8 z-10 rounded-lg">
                            <a href="/projects" className="hover-underline-animation">ALL PROJECTS</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default ProjectsMain;

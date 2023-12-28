import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { SelectedPage } from '@/Shared/types';
import { useState } from 'react';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const [expandedStates, setExpandedStates] = useState([false, false, false]);

  const handleItemClick = (index: number) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];

      // Reset other states to false if the current state is set to true
      if (newStates[index]) {
        for (let i = 0; i < newStates.length; i++) {
          if (i !== index) {
            newStates[i] = false;
          }
        }
      }

      return newStates;
    });
  };

  const ProjectComponents = [
    React.lazy(() => import('./RecipeMe')),
    React.lazy(() => import('./Seelevel')),
    React.lazy(() => import('./Arneura')),
  ];

  return (
    <>
      {/* container */}
      <motion.div
        className="h-auto w-full flex justify-center"
        id="projects"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Projects);
        }}
      >
        <div className="w-5/6 flex flex-col mt-[48px] font-roboto text-xl items-center">
          {/* title */}
          <div className="text-black text-4xl font-bold relative w-full">
            <h1 className="text-right">PROJECTS</h1>
          </div>
          {/* content */}
          <div className="w-full">
            <p className="p-6 text-[15px] font-bold"></p>
            {/* grid */}
            <div className="w-full grid grid-cols-1 text-lg h-auto gap-8 mb-[300px]">
              {ProjectComponents.map((ProjectComponent, index) => (
                <Suspense key={index} fallback={<div>Loading...</div>}>
                  <motion.div
                    onClick={() => handleItemClick(index)}
                    initial={false} // Disable initial animation
                    animate={{
                      height: expandedStates[index] ? 500 : 52,
                      paddingTop: expandedStates[index] ? 15 : 0,
                      overflow: 'hidden',
                      borderBottom: expandedStates[index] ? "" : "2px solid #000000",
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="w-full"
                  >
                    <ProjectComponent />
                  </motion.div>
                </Suspense>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;

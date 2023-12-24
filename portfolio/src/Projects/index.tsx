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
        className="h-[100vh] w-full flex justify-center"
        id="projects"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Projects);
        }}
      >
        <div className="w-5/6 flex flex-col mt-[48px] font-roboto text-xl items-center">
          {/* title */}
          <div className="text-black text-4xl font-bold flex items-end justify-end text-right">
            <h1 className="">PROJECTS</h1>
          </div>
          {/* content */}
          <div className="w-full">
            <p className="p-6">Individual projects will be displayed here</p>
            {/* grid */}
            <div className="w-full grid grid-cols-1 text-lg h-auto gap-8 mb-[50px]">
              {ProjectComponents.map((ProjectComponent, index) => (
                <Suspense key={index} fallback={<div>Loading...</div>}>
                  <motion.div
                    onClick={() => handleItemClick(index)}
                    initial={false} // Disable initial animation
                    animate={{
                      height: expandedStates[index] ? 500 : 52,
                      paddingTop: expandedStates[index] ? 15 : 0,
                      overflow: 'hidden',
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="w-full rounded-lg bg-white border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500"
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

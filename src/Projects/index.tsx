import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

type Props = {};

const Projects = ({ }: Props) => {
  const ProjectComponents = [
    React.lazy(() => import('./TravelTrekker')),
    React.lazy(() => import('./Gymapp')),
    React.lazy(() => import('./Arneura')),
    React.lazy(() => import('./Seelevel')),
    React.lazy(() => import('./RecipeMe'))
  ];

  return (
    <>
      <div className="p-8">
        <button className="flex gap-3 items-center">
          <ChevronLeftIcon className="text-black h-6 w-6" /> <a href="/" className="text-black font-bold text-xl hover-underline-animation font-roboto">GO BACK</a>
        </button>
      </div>
      {/* container */}
      <div
        className="h-auto w-full flex justify-center mt-[50px]"
        id="projects"
      >
        <div className="w-5/6 flex flex-col mt-[48px] font-roboto text-xl items-center">
          {/* title */}
          <div className="text-black text-5xl font-bold relative w-full">
            <h1 className="text-center sm:text-right">PROJECTS</h1>
          </div>
          {/* content */}
          <div className="w-full">
            <p className="p-6 text-[15px] font-bold"></p>
            {/* grid */}
            <div className="w-full grid grid-cols-1 divide-y divide-black sm:divide-white text-lg h-auto gap-8 mb-12">
              {ProjectComponents.map((ProjectComponent, index) => (
                <Suspense key={index} fallback={<div>Loading...</div>}>
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1 }}
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
      </div>
    </>
  );
};

export default Projects;

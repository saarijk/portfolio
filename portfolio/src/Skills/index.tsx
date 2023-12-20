import React from 'react';
import { motion } from 'framer-motion';
import { SelectedPage } from '@/Shared/types';
import reactImg from '@/assets/reactLogo2.png';
import tsImg from '@/assets/tsLogo2.png';
import gitImg from '@/assets/gitLogo2.png';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Skills = ({ setSelectedPage }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1, // Add a delay before starting children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section id="skills">
        <motion.div
          className="h-[60vh] w-full bg-black flex align-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          <div className="w-5/6 pt-10">
            <h1 className="text-slate-300 text-4xl font-bold">SKILLS</h1>
            <motion.div
              className="flex gap-4 mt-14 text-slate-400"
              variants={containerVariants}
            >
              {/* skills breakdown */}
              <motion.div
                className="w-1/4 bg-blue-500 bg-opacity-10 p-8 rounded-md"
                variants={itemVariants}
              >
                <img src={gitImg} className="h-10 w-10 mb-6 opacity-50" />
                <h1 className="font-bold mb-3 text-slate-300">
                  Git Version Control
                </h1>
                <p className="text-sm">
                  Experienced in using Git to track changes in code repositories.
                  Familiar with commit, push, pull, and branch management.
                </p>
              </motion.div>
              <motion.div
                className="w-1/4 bg-blue-500 bg-opacity-10 p-8 rounded-md"
                variants={itemVariants}
              >
                <GlobeAltIcon className="h-10 w-10 mb-6 opacity-[55%]" />
                <h1 className="font-bold mb-3 text-slate-300">
                  Web Development
                </h1>
                <p className="text-sm">
                  Skilled in frontend web development, creating visually appealing
                  and responsive UIs. Proficient in HTML and CSS to build interactive
                  and dynamic websites.
                </p>
              </motion.div>
              <motion.div
                className="w-1/4 bg-blue-500 bg-opacity-10 p-8 rounded-md"
                variants={itemVariants}
              >
                <img src={tsImg} className="h-10 w-10 mb-6 opacity-50" />
                <h1 className="font-bold mb-3 text-slate-300">TypeScript</h1>
                <p className="text-sm">
                  Knowledgeable about type annotations, interfaces, modules, and
                  other TS features for enhanced code quality.
                </p>
              </motion.div>
              <motion.div
                className="w-1/4 bg-blue-500 bg-opacity-10 p-8 rounded-md"
                variants={itemVariants}
              >
                <img src={reactImg} className="h-9 w-10 mb-6 opacity-[55%]" />
                <h1 className="font-bold mb-3 text-slate-300">React</h1>
                <p className="text-sm">
                  Experienced in building UIs using React. Knowledgeable about state
                  management and other core concepts in React development.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;

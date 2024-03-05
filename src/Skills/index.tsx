import { motion } from 'framer-motion';
import { SelectedPage } from '@/Shared/types';
import reactImg from '@/assets/reactLogo.png';
import tsImg from '@/assets/tsLogo.png';
import gitImg from '@/assets/gitLogo.png';
import gqlImg from '@/assets/graphQLlogo.png';
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
    hover: { y: 5 },
  };

  return (
    <>
      <section id="skills" className="mt-[200px] font-roboto">
        <motion.div
          className="h-auto w-full flex align-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          <div className="w-11/12 pt-10">
            <h1 className="text-black text-4xl font-bold text-center">SKILLS</h1>
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-14 text-black font-ibm"
              variants={containerVariants}
            >
              {/* skills breakdown */}
              <motion.div
                className="w-1/4 min-w-[250px] border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 p-8 z-10 rounded-lg"
                variants={itemVariants}
                whileHover="hover"
              >
                <img src={gitImg} className="h-10 w-10 mb-6" />
                <h1 className="font-bold mb-3 text-black">
                  GitHub
                </h1>
                <p className="text-sm">
                  Experienced in using GitHub to track changes in code repositories.
                  Familiar with commit, push, pull, and branch management.
                </p>
              </motion.div>
              <motion.div
                className="w-1/4 min-w-[250px] border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 p-8 z-10 rounded-lg"
                variants={itemVariants}
                whileHover="hover"
              >
                <GlobeAltIcon className="h-10 w-10 mb-6" />
                <h1 className="font-bold mb-3 text-black">
                  Web Development
                </h1>
                <p className="text-sm">
                  Skilled in frontend web development, creating visually appealing
                  and responsive UIs. Proficient in HTML and CSS to build interactive
                  and dynamic websites. 
                </p>
              </motion.div>
              <motion.div
                className="w-1/4 min-w-[250px] border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 p-8 z-10 rounded-lg"
                variants={itemVariants}
                whileHover="hover"
              >
                <img src={tsImg} className="h-10 w-10 mb-6" />
                <h1 className="font-bold mb-3 text-black">TypeScript</h1>
                <p className="text-sm">
                  Knowledgeable about type annotations, interfaces, modules, and
                  other TS features for enhanced code quality.
                </p>
              </motion.div>
              <motion.div
                className="w-1/4 min-w-[250px] border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 p-8 z-10 rounded-lg"
                variants={itemVariants}
                whileHover="hover"
              >
                <img src={reactImg} className="h-9 w-10 mb-6" />
                <h1 className="font-bold mb-3 text-black">React</h1>
                <p className="text-sm">
                  Experienced in building UIs using React. Knowledgeable about state
                  management and other core concepts in React development.
                </p>
              </motion.div>
              <motion.div
                className="w-1/4 min-w-[250px] border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 p-8 z-10 rounded-lg"
                variants={itemVariants}
                whileHover="hover"
              >
                <img src={gqlImg} className="h-9 w-10 mb-6" />
                <h1 className="font-bold mb-3 text-black">GraphQL</h1>
                <p className="text-sm">
                  Familiar with the basics of GraphQL integration for data querying and manipulation, using a schema-first approach and Apollo Server.
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

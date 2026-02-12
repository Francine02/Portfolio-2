import { PROJECTS_BACK } from '@constants/projects-back';
import { PROJECTS_FRONT } from '@constants/projects-front';
import { PROJECTS_FULLSTACK } from '@constants/projects-fullstack';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { Card } from './Card/index';

export function ProjectsList({ selected }) {
  const allProjects = [
    ...PROJECTS_BACK,
    ...PROJECTS_FRONT,
    ...PROJECTS_FULLSTACK,
  ];

  const pagNav = [
    allProjects,
    PROJECTS_BACK,
    PROJECTS_FRONT,
    PROJECTS_FULLSTACK,
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = [
    {
      hidden: { opacity: 0, x: -80, rotate: -3 },
      show: { opacity: 1, x: 0, rotate: 0 },
    },
    {
      hidden: { opacity: 0, x: 80, rotate: 3 },
      show: { opacity: 1, x: 0, rotate: 0 },
    },
    {
      hidden: { opacity: 0, y: 80, scale: 0.9 },
      show: { opacity: 1, y: 0, scale: 1 },
    },
    {
      hidden: { opacity: 0, scale: 0.8, rotate: -5 },
      show: { opacity: 1, scale: 1, rotate: 0 },
    },
  ];

  return (
    <>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        viewport={{ amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-8 transition ease-in-out"
      >
        <AnimatePresence>
          {pagNav[selected]
            .slice(
              0,
              showAllProjects !== true && selected === 0
                ? 4
                : pagNav[selected].length
            )
            .map((project, index) => (
              <motion.li
                key={project.name}
                variants={cardVariants[index % 4]}
                initial="hidden"
                whileInView="show"
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, type: 'spring' }}
                viewport={{ amount: 0.1 }}
              >
                <Card
                  siteUrl={project.deploy}
                  githubUrl={project.repository}
                  description={project.about}
                  title={project.name}
                  img={project.img}
                  techs={project.techs}
                  demo={project.demo}
                />
              </motion.li>
            ))}
        </AnimatePresence>
      </motion.ul>

      {pagNav[selected].length > 4 && (
        <motion.button
          type="button"
          onClick={() => setShowAllProjects((prev) => !prev)}
          aria-expanded={showAllProjects}
          className="button-base mt-10 py-2 mx-auto flex"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          Visualizar {showAllProjects ? 'menos' : 'mais'}
        </motion.button>
      )}
    </>
  );
}

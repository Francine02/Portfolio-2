import { PROJECTS_BACK } from '@constants/projects-back';
import { PROJECTS_FRONT } from '@constants/projects-front';
import { PROJECTS_FULLSTACK } from '@constants/projects-fullstack';
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

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-10 transition ease-in-out">
        {pagNav[selected]
          .slice(
            0,
            showAllProjects !== true && selected === 0
              ? 4
              : pagNav[selected].length
          )
          .map((project) => (
            <li key={project.name}>
              <Card
                siteUrl={project.deploy}
                githubUrl={project.repository}
                description={project.about}
                title={project.name}
                img={project.img}
                techs={project.techs}
                demo={project.demo}
              />
            </li>
          ))}
      </ul>

      {pagNav[selected].length > 4 && (
        <button
          type="button"
          onClick={() => setShowAllProjects((prev) => !prev)}
          aria-expanded={showAllProjects}
          className="button-base mt-10 py-2 mx-auto flex"
        >
          Visualizar {showAllProjects ? 'menos' : 'mais'}
        </button>
      )}
    </>
  );
}

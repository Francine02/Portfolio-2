import { useEffect } from "react"
import { ButtonUp } from "./components/ButtonUp"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import ScrollReveal from "scrollreveal"
import { myProject } from "./projects/myProjects.js"
import { useTranslation } from 'react-i18next'
import { Contact } from "./pages/Contact"

function App() {
  const { t } = useTranslation()

  useEffect(() => { //Para a configuração do ScrollReveal
    const sr = ScrollReveal()

    sr.reveal('.one', {
      duration: 950,
      origin: 'left',
      distance: '100px',
      easing: 'ease-in-out',
      beforeReveal: (el) => {
        el.style.visibility = 'visible'
      },
    })

    sr.reveal('.two', {
      duration: 950,
      origin: 'right',
      distance: '100px',
      easing: 'ease-in-out',
      beforeReveal: (el) => {
        el.style.visibility = 'visible'
      }
    })

    sr.reveal('.three', {
      duration: 950,
      origin: 'bottom',
      distance: '100px',
      easing: 'ease-in-out',
      beforeReveal: (el) => {
        el.style.visibility = 'visible'
      }
    })
  }, [])

  return (
    <div className="dark:bg-[#272727] min-h-screen overflow-hidden">
      <div className="one" style={{ visibility: 'hidden' }}>
        <Home />
      </div>

      <div className="two" style={{ visibility: 'hidden' }}>
        <About />
      </div>

      <h1 id="projetos" className='pt-24 sm:pt-36 text-2xl sm:text-3xl md:text-4xl font-semibold dark:text-white text-center pb-14'><span className="bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-[length:100%_3px] bg-no-repeat bg-bottom pb-1">{t('projects.project')}</span></h1>
      {myProject.map((proj, index) => (
        <Projects
          key={proj.name}
          name={t(proj.name)}
          github={proj.github}
          deploy={proj.deploy}
          img={proj.img}
          about={t(proj.about)}
          tech={proj.tech}
          reverse={index % 2 === 1} // Alterna entre true e false para cada projeto
        />
      ))}

      <div className="three">
        <Contact />
      </div>

      <ButtonUp />
    </div>
  )
}

export default App

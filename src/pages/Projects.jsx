import ScrollReveal from "scrollreveal"
import { useEffect } from "react"

export function Projects({ name, github, deploy, img, about, reverse, tech }) {

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
  }, [])

  return (
    <div className={`pb-14 px-7 md:px-12 lg:px-24 dark:text-white ${reverse ? 'one' : 'two'}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <img src={img} alt={name} className={`w-full h-auto ${reverse ? 'md:order-2' : ''}`} />

        <div className={`w-full px-4 flex flex-col ${reverse ? 'lg:order-1' : ''}`}>
          <h2 className={`text-center text-xl sm:text-2x1 font-bold ${reverse ? 'md:text-right' : 'md:text-left'}`}>{name}</h2>
          <p className="font-normal text-justify text-sm sm:text-lg tracking-wide">{about}</p>

          <div className="flex flex-wrap justify-center space-x-4 mt-2">
            {tech.map((iconUrl, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img src={iconUrl} alt={`Tech icon ${index}`} className="w-7 h-7" />
              </div>
            ))}
          </div>

          <div className="flex space-x-5 mt-auto justify-center pt-3">
            <button className="p-0.5 from-slate-600 rounded-full to-slate-800 bg-gradient-to-r">
              {github && <a href={github} target="_blank" rel="noopener noreferrer" className="py-1 font-bold"><span className={`rounded-full block px-2 py-1 font-bold bg-white text-black hover:bg-transparent hover:text-white transition dark:bg-[#272727] dark:text-white dark:hover:bg-transparent dark:hover:text-white`}>Github
              </span></a>}
            </button>

            <button className="p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r">
              {deploy && <a href={deploy} target="_blank" rel="noopener noreferrer">
                <span className={`rounded-full block px-2 py-1 font-bold bg-white text-black hover:bg-transparent hover:text-white transition dark:bg-[#272727] dark:text-white dark:hover:bg-transparent dark:hover:text-white`}>Site
                </span></a>}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
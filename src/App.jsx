import { useEffect } from "react"
import { ButtonUp } from "./components/ButtonUp"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import ScrollReveal from "scrollreveal"

function App() {
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
    <div className="dark:bg-[#272727] min-h-screen overflow-hidden">
      <div className="one" style={{ visibility: 'hidden' }}>
        <Home />
      </div>

      <div className="two" style={{ visibility: 'hidden' }}>
        <About />
      </div>
      
      <ButtonUp />
    </div>
  )
}

export default App

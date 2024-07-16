import { ButtonUp } from "./components/ButtonUp"
import { About } from "./pages/About"
import { Home } from "./pages/Home"

function App() {

  return (
    <div className="dark:bg-[#1d1d1d] min-h-screen">
      <Home/>
      <About/>
      <ButtonUp/>
    </div>
  )
}

export default App

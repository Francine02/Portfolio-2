import { ButtonUp } from "./components/ButtonUp"
import { About } from "./pages/About"
import { Home } from "./pages/Home"

function App() {

  return (
    <div className="dark:bg-[#272727] min-h-screen">
      <Home/>
      <About/>
      <ButtonUp/>
    </div>
  )
}

export default App

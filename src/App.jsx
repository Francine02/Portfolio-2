import { AboutMe } from '@components/AboutMe/index';
import { Header } from '@components/Header/index';
import { Hero } from '@components/Hero/index';

function App() {
  return (
    <main className="dark:bg-[#272727] min-h-screen overflow-hidden text-text-light dark:text-text-dark ">
      <Header />
      <Hero />
      <AboutMe />
    </main>
  );
}

export default App;

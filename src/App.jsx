import { AboutMe } from '@components/AboutMe/index';
import { Header } from '@components/Header/index';
import { Hero } from '@components/Hero/index';
import { Projects } from '@components/Projects/index';

function App() {
  return (
    <main className="dark:bg-dark min-h-screen overflow-hidden text-text-light dark:text-text-dark pb-10">
      <Header />
      <Hero />

      <AboutMe />

      <Projects />
    </main>
  );
}

export default App;

import { AboutMe } from '@components/AboutMe/index';
import { Contact } from '@components/Contact/index';
import { Experiences } from '@components/Experiences/index';
import { Footer } from '@components/Footer/index';
import { Header } from '@components/Header/index';
import { Hero } from '@components/Hero/index';
import { Projects } from '@components/Projects/index';

function App() {
  return (
    <main className="dark:bg-dark min-h-screen overflow-hidden text-text-light dark:text-text-dark">
      <Header />
      <Hero />

      <AboutMe />

      <Projects />

      <Experiences />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;

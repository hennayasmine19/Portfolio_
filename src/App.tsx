import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Connect } from './components/Connect';
import { Languages } from './components/Languages';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Education />
        <ProfessionalExperience />
        <Certifications />
        <Projects />
        <Languages />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
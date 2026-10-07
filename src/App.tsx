import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsDirectory } from './components/ProjectsDirectory';
import { AudioDeepfakeLab } from './components/AudioDeepfakeLab';
import { CatchMyDreamSimulator } from './components/CatchMyDreamSimulator';
import { DevOpsPipelineRunner } from './components/DevOpsPipelineRunner';
import { TechStackExplorer } from './components/TechStackExplorer';
import { GithubProfileStudio } from './components/GithubProfileStudio';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'audio-lab', 'catch-my-dream', 'devops-runner', 'tech-stack', 'github-studio'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectDemo = (demoType: 'deepfake' | 'catchmydream' | 'devops') => {
    if (demoType === 'deepfake') {
      scrollTo('audio-lab');
    } else if (demoType === 'catchmydream') {
      scrollTo('catch-my-dream');
    } else if (demoType === 'devops') {
      scrollTo('devops-runner');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar 
        onOpenContact={() => setIsContactOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        <Hero 
          onOpenContact={() => setIsContactOpen(true)}
          onExploreProjects={() => scrollTo('projects')}
          onLaunchAudioLab={() => scrollTo('audio-lab')}
        />

        <ProjectsDirectory 
          onSelectProjectDemo={handleSelectProjectDemo}
        />

        <AudioDeepfakeLab />

        <CatchMyDreamSimulator />

        <DevOpsPipelineRunner />

        <TechStackExplorer />

        <GithubProfileStudio />
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

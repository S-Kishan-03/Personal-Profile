import Header from '@/components/header';
import AboutSection from '@/components/sections/about';
import CertificationsAndHonorsSection from '@/components/sections/certifications-and-honors';
import EducationSection from '@/components/sections/education';
import ExperienceSection from '@/components/sections/experience';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import Footer from '@/components/footer';
import BackgroundAnimation from '@/components/background-animation';
import TravelLogSection from '@/components/sections/travel-log';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto max-w-5xl px-4 pt-24 md:pt-32">
          <div className="space-y-24 md:space-y-32 pb-24">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <TravelLogSection />
            <EducationSection />
            <CertificationsAndHonorsSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

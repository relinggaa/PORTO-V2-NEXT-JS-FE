import HomeSection from "./section/HomeSection";
import AboutSection from "./section/AboutSection";
import SkillsSection from "./section/SkillsSection";
import TiktokSection from "./section/TiktokSection";
import NavbarLanding from "@/components/ui/NavbarLanding";
import ExperienceSection from "./section/ExperienceSection";
const LandingPage = () => {
  return (
    <div className="bg-black text-white">
      <NavbarLanding />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <TiktokSection />
      <ExperienceSection />
    </div>
  );
};

export default LandingPage;
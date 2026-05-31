import '../styles/about.css';
import AboutHero from "../components/AboutHero";
import AbouytStory from "../components/AboutStory";
import MissionVision from "../components/MissionVission";
import AboutStatus from "../components/AboutStatus";
import WhyChooseUs from "../components/WhyChooseUs";
import TeamSection from '../components/TeamSection';

function About() {
  return (
    <div className="about-page">
      <AboutHero />
      <AbouytStory />
      <MissionVision />
      <AboutStatus />
      <WhyChooseUs />
      <TeamSection />
    </div>
  );
}

export default About;

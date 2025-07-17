import HeroSection from "./components/HeroSection";
import AboutBNI from "./components/AboutBNI";
import CallToAction from "./components/CallToAction";
import ThreeStepsSection from './components/ThreeStepsSection';
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutBNI />
      <CallToAction />
      <TestimonialSection />
      <ThreeStepsSection />
      <Footer />
    </main>
  );
}

import HeroSection from "./components/HeroSection";
import AboutBNI from "./components/AboutBNI";
import CallToAction from "./components/CallToAction";
import TestimonialSection from "./components/TestimonialSection";
import ThreeStepsSection from "./components/ThreeStepsSection";

import Footer from "./components/Footer";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <AboutBNI />
      <CallToAction />
      <TestimonialSection />
      <ThreeStepsSection />
      <Footer />
    </main>
  );
}

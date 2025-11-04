import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsCTA from './components/TestimonialsCTA';

function Divider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Divider />
      <ProblemSection />
      <Divider />
      <FeaturesSection />
      <Divider />
      <TestimonialsCTA />
      <footer className="w-full bg-black px-6 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} FLOCORE AI. All rights reserved.
      </footer>
    </div>
  );
}

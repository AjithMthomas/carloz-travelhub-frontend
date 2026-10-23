import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TopPicks } from './components/TopPicks';
import { WeCreateTrips } from './components/WeCreateTrips';
import { AwesomeStory } from './components/AwesomeStory';
import { ExploreAllTours } from './components/ExploreAllTours';
import { WhichRouteArch } from './components/WhichRouteArch';
import { RouteVisualizer } from './components/RouteVisualizer';
import { TripEnquiryForm } from './components/TripEnquiryForm';
import { FAQAccordion } from './components/FAQAccordion';
import { TailorMadeBanner } from './components/TailorMadeBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);
  const [selectedDestination, setSelectedDestination] = useState<string | undefined>(undefined);

  const scrollToPlanner = () => {
    const el = document.getElementById('planner');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTours = () => {
    const el = document.getElementById('tours');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectDestination = (dest: string) => {
    setSelectedDestination(dest);
    scrollToPlanner();
  };

  const handleSelectPackageForPlanner = (pkg: string) => {
    setSelectedPackage(pkg);
    scrollToPlanner();
  };

  return (
    <div className="app-root">
      {/* Navigation */}
      <Header onPlanTripClick={scrollToPlanner} />

      <main id="main-content">
        {/* Section 01: Hero Poster (Matching Reference Image 1 "VIETNAM" Style) */}
        <HeroSection
          onExploreClick={scrollToTours}
          onPlanTripClick={scrollToPlanner}
        />

        {/* Section 02: Top Horizontal Pick Cards (Cloned from Reference 2 Top) */}
        <TopPicks
          onSelectDestination={handleSelectDestination}
          onSeeAllClick={scrollToTours}
        />

        {/* Section 03: "We create the trips you love" (Cloned from Reference 2 Middle Split) */}
        <WeCreateTrips onPlanTripClick={scrollToPlanner} />

        {/* Section 04: "Awesome Wayanad" + Stats + Layered Photos (Cloned from Reference 2) */}
        <AwesomeStory onPlanTripClick={scrollToPlanner} />

        {/* Section 05: "EXPLORE ALL TOURS" (Cloned from Reference 2 Page 2) */}
        <ExploreAllTours onSelectPackageForPlanner={handleSelectPackageForPlanner} />

        {/* Section 06: "WHICH ROUTE ARE YOU GONNA CHOOSE?" (Reference 2 Arch Doorways) */}
        <WhichRouteArch onSelectRoute={handleSelectDestination} />

        {/* Section 07: Cinematic Mountain Route Visualizer */}
        <RouteVisualizer />

        {/* Section 08: Interactive Multi-Step Trip Planner (WhatsApp to 6238813608 & 8157845547) */}
        <TripEnquiryForm
          initialPackage={selectedPackage}
          initialDestination={selectedDestination}
        />

        {/* Section 09: FAQs (Cloned from Reference 2 Two-Column Layout) */}
        <FAQAccordion />

        {/* Section 10: "Tailor Made Trip" Sunset Card (Cloned from Reference 2) */}
        <TailorMadeBanner onPlanTripClick={scrollToPlanner} />
      </main>

      {/* Section 11: Minimalist Footer (Cloned from Reference 2) */}
      <Footer />

      {/* Floating Multi-Desk WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;

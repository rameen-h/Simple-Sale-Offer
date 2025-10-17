import React from 'react';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import FeaturedInLogos from '../FeaturedInLogos/FeaturedInLogos';
import StatsSection from '../StatsSection/StatsSection';
import StepsCard from '../StepCard/StepCard';
import ComparisonSection from '../ComparisonSection/ComparisonSection';
import RecentlySoldSection from '../RecentlySoldSection/RecentlySoldSection';
import FAQSection from '../FAQSection/FAQSection';
import Footer from '../Footer/Footer';
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import FooterPopup from '../FooterPopup/FooterPopup';
import Notification from '../Notification/Notification';

const HomePage = () => {

  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <FeaturedInLogos />
      <StepsCard></StepsCard>
      <StatsSection />
      <TestimonialSection/>
      <ComparisonSection />
      <RecentlySoldSection />
      <FAQSection />
      <Footer />
      <Notification />
      <FooterPopup />
    </div>
  );
};

export default HomePage;

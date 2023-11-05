import Navbar from "@/components/Navbar/Navbar";
import FAQSection from "@/components/ui/Faq";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSections";

import React from "react";

const RootPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default RootPage;

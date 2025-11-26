import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquiryForm from "@/components/EnquiryForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <EnquiryForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

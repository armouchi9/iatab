import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhyIaTab from "@/components/landing/WhyIaTab";
import SocialProof from "@/components/landing/SocialProof";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import ContactForm from "@/components/landing/ContactForm";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyIaTab />
        <SocialProof />
        <Services />
        <HowItWorks />
        <ContactForm />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

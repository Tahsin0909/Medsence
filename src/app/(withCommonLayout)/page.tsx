import FAQSection from "@/components/faq/Faq";
import Feature from "@/components/feature/Feature";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import MedsAi from "@/components/medsAi/MedsAi";
import SubmitReview from "@/components/submitReview/SubmitReview";




const page = () => {
  return (
    <>
      <Hero />
      <MedsAi />
      <Feature />
      <HowItWorks />
      {/* <Testimonials /> */}
      <SubmitReview />
      <FAQSection />
    </>
  );
};

export default page;

import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import ServicesGrid from '../components/ServicesGrid';
import Partners from '../components/Partners';
import TechnologiesSection from '../components/TechnologiesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Industries from '../components/Industries';
import BlogsSection from '../components/BlogsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TrustedCertified from '../components/TrustedCertified';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureSection
        title="Smarter Business with AI"
        description="Leverage cutting-edge artificial intelligence to automate processes, gain insights, and drive innovation. Our AI solutions are designed to transform your business operations and deliver measurable results."
        imageSide="left"
      />
      <FeatureSection
        title="Cloud Migration & Cost Optimization"
        description="Seamlessly migrate to the cloud while optimizing costs and improving performance. We help you choose the right cloud strategy and ensure a smooth transition with minimal disruption."
        imageSide="right"
      />
      <ServicesGrid />
      <Partners />
      <TechnologiesSection />
      <WhyChooseUs />
      <Industries />
      <BlogsSection />
      <CaseStudiesSection />
      <TrustedCertified />
      <ContactSection />
    </>
  );
};

export default Home;


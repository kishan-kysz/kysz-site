import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            About KyszTech Pvt. Ltd.
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              KyszTech Pvt. Ltd. is a leading technology solutions provider specializing in cloud services, 
              DevOps, and AI/ML solutions. We empower businesses to innovate and grow through cutting-edge 
              technology and expert guidance.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With a team of certified experts and years of industry experience, we deliver comprehensive 
              solutions that drive real business value. Our commitment to excellence and customer success 
              has made us a trusted partner for organizations across various industries.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To empower businesses with smarter AI, stronger cloud infrastructure, and safer modernized 
              systems that enable sustainable growth and innovation.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              To be the most trusted technology partner for businesses seeking to transform and excel in 
              the digital age.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;


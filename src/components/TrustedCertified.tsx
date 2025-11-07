import { motion } from 'framer-motion';

const certifications = [
  'AWS Certified', 'Azure Certified', 'Google Cloud Partner', 'DevOps Expert',
  'AI/ML Specialist', 'Security Certified', 'Kubernetes Certified', 'Terraform Expert',
];

const TrustedCertified = () => {
  return (
    <section className="py-20 bg-[#0B0B2B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted & Certified
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Recognized expertise across leading platforms and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors"
            >
              <div className="text-2xl mb-2">✓</div>
              <div className="text-sm font-semibold">{cert}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCertified;


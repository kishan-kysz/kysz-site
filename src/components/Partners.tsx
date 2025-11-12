import { motion } from 'framer-motion';

const partners = [
  { name: 'AWS', logo: 'AWS' },
  { name: 'Azure', logo: 'Azure' },
  { name: 'Google Cloud', logo: 'GCP' },
  { name: 'Oracle', logo: 'Oracle' },
];

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by leading cloud providers
          </p>
        </motion.div>

        <div className="bg-gradient-to-r from-[#14a1d5] to-[#3db8e8] rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl font-bold text-gray-800">
                  {partner.logo}
                </div>
                <div className="text-sm text-gray-600 mt-2">{partner.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;


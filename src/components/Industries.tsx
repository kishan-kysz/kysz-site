import { motion } from 'framer-motion';

const industries = [
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🛒', name: 'Retail' },
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🏦', name: 'Finance' },
  { icon: '🎓', name: 'Education' },
  { icon: '🚀', name: 'Technology' },
  { icon: '⚡', name: 'Energy' },
  { icon: '🚚', name: 'Logistics' },
  { icon: '🏢', name: 'Real Estate' },
];

const Industries = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for diverse industry needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="text-4xl mb-3">{industry.icon}</div>
              <div className="text-lg font-semibold" style={{ color: 'rgb(30, 58, 138)' }}>{industry.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;


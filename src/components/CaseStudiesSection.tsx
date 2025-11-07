import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CaseStudy {
  title: string;
  description: string;
  imageUrl?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Healthcare Cloud Migration',
    description: 'Successfully migrated a major healthcare provider to AWS, reducing costs by 45%.',
  },
  {
    title: 'AI-Powered Retail Analytics',
    description: 'Implemented machine learning solutions that increased sales by 30%.',
  },
  {
    title: 'DevOps Transformation',
    description: 'Reduced deployment time from weeks to hours with automated CI/CD pipelines.',
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real clients
            </p>
          </div>
          <Link
            to="/case-studies"
            className="hidden md:block text-[#6C63FF] font-semibold hover:underline"
          >
            View All →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="h-64 bg-gradient-to-br from-[#6C63FF] to-[#9F8CFF] relative">
                {study.imageUrl ? (
                  <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#6C63FF] to-[#9F8CFF] flex items-center justify-center">
                    <div className="text-white text-4xl">📊</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-200 mb-4">
                  {study.description}
                </p>
                <Link
                  to="/case-studies"
                  className="text-white font-semibold hover:underline inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;


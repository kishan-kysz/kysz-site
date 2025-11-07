import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'Healthcare Cloud Migration',
    industry: 'Healthcare',
    challenge: 'A major healthcare provider needed to migrate their legacy systems to the cloud while maintaining HIPAA compliance.',
    solution: 'We designed and implemented a secure AWS-based infrastructure with automated compliance monitoring.',
    results: [
      '45% reduction in infrastructure costs',
      '99.9% uptime achieved',
      'HIPAA compliance maintained',
      '50% faster application deployment',
    ],
    imageUrl: undefined,
  },
  {
    title: 'AI-Powered Retail Analytics',
    industry: 'Retail',
    challenge: 'A retail chain wanted to leverage customer data to improve inventory management and sales forecasting.',
    solution: 'We developed a custom ML model that analyzes purchasing patterns and predicts demand.',
    results: [
      '30% increase in sales',
      '25% reduction in inventory costs',
      'Improved customer satisfaction',
      'Real-time analytics dashboard',
    ],
    imageUrl: undefined,
  },
  {
    title: 'DevOps Transformation',
    industry: 'Technology',
    challenge: 'A software company struggled with slow deployments and manual processes.',
    solution: 'We implemented a complete CI/CD pipeline with automated testing and infrastructure as code.',
    results: [
      'Deployment time reduced from weeks to hours',
      '90% reduction in deployment errors',
      'Automated testing coverage increased',
      'Improved team productivity',
    ],
    imageUrl: undefined,
  },
];

const CaseStudies = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients - see how we've helped businesses transform
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-[#6C63FF] to-[#9F8CFF]">
                  {study.imageUrl ? (
                    <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white text-6xl">📊</div>
                    </div>
                  )}
                </div>
                <div className="p-8 lg:p-12">
                  <div className="inline-block px-3 py-1 bg-[#E8E4FF] text-[#6C63FF] rounded-full text-sm font-semibold mb-4">
                    {study.industry}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-[#6C63FF] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link to="/contact" className="btn-primary inline-block">
                    Discuss Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;


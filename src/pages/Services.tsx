import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions including migration, architecture design, and optimization.',
    features: [
      'Cloud Migration & Strategy',
      'Multi-Cloud Solutions',
      'Cost Optimization',
      'Cloud Security',
      '24/7 Monitoring & Support',
    ],
  },
  {
    id: 'devops',
    icon: '⚙️',
    title: 'DevOps',
    description: 'Streamline your development lifecycle with modern DevOps practices and tools.',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Container Orchestration',
      'Automated Testing',
      'Performance Monitoring',
    ],
  },
  {
    id: 'ai-ml',
    icon: '🤖',
    title: 'AI/ML Solutions',
    description: 'Leverage artificial intelligence and machine learning to drive business innovation.',
    features: [
      'Custom AI Models',
      'Machine Learning Pipelines',
      'Data Analytics',
      'Natural Language Processing',
      'Computer Vision',
    ],
  },
];

const Services = () => {
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
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="scroll-mt-32"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-[#14a1d5] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary inline-block">
                    Get Started
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-[#E0F7FA] to-[#F0FDFF] rounded-2xl p-12 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-6xl">{service.icon}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;


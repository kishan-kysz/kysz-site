import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: '☁️',
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions for scalable, secure, and cost-effective infrastructure.',
    link: '/services#cloud',
  },
  {
    icon: '⚙️',
    title: 'DevOps',
    description: 'Streamline your development and deployment processes with modern DevOps practices.',
    link: '/services#devops',
  },
  {
    icon: '🤖',
    title: 'AI/ML',
    description: 'Leverage artificial intelligence and machine learning to drive business innovation.',
    link: '/services#ai-ml',
  },
  {
    icon: '🧠',
    title: 'AI Application Development',
    description: 'Leverage our AI development services to build next-generation enterprise solutions tailored to your business goals.',
    link: '/services#ai-app',
  },
  {
    icon: '💻',
    title: 'Custom Software Development',
    description: 'Custom software development services for startups, small-to-midsize (SMB), and enterprise-size businesses.',
    link: '/services#custom-software',
  },
  {
    icon: '🌐',
    title: 'Web Application Development',
    description: 'Web Application Development Services Company that helps businesses by developing high-performing and secure web applications.',
    link: '/services#web-app',
  },
  {
    icon: '📱',
    title: 'Cross Platform Development',
    description: 'Build Native, Cross-Platform Apps for Desktop, Web, Mobile & Raspberry Pi.',
    link: '/services#cross-platform',
  },
  {
    icon: '📲',
    title: 'Mobile Application Development',
    description: 'Creative, secure, and reliable mobile apps for seamless experiences.',
    link: '/services#mobile-app',
  }

];

const ServicesGrid = () => {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'rgb(30, 58, 138)' }}>
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 flex-grow text-sm leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="text-[#14a1d5] font-semibold hover:underline inline-flex items-center self-start"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;


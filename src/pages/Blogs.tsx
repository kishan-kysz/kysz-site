import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: 'The Future of Cloud Computing in 2024',
    excerpt: 'Exploring the latest trends and innovations shaping the cloud landscape, including serverless computing, edge computing, and multi-cloud strategies.',
    date: 'March 15, 2024',
    category: 'Cloud',
    imageUrl: undefined,
  },
  {
    title: 'AI Integration: Transforming Business Operations',
    excerpt: 'How artificial intelligence is revolutionizing modern business processes, from customer service to supply chain management.',
    date: 'March 10, 2024',
    category: 'AI/ML',
    imageUrl: undefined,
  },
  {
    title: 'DevOps Best Practices for Modern Teams',
    excerpt: 'Essential strategies for building efficient development workflows, including CI/CD pipelines, infrastructure as code, and team collaboration.',
    date: 'March 5, 2024',
    category: 'DevOps',
    imageUrl: undefined,
  },
  {
    title: 'Cost Optimization Strategies for Cloud Infrastructure',
    excerpt: 'Learn how to reduce cloud costs without compromising performance or security through smart resource management and optimization techniques.',
    date: 'February 28, 2024',
    category: 'Cloud',
    imageUrl: undefined,
  },
  {
    title: 'Machine Learning in Production: Best Practices',
    excerpt: 'A comprehensive guide to deploying and maintaining ML models in production environments, covering monitoring, versioning, and scaling.',
    date: 'February 20, 2024',
    category: 'AI/ML',
    imageUrl: undefined,
  },
  {
    title: 'Kubernetes: A Complete Guide for Beginners',
    excerpt: 'Everything you need to know about Kubernetes, from basic concepts to advanced deployment strategies for containerized applications.',
    date: 'February 15, 2024',
    category: 'DevOps',
    imageUrl: undefined,
  },
];

const Blogs = () => {
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
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, updates, and best practices from our team of experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-[#14a1d5] to-[#3db8e8] flex items-center justify-center">
                {blog.imageUrl ? (
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-white text-5xl">📝</div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-[#E0F7FA] text-[#14a1d5] rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <Link
                  to="#"
                  className="text-[#14a1d5] font-semibold hover:underline inline-flex items-center"
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
    </div>
  );
};

export default Blogs;


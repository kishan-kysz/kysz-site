import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Blog {
  title: string;
  excerpt: string;
  imageUrl?: string;
}

const blogs: Blog[] = [
  {
    title: 'The Future of Cloud Computing in 2024',
    excerpt: 'Exploring the latest trends and innovations shaping the cloud landscape.',
  },
  {
    title: 'AI Integration: Transforming Business Operations',
    excerpt: 'How artificial intelligence is revolutionizing modern business processes.',
  },
  {
    title: 'DevOps Best Practices for Modern Teams',
    excerpt: 'Essential strategies for building efficient development workflows.',
  },
];

const BlogsSection = () => {
  return (
    <section className="py-20 bg-white">
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
              Latest Blogs
            </h2>
            <p className="text-lg text-gray-600">
              Insights and updates from our team
            </p>
          </div>
          <Link
            to="/blogs"
            className="hidden md:block text-[#14a1d5] font-semibold hover:underline"
          >
            View All →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="text-white text-4xl">📝</div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <Link
                  to="/blogs"
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
    </section>
  );
};

export default BlogsSection;


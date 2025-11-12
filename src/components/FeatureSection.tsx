import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSide: 'left' | 'right';
  imageUrl?: string;
}

const FeatureSection = ({ title, description, imageSide, imageUrl }: FeatureSectionProps) => {
  const isLeft = imageSide === 'left';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isLeft ? '' : 'lg:flex-row-reverse'
        }`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={isLeft ? 'lg:order-1' : 'lg:order-2'}
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#14a1d5] to-[#3db8e8] p-1">
              <div className="bg-white rounded-2xl p-8 h-80 flex items-center justify-center">
                {imageUrl ? (
                  <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#E0F7FA] to-[#F0FDFF] rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-500">Placeholder Image</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={isLeft ? 'lg:order-2' : 'lg:order-1'}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <Link to="/services" className="btn-primary inline-block">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;


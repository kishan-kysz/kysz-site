import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Technology {
  name: string;
  icon: ReactNode;
  bgColor: string;
}

const technologies: Technology[] = [
  {
    name: 'AI',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="12" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="17" y="12" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="24" y="12" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="31" y="12" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="10" y="19" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="17" y="19" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="24" y="19" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="31" y="19" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="10" y="26" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="17" y="26" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="24" y="26" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="31" y="26" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="10" y="33" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="17" y="33" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="24" y="33" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <rect x="31" y="33" width="5" height="5" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <line x1="12.5" y1="14.5" x2="19.5" y2="21.5" stroke="#1a1a1a" strokeWidth="1"/>
        <line x1="19.5" y1="14.5" x2="12.5" y2="21.5" stroke="#1a1a1a" strokeWidth="1"/>
        <text x="24" y="29" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">AI</text>
      </svg>
    ),
    bgColor: '#d5f3ff',
  },
  {
    name: 'Microsoft .NET',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#0078D4" textAnchor="middle">N</text>
        <text x="24" y="42" fontFamily="Arial, sans-serif" fontSize="8" fill="#0078D4" textAnchor="middle">.NET</text>
      </svg>
    ),
    bgColor: '#d5f3ff',
  },
  {
    name: 'Angular',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L6 16L10 38L24 44L38 38L42 16L24 6Z" fill="#DD0031"/>
        <path d="M24 6V44M24 6L6 16L10 38M24 6L42 16L38 38" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        <path d="M24 6L10 38H18L20 28H28L30 38H38L24 6Z" fill="white"/>
      </svg>
    ),
    bgColor: '#ffccca',
  },
  {
    name: 'React',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="24" rx="11" ry="4" stroke="#61DAFB" strokeWidth="2.5"/>
        <ellipse cx="24" cy="24" rx="11" ry="4" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="11" ry="4" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(120 24 24)"/>
        <circle cx="24" cy="24" r="2.5" fill="#61DAFB"/>
      </svg>
    ),
    bgColor: '#e0faff',
  },
  {
    name: 'Node.js',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8C15.2 8 8 15.2 8 24C8 32.8 15.2 40 24 40C32.8 40 40 32.8 40 24C40 15.2 32.8 8 24 8Z" fill="#339933"/>
        <text x="24" y="22" fontFamily="Arial, sans-serif" fontSize="9" fill="white" textAnchor="middle" fontWeight="500">node</text>
        <polygon points="24,26 28,30 32,28 32,24 28,26 24,26" fill="white"/>
        <text x="28" y="29" fontFamily="Arial, sans-serif" fontSize="7" fill="#339933" textAnchor="middle" fontWeight="bold">JS</text>
      </svg>
    ),
    bgColor: '#e5fdde',
  },
  {
    name: 'Java',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 16C18 16 16 18 16 20V28C16 30 18 32 20 32H28C30 32 32 30 32 28V20C32 18 30 16 28 16H20Z" fill="#ED8B00"/>
        <path d="M20 18H28C29 18 30 19 30 20V26C30 27 29 28 28 28H20C19 28 18 27 18 26V20C18 19 19 18 20 18Z" fill="white" opacity="0.2"/>
        <path d="M22 22L24 20L26 22L24 24L22 22Z" fill="white" opacity="0.8"/>
        <path d="M20 24C20 25 20.5 26 21.5 26C22.5 26 23 25 23 24" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M25 24C25 25 25.5 26 26.5 26C27.5 26 28 25 28 24" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 30C18 31 19 32 20 32" stroke="#ED8B00" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30 30C30 31 29 32 28 32" stroke="#ED8B00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bgColor: '#ffebd9',
  },
  {
    name: 'React Native',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="24" rx="11" ry="4" stroke="#61DAFB" strokeWidth="2.5"/>
        <ellipse cx="24" cy="24" rx="11" ry="4" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="11" ry="4" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(120 24 24)"/>
        <circle cx="24" cy="24" r="2.5" fill="#61DAFB"/>
        <circle cx="17" cy="17" r="2" fill="#3DDC84"/>
        <circle cx="31" cy="31" r="2" fill="#007AFF"/>
      </svg>
    ),
    bgColor: '#dce9fd',
  },
  {
    name: 'OpenAI',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
        <path d="M24 14C28 14 32 17 32 21C32 25 28 28 24 28C20 28 16 25 16 21C16 17 20 14 24 14Z" fill="currentColor"/>
        <circle cx="20" cy="19" r="2" fill="white"/>
        <circle cx="28" cy="19" r="2" fill="white"/>
        <path d="M20 23C20 24 21 25 22 25C23 25 24 24 24 23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 23C24 24 25 25 26 25C27 25 28 24 28 23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bgColor: '#d5f3ff',
  },
  {
    name: 'Android',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18C10.9 18 10 18.9 10 20V30C10 31.1 10.9 32 12 32H36C37.1 32 38 31.1 38 30V20C38 18.9 37.1 18 36 18H12Z" fill="#3DDC84"/>
        <circle cx="16" cy="22" r="2" fill="white"/>
        <circle cx="32" cy="22" r="2" fill="white"/>
        <path d="M18 26H30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 16L12 14" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 16L36 14" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 34L12 36" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 34L36 36" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    bgColor: '#e5fdde',
  },
  {
    name: 'Apple',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
        <path d="M24 12C24 10 25 8 27 7C26 6 24.5 5.5 23 6C21.5 6.5 20.5 8 20 10C20 12 21 14 23 14.5C24.5 14 25.5 13 24 12Z" fill="currentColor"/>
        <path d="M20 14C16 14 13 17 13 21C13 27 17 33 23 33C27 33 30 30 30 26C30 22 27 19 23 19C22 19 21 19 20 19V14Z" fill="currentColor"/>
      </svg>
    ),
    bgColor: '#e3e3e3',
  },
  {
    name: 'Ionic',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14" fill="white" stroke="#3880FF" strokeWidth="2"/>
        <circle cx="24" cy="24" r="7" fill="#3880FF"/>
      </svg>
    ),
    bgColor: '#e0faff',
  },
  {
    name: 'PHP',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="24" rx="22" ry="14" fill="#777BB4"/>
        <text x="24" y="29" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">php</text>
      </svg>
    ),
    bgColor: '#e3e3e3',
  },
  {
    name: 'Shopify',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 14L16 30L30 26L18 14Z" fill="#95BF47"/>
        <path d="M14 12L18 14L16 30L12 28L14 12Z" fill="#5E8E3E"/>
        <path d="M30 26L16 30L18 32L32 28L30 26Z" fill="#5E8E3E"/>
        <path d="M20 18L22 26L26 24L20 18Z" fill="white" opacity="0.3"/>
      </svg>
    ),
    bgColor: '#f2f7da',
  },
  {
    name: 'WordPress',
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14" fill="#21759B"/>
        <path d="M20 22C20 20.5 21 19 22.5 19C24 19 25 20.5 25 22C25 23.5 24 25 22.5 25C21 25 20 23.5 20 22Z" fill="white"/>
        <path d="M28 22C28 20.5 29 19 30.5 19C32 19 33 20.5 33 22C33 23.5 32 25 30.5 25C29 25 28 23.5 28 22Z" fill="white"/>
        <path d="M22 26C22 27 22.5 28 23.5 28C24.5 28 25 27 25 26" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bgColor: '#dce9fd',
  },
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
            <span className="text-[#1e3a8a]">Technologies</span>{' '}
            <span className="text-[#22c55e]">We Use</span>{' '}
            <span className="text-[#1e3a8a]">to Offer Our Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl p-3 sm:p-4 aspect-square flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: tech.bgColor }}
            >
              <div className="text-gray-800 mb-2 flex items-center justify-center h-16 sm:h-20">
                {tech.icon}
              </div>
              <p className="text-xs font-semibold text-center" style={{ color: 'rgb(30, 58, 138)' }}>
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;


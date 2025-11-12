import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', showText = true, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <svg
          width="40"
          height="32"
          viewBox="0 0 40 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={sizeClasses[size]}
        >
          {/* Chevron/Arrow Symbol (inverted V pointing up) - Left side */}
          <path
            d="M4 24L8 8L12 24"
            stroke="#14a1d5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Letter T - Right side */}
          <path
            d="M20 6H32M26 6V26"
            stroke="#14a1d5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showText && (
        <span className={`text-lg font-bold ${className.includes('text-white') ? 'text-white' : 'text-gray-900'}`}>KyszTech</span>
      )}
    </Link>
  );
};

export default Logo;


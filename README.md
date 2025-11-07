# KyszTech Website

A modern static website for KyszTech Pvt. Ltd. built with React 19, TypeScript, Tailwind CSS, and React Router.

## 🚀 Features

- **Modern Tech Stack**: React 19 with TypeScript
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Beautiful UI**: Tailwind CSS with custom purple gradient theme
- **Smooth Animations**: Framer Motion for scroll animations
- **SEO Optimized**: Meta tags and semantic HTML
- **Multi-page Routing**: React Router for navigation

## 📦 Installation

1. Navigate to the project directory:
```bash
cd kysztech-site
```

2. Use Node.js 20 (project uses nvm):
```bash
source ~/.nvm/nvm.sh
nvm use 20
```

3. Install dependencies:
```bash
npm install
```

## 🛠️ Development

Start the development server:
```bash
source ~/.nvm/nvm.sh
nvm use 20
npm run dev
```

The site will be available at:
- **Local**: `http://localhost:5173`
- **Network**: `http://YOUR_IP:5173` (accessible from other devices on same network)

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FeatureSection.tsx
│   ├── ServicesGrid.tsx
│   ├── Partners.tsx
│   ├── WhyChooseUs.tsx
│   ├── Industries.tsx
│   ├── BlogsSection.tsx
│   ├── CaseStudiesSection.tsx
│   ├── TrustedCertified.tsx
│   └── ContactSection.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── CaseStudies.tsx
│   ├── Blogs.tsx
│   └── Contact.tsx
├── App.tsx           # Main app with routing
├── main.tsx          # Entry point
└── index.css         # Global styles and Tailwind
```

## 🎨 Design System

### Colors
- **Primary Gradient**: `#6C63FF` → `#9F8CFF`
- **Accent**: `#E8E4FF`
- **Dark Background**: `#0B0B2B`

### Typography
- **Font Family**: Inter, Poppins, system-ui

## 📄 Pages

- `/` - Home page with all sections
- `/about` - About Us page
- `/services` - Services page
- `/case-studies` - Case Studies page
- `/blogs` - Blogs page
- `/contact` - Contact page

## 🔧 Customization

### Update Branding
Replace "KyszTech" mentions throughout the codebase with your brand name.

### Update Colors
Modify colors in `tailwind.config.js` and `src/index.css`.

### Add Content
Update placeholder content in component files with your actual content.

## 📝 License

© 2024 KyszTech Pvt. Ltd. All rights reserved.

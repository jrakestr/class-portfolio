# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my professional experience, projects, and skills in web development, AI, and IoT solutions.

## Features

- 🎨 Modern UI with smooth animations
- 📱 Fully responsive design
- 🎯 Interactive project showcase
- 📝 Contact form
- 📄 Downloadable resume
- 🌙 Clean and professional design

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/jrakestr/class-portfolio.git
   cd class-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
class-portfolio/
├── public/
│   ├── documents/          # PDFs and documents
│   │   ├── contactinfo.pdf
│   │   └── resume.pdf
│   └── images/
│       ├── portfolio/      # Project screenshots
│       │   ├── driverapp.png
│       │   ├── pastey.png
│       │   ├── readme.png
│       │   ├── sports.png
│       │   ├── vehicle.png
│       │   └── weather.png
│       └── profile/        # Profile images
│           └── headshot.jpg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ComingSoonPopup.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── Router.tsx
│   ├── pages/             # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Resume.tsx
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite environment types
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── postcss.config.js      # PostCSS configuration
```

## Deployment

This site is deployed on Netlify with continuous deployment from the main branch.

## License

MIT License - feel free to use this code for your own portfolio!
// Simple style guide for consistent styling

export const theme = {
  // Color classes
  colors: {
    primary: 'bg-gradient-to-r from-blue-400 to-emerald-400',
    background: 'bg-slate-900',
    cardBg: 'bg-slate-900',
    sectionBg: {
      default: '',
      about: 'bg-gradient-to-b from-slate-950 to-slate-900/80',
      portfolio: 'bg-slate-800/20',
      contact: ''
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      muted: 'text-gray-400',
      accent: 'text-emerald-400'
    }
  },
  
  // Component styles
  components: {
    // Common card style
    card: 'bg-slate-900 rounded-xl shadow-xl',
    
    // Button styles
    button: 'inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-emerald-600 transition-all shadow-lg',
    
    // Section styles
    section: 'py-20 px-4',
    
    // Heading styles
    heading: 'text-4xl font-bold mb-12 text-center',
    gradientText: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400'
  }
};

// Usage example:
// import { theme } from '../styles/theme';
// <div className={theme.components.card}>...</div>
// <section className={`${theme.components.section} ${theme.colors.sectionBg.about}`}>...</section>

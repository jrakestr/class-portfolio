import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { theme } from '../styles/theme';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      // Insert into Supabase table
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);
      
      if (error) throw error;
      
      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      
      // Clear form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={theme.components.section}>
      <div className="max-w-3xl mx-auto">
        <h2 className={theme.components.heading}>
          <span className={theme.components.gradientText}>
            Let's Work Together
          </span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 text-center">
          I'm currently available for freelance work and full-time positions.
          If you're interested in working together, feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className={`space-y-6 ${theme.components.card} p-8`}>
          {submitStatus.type && (
            <div className={`p-4 rounded-lg flex items-start ${
              submitStatus.type === 'success' 
                ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-900/30' 
                : 'bg-red-900/20 text-red-400 border border-red-900/30'
            }`}>
              {submitStatus.type === 'success' 
                ? <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" /> 
                : <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              }
              <span>{submitStatus.message}</span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all shadow-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all shadow-xl"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all shadow-xl"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${theme.components.button} hover:opacity-90 transform hover:scale-105 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Or reach out directly:</p>
          <a
            href="mailto:justin@transittrends.ai"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Mail className="mr-2 w-5 h-5" />
            justin@transittrends.ai
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
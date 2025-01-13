import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Let's Work Together
          </span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 text-center">
          I'm currently available for freelance work and full-time positions.
          If you're interested in working together, feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
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
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
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
              className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-emerald-400 text-white font-medium rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
            >
              Send Message
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
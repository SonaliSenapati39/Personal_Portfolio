import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-panel p-8 md:p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Let's <span className="text-primary text-glow">Connect</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Contact Details</h3>
              <p className="text-gray-400 mb-2">Email: <a href="mailto:shonaaaa317@gmail.com" className="text-primary hover:underline">shonaaaa317@gmail.com</a></p>
              <p className="text-gray-400">Phone: <a href="tel:9114300207" className="text-primary hover:underline">9114300207</a></p>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" name="name" placeholder="Name" required 
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                />
                <input 
                  type="email" name="email" placeholder="Email" required 
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                />
              </div>
              <input 
                type="text" name="subject" placeholder="Subject" required 
                value={formData.subject} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
              />
              <textarea 
                name="message" placeholder="Message" rows="5" required 
                value={formData.message} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 rounded-lg bg-primary/10 border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all duration-300 border-glow"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

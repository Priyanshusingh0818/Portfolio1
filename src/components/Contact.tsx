import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          {/* Left Column: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              Let's Build Something <br className="hidden md:block" /><span className="text-gradient">Intelligent.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md font-light mb-10">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex gap-4">
              <a href="https://github.com/Priyanshusingh0818" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-gray-300 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/priyanshu-singh-560b16253/" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-gray-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <form 
              className="flex flex-col gap-6" 
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                const originalText = submitBtn.innerHTML;
                
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const email = (document.getElementById('email') as HTMLInputElement).value;
                const message = (document.getElementById('message') as HTMLTextAreaElement).value;
                
                try {
                  submitBtn.innerHTML = '<span class="relative z-10 flex items-center justify-center gap-2">Sending...</span>';
                  submitBtn.disabled = true;
                  
                  const response = await fetch("https://formsubmit.co/ajax/priyanshusinghrajput193@gmail.com", {
                    method: "POST",
                    headers: { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                      name,
                      email,
                      message,
                      _subject: `New Portfolio Message from ${name}`
                    })
                  });
                  
                  if (response.ok) {
                    alert("Message sent successfully!");
                    form.reset();
                  } else {
                    alert("Failed to send message. Please try again later.");
                  }
                } catch (error) {
                  console.error(error);
                  alert("An error occurred. Please try again later.");
                } finally {
                  submitBtn.innerHTML = originalText;
                  submitBtn.disabled = false;
                }
              }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name" className="text-sm font-mono text-gray-400">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="John Doe" 
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email" className="text-sm font-mono text-gray-400">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="john@example.com" 
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-gray-400">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  placeholder="Tell me about your project..." 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="group relative w-full sm:w-auto self-start bg-white text-black font-medium px-8 py-3 rounded-xl overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

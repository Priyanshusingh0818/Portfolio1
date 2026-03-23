import { motion } from 'motion/react';
import { ArrowRight, FileText, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ 
            opacity: { duration: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-mono mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
        >
          <Terminal className="w-4 h-4 mr-2" />
          <span>std::cout &lt;&lt; "Hello World!\\n";</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-6"
        >
          Hi, I'm Priyanshu — <br className="hidden md:block" />
          <span className="text-gray-400">I build </span>
          <span className="text-gradient">intelligent systems</span>
          <br className="hidden md:block" />
          <span className="text-gray-400"> & robust backend architectures.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed"
        >
          Computer Science student specializing in AI/ML. Passionate about solving complex problems through elegant code and scalable architecture.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="group flex items-center px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            View Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/10NrQcwFBtfvIX5ZwX5JH70hcDE0ht7_Q/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center px-6 py-3 glass-panel rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            <FileText className="w-4 h-4 mr-2" />
            View Resume
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="flex items-center px-6 py-3 text-gray-300 hover:text-white font-medium transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

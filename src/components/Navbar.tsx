import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 glass-panel border-x-0 border-t-0"
    >
      <div className="font-display font-bold text-xl tracking-tighter">
        <span className="text-white">Priyanshu</span>
        <span className="text-indigo-500">.</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <a href="https://github.com/Priyanshusingh0818" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/priyanshu-singh-560b16253/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#contact" className="hidden md:flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-medium transition-all">
          <Mail className="w-4 h-4 mr-2" />
          Say Hello
        </a>
      </div>
    </motion.nav>
  );
}

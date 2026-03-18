import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-lg pt-16 pb-8 px-6 md:px-12 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-1">
            <div className="font-display font-bold text-2xl tracking-tighter">
              <span className="text-white">Priyanshu</span>
              <span className="text-indigo-500">.</span>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xs">
              Building intelligent systems and scalable backend architectures. Always open to discussing new projects and opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm w-fit flex items-center group">
                About <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm w-fit flex items-center group">
                Skills <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm w-fit flex items-center group">
                Projects <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="#experience" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm w-fit flex items-center group">
                Experience <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-4">
              <a href="mailto:priyanshusinghrajput193@gmail.com" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors text-sm group">
                <div className="p-2 bg-white/5 rounded-lg mr-3 group-hover:bg-indigo-500/20 transition-colors">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
                priyanshusinghrajput193@gmail.com
              </a>
              <a href="tel:+918318918018" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors text-sm group">
                <div className="p-2 bg-white/5 rounded-lg mr-3 group-hover:bg-indigo-500/20 transition-colors">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
                +91 8318918018
              </a>
              <div className="flex items-center text-gray-400 text-sm group">
                <div className="p-2 bg-white/5 rounded-lg mr-3">
                  <MapPin className="w-4 h-4" />
                </div>
                India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-500 font-mono text-xs">
            © {new Date().getFullYear()} Priyanshu Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

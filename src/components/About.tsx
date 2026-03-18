import { motion } from 'motion/react';
import { Code2, Cpu, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-indigo-500">01.</span> About Me
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent max-w-md" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg font-light leading-relaxed"
          >
            <p>
              I am a Computer Science student specializing in AI and Machine Learning, driven by a passion for building intelligent systems that solve complex, real-world problems. I thrive at the intersection of machine learning and full-stack development, crafting applications that are both powerful and accessible.
            </p>
            <p>
              Through competitive hackathons, industry internships, and rigorous hands-on projects, I have honed my ability to design scalable architectures and engineer efficient solutions. I prioritize writing clean, maintainable code and developing technology that delivers tangible value.
            </p>
            <p>
              Endlessly curious, I am constantly exploring emerging tools and frameworks to elevate my craft. My ultimate goal is to engineer innovative, high-performance systems that make a lasting, meaningful impact.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-indigo-300 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
                <Cpu className="w-4 h-4" /> AI/ML
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-purple-300 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                <Code2 className="w-4 h-4" /> Full-Stack
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full transition-transform group-hover:scale-110" />

              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px]">
                  <div className="w-full h-full bg-space-800 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-white">P</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">Priyanshu</h3>
                  <p className="text-indigo-400 font-mono text-sm">CS Student & Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400">Location</span>
                  <span className="text-white font-medium flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-indigo-400" /> Earth
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400">Education</span>
                  <span className="text-white font-medium">B.Tech Computer Science</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-400">Interests</span>
                  <span className="text-white font-medium">AI, Full-Stack, Systems</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

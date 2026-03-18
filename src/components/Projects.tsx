import { motion } from 'motion/react';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';

import investImg from '../../images/invest.png';
import vitaImg from '../../images/Vita.png';
import supplyImg from '../../images/supply.png';
import waterImg from '../../images/water.png';

const projects = [
  {
    title: "InvestIQ – Real-Time Stock Market Prediction",
    description: "A real-time stock analysis platform combining deep learning-based price prediction, sentiment analysis, and interactive learning tools to assist beginner investors in data-driven decision making.",
    tags: ["Python", "Machine Learning", "Time Series Forecasting", "NLP"],
    github: "https://github.com/Priyanshusingh0818/investiq-dashboard",
    demo: "https://investiq-dashboard-mu.vercel.app/",
    image: investImg
  },
  {
    title: "VitaHealth - AI-Powered Healthcare Platform",
    description: "VitaHealth is a cutting-edge AI-powered medical technology platform that leverages fine-tuned Large Language Models to revolutionize healthcare support. Our platform provides accurate personalized diagnostics, medicine identification, and tailored treatment recommendations based on real-world medical datasets to ensure reliability and trust.",
    tags: ["Python", "Flask", "LLM", "OpenCV", "CNN"],
    github: "https://github.com/Priyanshusingh0818/VitaHealth",
    demo: "https://vitahealth-platform.vercel.app/",
    image: vitaImg
  },
  {
    title: "InvGuard - Secure Inventory Management System",
    description: "A comprehensive, full-stack inventory management system built with React, Flask, and Docker. InvGuard provides secure, scalable inventory tracking with real-time analytics, automated backups, and role-based access control.",
    tags: ["Docker", "JWT", "Redis", "Caching", "React"],
    github: "https://github.com/Priyanshusingh0818/Containerized-Supply-Chain-Management",
    demo: "https://inv-gaurd-demo.vercel.app/",
    image: supplyImg
  },
  {
    title: "AquaSense: Interactive Water Pollution Dashboard",
    description: "AquaSense is an AI-powered, full-stack water quality monitoring and prediction platform. It leverages a rigorous Machine Learning architecture combined with Groq-powered Generative AI to provide real-time potability assessments and comprehensive environmental insights based on standard water parameter tests.",
    tags: ["Data Science", "React", "Flask", "LeafLet"],
    github: "https://github.com/Priyanshusingh0818/Aquasense-Water-Quality-Index",
    demo: "https://aquasense-water-quality-index.vercel.app/",
    image: waterImg
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-pink-500">03.</span> Featured Projects
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent max-w-md" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full bg-[#0A0A14] overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent z-10 opacity-80" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 relative z-0 mix-blend-normal opacity-100"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-4 right-4 z-20 flex gap-3">
                  {project.github && (
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors border border-white/10">
                      <Github className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={project.demo} target="_blank" rel="noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors border border-white/10">
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 font-light leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 rounded-md text-xs font-mono text-gray-400 border border-white/5 group-hover:border-white/10 group-hover:text-gray-200 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
